import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../InteractiveFormBuilder/Form.type";
import FormBuilder from "../InteractiveFormBuilder/FormBuilder";

const Information = () => {
  const schema: Form = [
    {
      title: "상품정보 입력",
      subTitle: "비우고 싶은 제품이 무엇인지 설명해주세요!",
      fields: [
        {
          type: "text",
          tabName: "제품 이름 입력",
          title: "비우려는 물건의 이름을 알려주세요",
          accent: "이름",
          hint: "물건의 이름이 무엇인가요?",
        },
        {
          type: "text",
          tabName: "제품 종류 선택",
          title: "물건의 종류는 무엇인가요?",
          accent: "종류",
          hint: "임시로 텍트스 필드입니다",
        },
      ],
    },
    {
      title: "경매방식 선택",
      subTitle: "원하는 경매 방식을 선택하세요.",
      fields: [
        {
          type: "text",
          tabName: "경매방식 선택",
          title: "어떤 방법으로 비울까요?",
          accent: "방법",
          hint: "임시로 텍트스 필드입니다",
        },
        {
          type: "text",
          tabName: "시작 가격 입력",
          title: "경매를 시작할 가격을 알려주세요",
          accent: "시작할 가격",
          hint: "임시로 텍트스 필드입니다",
        },
      ],
    },
  ];
  const [value, setValue] = useState({});

  return (
    <FormBuilder
      schema={schema}
      onSubmit={(value) => setValue(value)}
    ></FormBuilder>
  );
};
export default Information;
