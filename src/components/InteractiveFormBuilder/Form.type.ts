type DefaultFieldType =
  | "string"
  | "number"
  | "radio"
  | "checkbox"
  | "image"
  | "textarea"
  | "address";

type ComplexFieldType = "complex";

export type FieldType = DefaultFieldType | ComplexFieldType;

type DefaultField = {
  type: DefaultFieldType;
  tabName?: string;
  title: string;
  accent: string;
  defaultValue?: "";
};

type SimpleField = DefaultField; //|| SomeField;

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
