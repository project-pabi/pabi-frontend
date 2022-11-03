import { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { Input } from "./SignUp.style";

export const Postcode = () => {
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (address !== "") {
      setVisible((visible) => !visible);
    }
  }, [address]);
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setAddress(fullAddress);
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <>
      <button
        type="button"
        className="w-[380px] h-12 bg-[#A1A1E8] rounded-[20px] py-[13.5px] px-6 mt-2 text-[#ffffff] "
        onClick={() => {
          handleClick();
        }}
      >
        🍳주소 검색
      </button>
      {visible && (
        <Input type="text" defaultValue={address} placeholder="주소" disabled />
      )}
      {visible && <Input type="text" placeholder="상세주소" />}
    </>
  );
};
