import {FieldValues} from "react-hook-form/dist/types/fields";
import {FieldPath} from "react-hook-form/dist/types/path";
import {RegisterOptions} from "react-hook-form/dist/types/validator";

export interface InputProps<T extends FieldValues> {
  name: FieldPath<T>;
  className?: string;
  type: string;
  placeholder?: string;
  option?: RegisterOptions<T, FieldPath<T>>
  errorMessage?: Record<string, string>
}