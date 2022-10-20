import { FC, ReactElement, Fragment, useState } from "react";
import { Form, Tab, Field } from "./Form.type";
import {
  Input,
  Label,
  NextButton,
  PrevButton,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  Title,
} from "../NewInformation/Information.style";

interface Props {
  schema: Form;
  onSubmit?: (a: object) => void;
}

const FormBuilder: FC<Props> = ({ schema, onSubmit }) => {
  let [tapIndex, setTapIndex] = useState<number>(0);
  let [fieldIndex, setFieldIndex] = useState<number>(0);

  function renderField(field: Field): ReactElement {
    return (
      <Fragment>
        {field.title}
        <button
          className="bg-primary-500 text-white h-8 w-16"
          onClick={() => setFieldIndex(fieldIndex + 1)}
        >
          다음
        </button>
      </Fragment>
    );
  }

  function renderTab(tab: Tab): ReactElement {
    return (
      <Fragment>
        <Title>{tab.title}</Title>
        <SubTitle>{tab.subTitle}</SubTitle>
        {tab.fields.map(
          (field: Field, index: number) =>
            fieldIndex === index && renderField(field)
        )}
        <button
          className="bg-primary-500 text-white h-8 w-16"
          onClick={() => setTapIndex(tapIndex + 1)}
        >
          다음탭
        </button>
      </Fragment>
    );
  }

  function renderForm(schema: Form): ReactElement {
    return (
      <Fragment>
        {schema.map(
          (tab: Tab, index: number) => tapIndex === index && renderTab(tab)
        )}
      </Fragment>
    );
  }

  return renderForm(schema);
};

export default FormBuilder;
