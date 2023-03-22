import * as yup from 'yup';
import isNumeric from 'validator/lib/isNumeric';
import { AnyMessageParams } from 'yup/lib/types';

const mixed = {
  default: ({ path, label }: AnyMessageParams) => `${label || path}항목은 사용할수 없는 값입니다.`,
  required: ({ path, label }: AnyMessageParams) => `${label || path}항목은 필수입력값입니다.`,
  oneOf: ({ path, label, values }: AnyMessageParams) => `${label || path}항목은 다음 값 중 하나여야 합니다.: ${values}`,
  notOneOf: ({ path, label, values }: AnyMessageParams) => `${label || path}항목은 다음 값 중 하나가 아니어야 합니다.: ${values}`,
  notType: function notType({ path, label, type, value, originalValue }: AnyMessageParams) {
    // let isCast = originalValue != null && originalValue !== value;

    if (type === `number`) {
      return `${label || path} 항목은 숫자만 입력해주세요.`;
    }
    if (type === `date`) {
      return `${label || path} 항목은 날짜 형식으로 입력해주세요.`;
    }
    return `${label || path} 항목은 ${type} 형식으로 입력해주세요.`;
  },
  defined: ({ path, label }: AnyMessageParams) => `${label || path} 항목은 정의되지 않았습니다.`,
};
const string = {
  notEmpty: ({ path, label }: AnyMessageParams) => `${label || path} 항목은 필수입력값입니다.`,
  notBlank: ({ path, label }: AnyMessageParams) => `${label || path} 항목은 필수입력값입니다.`,
  email: ({ path, label }: AnyMessageParams) => `${label || path}의 값은 유효한 이메일 형식이어야 합니다`,
  length: ({ path, label, length }: AnyMessageParams) => `${label || path} 값을 ${length}자로 입력해 주세요`,
  max: ({ path, label, max }: AnyMessageParams) => `${label || path} ${max}글자 이하로 입력해 주세요`,
  min: ({ path, label, min }: AnyMessageParams) => `${label || path} ${min}글자 이상로 입력해 주세요`,
  url: ({ path, label }: AnyMessageParams) => `${label || path} 항목에 올바른 URL을 입력해 주세요`,
  uuid: ({ path, label }: AnyMessageParams) => `${label || path}은/는 유효한 UUID이어야 합니다`,
  lowercase: ({ path, label }: AnyMessageParams) => `${label || path}은/는 모두 소문자이어야 합니다`,
  uppercase: ({ path, label }: AnyMessageParams) => `${label || path}은/는 모두 대문자이어야 합니다`,
  date: ({ path, label }: AnyMessageParams) => `${label || path}의 값은 유효한 날짜 형식이여야 합니다.`,
};
const number = {
  max: ({ path, label, max }: AnyMessageParams) => `${label || path}의 값은 ${max} 이하이어야 합니다`,
  min: ({ path, label, min }: AnyMessageParams) => `${label || path}의 값은 ${min} 이상이어야 합니다`,
  lessThan: ({ path, label, less }: AnyMessageParams) => `${label || path} 의 값은 ${less} 미만이어야 합니다`,
  moreThan: ({ path, label, more }: AnyMessageParams) => `${label || path} 의 값은 ${more} 초과하여야 합니다`,
  positive: ({ path, label }: AnyMessageParams) => `${label || path}의 값은 양수이어야 합니다`,
  negative: ({ path, label }: AnyMessageParams) => `${label || path}의 값은 음수이어야 합니다`,
  integer: ({ path, label }: AnyMessageParams) => `${label || path}의 값은 정수이어야 합니다`,
};
const date = {
  min: ({ path, label, min }: AnyMessageParams) => `${label || path}의 날짜는 ${min} 이후이여야 합니다.`,
  max: ({ path, label, max }: AnyMessageParams) => `${label || path}의 날짜는 ${max} 이전이여야 합니다.`,
};

const array = {
  length: ({ path, label, length }: AnyMessageParams) => `${label || path}은/는 ${length}개의 항목을 가져야 합니다`,
  max: ({ path, label, max }: AnyMessageParams) => `${label || path}은/는 최대 ${max}개의 항목을 가져야 합니다`,
  min: ({ path, label, min }: AnyMessageParams) => `${label || path}은/는 최소 ${min}개의 항목을 가져야 합니다`,
};

const customLocale = Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  array,
});

yup.addMethod(yup.string, 'isNumeric', function () {
  return this.test('isNumeric', (value, { createError }) => {
    if (value && !isNumeric(value, { no_symbols: true })) {
      return createError();
    }
    return true;
  });
});

yup.addMethod(yup.string, 'notEmpty', function () {
  return this.test('notEmpty', (value, { createError }) => {
    if (!value) {
      return createError();
    }
    return true;
  });
});

yup.addMethod(yup.string, 'notBlank', function () {
  return this.test('notBlank', (value, { createError }) => {
    if (!value?.trim()) {
      return createError();
    }
    return true;
  });
});

yup.setLocale(customLocale);

export default yup;
