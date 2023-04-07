import {useFormContext} from "react-hook-form";
import {WarnIcon, ErrorMessage} from "@component/Sign/SignUp.style";
import warn from "@assets/images/warn.png";
import {FieldValues} from "react-hook-form/dist/types/fields";
import {InputProps} from "@component/InputField/BaseInput.type";
import React, {useEffect} from "react";


export default function BaseInput<T extends FieldValues>(props: InputProps<T>) {
  // form
  const {register, formState: {errors}} = useFormContext<T>();
  const name = props.name;

  useEffect(() => {
    console.log(errors)
    console.log(props.errorMessage)
  }, [errors])

  const getErrorMsg = () => {
    let errorMessage: string | undefined;

    console.log(props.errorMessage)
    if (props.errorMessage) {
      const type = errors[name]?.type as string
      errorMessage = props.errorMessage?.[type]
    } else {
      errorMessage = errors[name]?.message as string | undefined;
    }

    if (errorMessage) {
      return <ErrorMessage>{errorMessage}</ErrorMessage>
    }
    return <ErrorMessage>알 수 없는 문제가 발생했습니다.</ErrorMessage>
  }

  const getClass = () => {
    let className = '';

    if (errors[name]) {
      className += " focus-within:!border-system-error !border-system-error "
    }

    if (props.className) {
      className += props.className;
    }


    return className
  }

  return (
      <>
        <div className={getClass()}>
          <input
              type={props.type}
              placeholder={props.placeholder}
              {...register(name, props.option)}/>
          {errors[name] && <WarnIcon className="float-right" src={warn}/>}
        </div>

        {errors[name] && getErrorMsg()}
      </>
  );
}
