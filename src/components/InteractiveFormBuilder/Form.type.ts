type DefaultFieldType =
  | "text"
  | "number"
  | "radio"
  | "checkbox"
  | "image"
  | "textarea"
  | "address";

type ComplexFieldType = "complex";

export type FieldType = DefaultFieldType | ComplexFieldType;

type FieldListValue = {
  key: number | string;
  text: string;
  label?: string;
};

export type TextField = {
  type: "text";
  tabName: string;
  title: string;
  accent: string;
  hint: string;
  defaultValue?: "";
};

export type NumberField = {
  type: "number";
  symbols: boolean;
  tabName: string;
  title: string;
  accent: string;
  hint: string;
  defaultValue?: "";
};

export type RadioField = {
  type: "radio";
  values: FieldListValue[];
  tabName: string;
  title: string;
  accent: string;
  hint: string;
  defaultValue?: "";
};

export type CheckboxField = {
  type: "checkbox";
  values: FieldListValue[];
  tabName: string;
  title: string;
  accent: string;
  hint: string;
  defaultValue?: "";
};

export type SimpleField =
  | TextField
  | NumberField
  | RadioField
  | CheckboxField
  | {
      type: DefaultFieldType;
      tabName: string;
      title: string;
      accent: string;
      hint: string;
      defaultValue?: "";
    };

type ComplexField = {
  type: ComplexFieldType;
  subField: SimpleField[];
  tabName: string;
  title: string;
  accent: string;
  defaultValue?: "";
};

export type Field = SimpleField | ComplexField;

export type Tab = {
  title: string;
  subTitle: string;
  fields: Field[];
};

export type Form = Tab[];
