import {useState} from 'react';

function useNumberInput() {
  const [value, setNumValue] = useState<string>('');
  const [err, serErr] = useState<string>('');

  function setValue(val: string) {
    setNumValue(val);
    setNumValue(String(val).replace(/[^0-9]/gi, ''));
  }

  return [value, err, setValue, serErr];
}

export default useNumberInput;