import * as Yup from 'yup';

import data from '@/data/form.json';

const { validation } = data.form;
const { userName, socialLink, phoneNumber, question, common } = validation;

export const schema = Yup.object().shape({
  userName: Yup.string()
    .required(common.required)
    .matches(RegExp(userName.format.reg), userName.format.message)
    .min(userName.minLength.value, userName.minLength.message)
    .max(userName.maxLength.value, userName.maxLength.message),
  socialLink: Yup.string()
    .required(common.required)
    .max(socialLink.maxLength.value, socialLink.maxLength.message),
  phoneNumber: Yup.string()
    .matches(RegExp(phoneNumber.format.reg), {
      message: phoneNumber.format.message,
      excludeEmptyString: true,
    })
    .test('phoneNumber', phoneNumber.minLength.message, function (value) {
      if (!value) return true;
      const schema = Yup.string().min(phoneNumber.minLength.value);
      return schema.isValidSync(value);
    })
    .max(phoneNumber.maxLength.value, phoneNumber.maxLength.message),
  question: Yup.string()
    .matches(RegExp(question.format.reg), {
      message: question.format.message,
      excludeEmptyString: true,
    })
    .test('question', question.minLength.message, function (value) {
      if (!value) return true;
      const schema = Yup.string().min(question.minLength.value);
      return schema.isValidSync(value);
    })
    .max(question.maxLength.value, question.maxLength.message),
});
