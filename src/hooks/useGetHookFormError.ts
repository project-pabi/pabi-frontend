import {useEffect, useState} from 'react';
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {FieldValues} from "react-hook-form/dist/types/fields";

type Error = { key: string, message: string }

function useGetHookFormError<T>(error: FieldErrors): Error[] {
  const [errs, setErrs] = useState<Error[]>([]);

  function getErrors(error: FieldValues): Error[] {
    const errors: Error[] = [];
    for (const key of Object.keys(error)) {
      if (key === 'message') {
        const message = error[key];
        if (message) {
          errors.push({key: '', message: error[key]?.message as string})
        }
      } else if (error[key]){
        const childErrors = getErrors(error[key])
        .map((error) => {
          const childError = error;
          childError.key = key + '.' + childError.key
          return childError;
        });
        errors.push(...childErrors)
      }
    }
    return errors;
  }

  useEffect(() => {
    const errors = getErrors(error)
    console.log(errors)
    setErrs(errors)
  }, [error])

  return errs;
}

export default useGetHookFormError;