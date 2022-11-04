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

type FieldCommonValue = {
  key: string;
  tabName: string;
  title: string;
  accent: string;
  hint: string;
  required: boolean;
  validate: (a: object) => boolean;
};

export type TextField = {
  type: "text";
  defaultValue?: string;
} & FieldCommonValue;

export type NumberField = {
  type: "number";
  symbols: boolean;
  defaultValue?: number;
} & FieldCommonValue;

export type RadioField = {
  type: "radio";
  values: FieldListValue[];
  defaultValue?: number | string;
} & FieldCommonValue;

export type CheckboxField = {
  type: "checkbox";
  values: FieldListValue[];
  defaultValue?: number[] | string[];
} & FieldCommonValue;

export type SimpleField = TextField | NumberField | RadioField | CheckboxField;

type ComplexField = {
  key: string;
  type: ComplexFieldType;
  subField: SimpleField[];
  tabName: string;
  title: string;
  accent?: string;
  required: boolean;
};

export type Field = SimpleField | ComplexField;

export type Tab = {
  key: string;
  title: string;
  subTitle: string;
  fields: Field[];
};

export type Form = Tab[];
