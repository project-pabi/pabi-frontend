import {useState} from 'react';

function useTextInput() {
  const [value, setValue] = useState<string>('');
  const [err, serErr] = useState<string>('');

  return [value, err, setValue, serErr];
}

export default useTextInput;