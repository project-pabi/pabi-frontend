import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Vector from "./Vector.png";
import {UseFormRegisterReturn} from "react-hook-form";
import {isEmpty} from "lodash";
import {ChangeHandler, RefCallBack} from "react-hook-form/dist/types/form";

interface Props {
  register: UseFormRegisterReturn
  value?: FileList;
}


async function fileListToBase64(fileList: File[]): Promise<string[]> {
  // create function which return resolved promise
  // with data:base64 string
  function getBase64(file: File):Promise<string> {
    const reader = new FileReader()
    return new Promise(resolve => {
      reader.onloadend = () => {
        const previewImgUrl = reader.result;
        if (previewImgUrl && typeof previewImgUrl === "string") {
          resolve(previewImgUrl)
        }else{
          resolve('')
        }
      }
      reader.readAsDataURL(file)
    })
  }

  // here will be array of promisified functions
  const promises:Array<Promise<string>> = []

  // loop through fileList with for loop
  for (let i = 0; i < fileList.length; i++) {
    promises.push(getBase64(fileList[i]))
  }

  // array with base64 strings
  return await Promise.all(promises)
}

const Upload = ({register, value}: Props) => {
  const allFiles = useRef<HTMLInputElement | null>(null);
  const [img, setImg] = useState<File[]>([]);
  const [previewImg, setPreviewImg] = useState<string[]>([]);
  const {onChange, onBlur, ref, name}: UseFormRegisterReturn = register;

  useEffect(() => {
    if (value && allFiles.current !== null) {
      console.log(value);
      allFiles.current.files = value
      const fileList = []
      for (let index = 0; index < value.length; index += 1) {

          fileList.push(value[index])

      }
      setImg(fileList)
      fileListToBase64(fileList).then((previewImg)=>{
        setPreviewImg(previewImg)
      })
    }
  }, [allFiles, value])

  const insertImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl && typeof previewImgUrl === "string") {
        setPreviewImg([...previewImg, previewImgUrl]);
      }
    };

    const files = e.target.files;

    if (files === null) {
      return;
    }

    if (files[0]) {
      reader.readAsDataURL(files[0]);

      setImg([...img, files[0]]);
    }

    if (register && allFiles.current) {
      const dataTransfer = new DataTransfer();
      img.forEach((image) => {
        dataTransfer.items.add(image);
      })

      dataTransfer.items.add(files[0]);
      allFiles.current.files = dataTransfer.files;
      allFiles.current.dispatchEvent(new Event('change', {bubbles: true}));
    }
  };

  const deleteImg = (index: any) => {
    const imgArr = img.filter((el: any, idx: number) => idx !== index);
    const imgNameArr = previewImg.filter(
        (el: any, idx: number) => idx !== index
    );

    setImg([...imgArr]);
    setPreviewImg([...imgNameArr]);
  };

  const getPreviewImg = () => {
    return img.map((el: any, index: any) => {
      return (
          <div key={index} className="flex">
            <Img id="images" key={index} src={previewImg[index]}></Img>
            <CloseButton onClick={() => deleteImg(index)}>×</CloseButton>
          </div>
      );
    });
  };

  return (
      <>
        <UploadLabel htmlFor="inputfile">
          <img src={Vector} alt="Vector" className="mx-auto mt-[70px]"/>
          여기로 파일을 끌어오세요.
        </UploadLabel>
        <ImgInput
            type="file"
            ref={(e) => {
              ref(e);
              allFiles.current = e;
            }}
            onChange={(e) => onChange(e)}
            onBlur={(e) => onBlur(e)}
            name={name}
            accept="image/jpg, image/jpeg, image/png"
        />
        <ImgInput
            type="file"
            id="inputfile"
            accept="image/jpg, image/jpeg, image/png"
            onChange={(e) => insertImg(e)}
        />
        <div className="flex mt-[30px] justify-center">{getPreviewImg()}</div>
      </>
  );
};

export default Upload;

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #0000d8;
  color: #ffffff;
  font-size: 7px;
  line-height: 15.5px;
  z-index: 2;
  margin-left: 50px;
  top: 772px;
`;

const UploadLabel = styled.label`
  display: inline-block;
  width: 380px;
  height: 180px;
  font-weight: 400;
  font-size: 13px;
  color: #9e9e9e;
  border: 1px dashed #9e9e9e;
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
`;
const ImgInput = styled.input`
  display: flex;
  position: absolute;
  width: 0;
  height: 0;
`;
