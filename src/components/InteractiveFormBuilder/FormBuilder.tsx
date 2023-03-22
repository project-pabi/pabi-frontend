import { FC, ReactElement, Fragment, useState } from "react";
import { Form, Tab, Field, TextField } from "./Form.type";
import { TabContext, TabList, TabPanel } from "@mui/lab";
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
import { Box } from "@mui/material";
import { stringify } from "querystring";

interface Props {
  schema: Form;
  onSubmit?: (a: object) => void;
}

const FormBuilder: FC<Props> = ({ schema, onSubmit }) => {
  const tabLength = schema.length;
  const fieldLength = schema.map((tab) => tab.fields.length);
  let [tabIndex, setTabIndex] = useState<number>(0);
  let [fieldIndex, setFieldIndex] = useState<number>(0);

  const changeTab = (event: React.SyntheticEvent, newValue: string) => {
    setFieldIndex(Number(newValue));
  };

  const prevField = () => {
    if (tabIndex === 0 && fieldIndex === 0) {
      return;
    }

    if (fieldIndex === 0) {
      setFieldIndex(fieldLength[tabIndex - 1] - 1);
      setTabIndex(tabIndex - 1);
      return;
    }

    setFieldIndex(fieldIndex - 1);
  };

  const nextField = () => {
    if (tabIndex + 1 >= tabLength && fieldIndex + 1 >= fieldLength[tabIndex]) {
      return;
    }

    if (fieldIndex + 1 >= fieldLength[tabIndex]) {
      setFieldIndex(0);
      setTabIndex(tabIndex + 1);
      return;
    }

    setFieldIndex(fieldIndex + 1);
  };

  const PrevNextButton = (
    <div className="flex justify-center mt-10">
      {!(tabIndex === 0 && fieldIndex === 0) && (
        <PrevButton onClick={prevField}>이전으로</PrevButton>
      )}
      {(tabIndex !== tabLength - 1 ||
        fieldIndex !== fieldLength[tabIndex] - 1) && (
        <NextButton onClick={nextField}>다음으로</NextButton>
      )}
    </div>
  );

  function renderFieldTitle({
    title,
    accent,
  }: Field): ReactElement | ReactElement[] {
    if (!accent) {
      return <>{title}</>;
    }

    const accentPiece = <span className="text-primary-500">{accent}</span>;

    return title
      .split(accent)
      .map((titlePiece) => [<>{titlePiece}</>, accentPiece])
      .flatMap((titlePiece) => titlePiece)
      .slice(0, -1);
  }

  function renderTextInput(field: TextField): ReactElement {
    return (
      // <TextBox
      //   type="text"
      //   placeholder={field.hint}
      //   value={inputValue}
      //   onChange={(e) => setInputValue(e.target.value)}
      // >
      //   {" "}
      // </TextBox>
      <></>
    );
  }

  function renderInput(field: Field): ReactElement {
    switch (field.type) {
      case "text":
        return <>준비중</>;
      case "number":
        return <>준비중</>;
      case "radio":
        return <>준비중</>;
      case "checkbox":
        return <>준비중</>;
      //case "image":
      //  return <>준비중</>;
      //case "textarea":
      //  return <>준비중</>;
      //case "address":
      //  return <>준비중</>;
      case "complex":
        return <>준비중</>;
    }
  }

  function renderField(field: Field): ReactElement {
    return (
      <Fragment>
        <TabTitle>{renderFieldTitle(field)}</TabTitle>
        {renderInput(field)}
        {PrevNextButton}
      </Fragment>
    );
  }

  function renderFieldLabel(fields: Field[]): ReactElement[] {
    return fields.map((field: Field, index: number) => (
      <StyledTab label={field.tabName} value={String(index)} />
    ));
  }

  function getTabBox(tab: Tab): ReactElement {
    return (
      <Box>
        <TabList
          onChange={changeTab}
          aria-label="lab API tabs example"
          className="mb-10"
          variant="fullWidth"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "10px",
            "& button.Mui-selected": {
              backgroundColor: "#0000D8",
              color: "#ffffff",
            },
          }}
        >
          {renderFieldLabel(tab.fields)}
        </TabList>
      </Box>
    );
  }

  function getTabPanel(field: Field, index: number): ReactElement {
    return (
      <TabPanel
        value={String(index)}
        className="text-center"
        sx={{
          boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
          borderRadius: "20px",
          padding: "88px",
        }}
      >
        {renderField(field)}
      </TabPanel>
    );
  }

  function getTabPanels(fields: Field[]): ReactElement[] {
    return fields.map((field: Field, index: number) =>
      getTabPanel(field, index)
    );
  }

  function renderTab(tab: Tab): ReactElement {
    return (
      <Fragment>
        <Title>{tab.title}</Title>
        <SubTitle>{tab.subTitle}</SubTitle>
        <TabContext value={String(fieldIndex)}>
          {getTabBox(tab)}
          {getTabPanels(tab.fields)}
        </TabContext>
      </Fragment>
    );
  }

  function renderForm(schema: Form): ReactElement {
    return <Fragment>{renderTab(schema[tabIndex])}</Fragment>;
  }

  return renderForm(schema);
};

export default FormBuilder;
