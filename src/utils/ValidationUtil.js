/** @format */

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import * as yup from "yup";

/*********************************************************
 *
 *  Custom hooks hook forms
 *
 ********************************************************/
// hook for single field
const ValidationType = {
  required: "required",
  minLength: "min_length",
  character: "character",
  confirmPassword: "confirm_password",
  equalLength: "equal_length",
  greaterTime: "greater_time",
  email: "email",
  url: "url",
  alphabetic: "alphabetic",
  alphanumeric: "alphanumeric",
  space: "space",
  phone: "phone",
  cnic: "cnic",
  password: "password",
};
const Regex = {
  alphabets: /^[a-zA-Z ]+$/,
  alphanumeric: /^[a-zA-Z0-9 ]+$/,
  phoneRegExp: /^[0-9]{7,10}$/,
  cnic: /^[0-9]{13}$/,
  // phoneRegExp:
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  space: /^\S*$/,
  lowerCase: /^(?=.*[a-z])/,
  upperCase: /^(?=.*[A-Z])/,
  numeric: /^(?=.*[0-9])/,
  special: /^(?=.*[!@#$%^&*])/,
  url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
};

const strings = (_type, label) => {
  const validation = {
    space: `Enter a valid ${label}`,
    enter: "Please enter",
    cnic: `Enter a valid ${label}`,
    select: "Select",
    max_characters: "Max characters",
    required: `Please enter ${label}`,
    min_length: `Must have ${label} characters or longer`,
    greater_time: `End time must be greater than Start time`,
    equal_length: `Must be ${label} characters`,
    required_select: `Please select ${label}`,
    email: `Please enter valid email address`,
    number: `Enter a valid ${label}`,
    userName: `Enter a valid ${label}`,
    alreadyInUse: `${label} already in use`,
    url: `Enter a valid url`,
    password: `Enter ${label} of at least 6 characters with at least 1 uppercase, 1 lowercase, 1 number and 1 special character`,
    alphanumeric: `Enter a valid ${label}`,
    alphabetic: `Enter a valid ${label}`,
    confirm_password_match: `Password and confirm password should be same`,
    new_old_password_match: "Old and new password should not be same",
    otp: "Enter the 4 digit code",
    phone: "Enter a valid mobile number",
    emailMobile: "Enter a valid email address or mobile number",
    character: `Must have 1 ${label} character`,
    confirm_password: "Passwords must match",
  };

  return `${validation[_type]}`;
};

const displayMsg = (label, type) => {
  const _type = type ?? ValidationType.required;
  return strings(_type, label);
};

export const Validation = {
  required: (
    title,
    isAlphanumeric = false,
    type = ValidationType.required,
    valueType = "string"
  ) => {
    if (valueType === "object") {
      return yup[valueType]().nullable(true).required(displayMsg(title, type));
    } else if (valueType === "array") {
      return yup.array().min(1, displayMsg(title, type));
    }
    if (isAlphanumeric == "null") {
      return yup[valueType]()
        .nullable(true)
        .trim?.()
        .required(displayMsg(title, type));
    }

    if (isAlphanumeric) {
      return yup[valueType]()
        .nullable(true)
        .trim?.()
        .required(displayMsg(title, type))
        .matches(
          Regex.alphaNumericAndSpecialCharacter,
          displayMsg(title, ValidationType.language)
        );
    }
    return yup[valueType]()
      .nullable(true)
      .trim?.()
      .required(displayMsg(title, type))
      .matches(Regex.alphabets, displayMsg(title, ValidationType.language));
  },

  requiredWithoutTrim: (
    title,
    type = ValidationType.required,
    valueType = "string"
  ) => {
    if (valueType === "object") {
      return yup[valueType]().nullable(true).required(displayMsg(title, type));
    } else if (valueType === "array") {
      return yup.array().min(1, displayMsg(title, type));
    }

    return (
      yup[valueType]()
        .nullable(true)
        // .trim?.()
        .required(displayMsg(title, type))
    );
  },

  notRequired: () => yup.string().notRequired(),

  email: (title) =>
    yup
      .string()
      .required(displayMsg(title))
      .email(displayMsg(title, ValidationType.email)),

  alphanumeric: (title) =>
    yup
      .string()
      .required(displayMsg(title))
      .trim()
      .matches(
        Regex.alphanumeric,
        displayMsg("Fullname", ValidationType.alphanumeric)
      ),

  phone: (title) =>
    yup
      .string()
      .required(displayMsg(title))
      .matches(
        Regex.phoneRegExp,
        displayMsg("lowerCase", ValidationType.phone)
      ),

  cnic: (title) =>
    yup
      .string()
      .required(displayMsg(title))

      .matches(Regex.cnic, displayMsg(title, ValidationType.cnic)),

  // password should not be same as old password
  notSamePassword: (title, password) =>
    yup
      .string()
      .required(displayMsg(title))
      .notOneOf([password], displayMsg(title, ValidationType.confirmPassword)),

  password: (title) =>
    yup
      .string()
      .required(displayMsg(`${title}`, ValidationType.password))
      .matches(/^(?=.{6,})/, displayMsg(`${title}`, ValidationType.password))
      .matches(Regex.lowerCase, displayMsg(`${title}`, ValidationType.password))
      .matches(Regex.upperCase, displayMsg(`${title}`, ValidationType.password))
      .matches(Regex.numeric, displayMsg(`${title}`, ValidationType.password))
      .matches(Regex.special, displayMsg(`${title}`, ValidationType.password)),

  loginPassword: (title) =>
    yup
      .string()
      .required(displayMsg(title))
      .matches(/^(?=.{6,})/, displayMsg("password"))
      .matches(Regex.lowerCase, displayMsg("password"))
      .matches(Regex.upperCase, displayMsg("password"))
      .matches(Regex.numeric, displayMsg("password"))
      .matches(Regex.special, displayMsg("password")),

  passwordMatch: (matchFieldName, label) =>
    yup
      .string()
      .required(displayMsg(label))
      .test(
        "match",
        displayMsg("", ValidationType.confirmPassword),
        function (val) {
          return val === this.parent?.[matchFieldName] ?? "";
        }
      ),
  checkFieldEmpty: (checkFieldName, label) =>
    yup
      .string()
      .nullable()
      .test("checkField", displayMsg(label), function (val) {
        const checkFieldValue = this.parent?.[checkFieldName] ?? "";
        console.log("condition", checkFieldValue !== "" || val !== "");
        //return true;
        return checkFieldValue !== "" || val !== "";
      }),

  length: (title, _length) =>
    yup
      .string()
      .required(displayMsg(title))
      .test("len", displayMsg(_length, ValidationType.equalLength), (val) => {
        const valueLength = val?.length ?? 0;
        return valueLength === _length;
      }),

  webUrl: (title, req) =>
    yup
      .string()
      .required(displayMsg(title))
      .matches(Regex.url, displayMsg(title, ValidationType.url)),

  optionalwebUrl: (title, req) =>
    yup
      .string()
      .nullable()
      .notRequired()
      .when("website_url", {
        is: (website_url) => website_url !== "",
        then: Validation.webUrl("Website Url"),
      }),
};

export const useHookField = (formObj, name) => {
  const { control, formState } = formObj;
  const { errors } = formState;
  const inputRef = useRef(null);

  const error = errors?.[name]?.message ?? undefined;

  return {
    forwardRef: inputRef,
    control,
    name,
    error,
  };
};

// hook for form
export const useHookForm = (
  inputs,
  defaultValues = {},
  resolver = undefined
) => {
  const formObj = useForm({
    resolver: yupResolver(resolver),
    defaultValues: defaultValues,
  });
  const hookInputs = [formObj];
  for (let i = 0; i < inputs.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    hookInputs.push(useHookField(formObj, inputs[i]));
  }
  return hookInputs;
};

/*********************************************************
 *
 *  Validation schema with respect to app
 *
 ********************************************************/
export const ValidationSchema = {
  signUp: yup.object().shape({
    UserName: Validation.alphanumeric("Full Name").max(30),
    Email: Validation.email("Email").max(30),
    PhoneNumber: Validation.phone("Number").max(15),
    DOB: Validation.required("Date of birth", "null"),
    Password: Validation.password("Password"),
    ConfirmPassword: Validation.passwordMatch("Password", "Confirm Password"),
  }),
  logIn: yup.object().shape({
    email: Validation.email("Email"),
    password: Validation.loginPassword("Password"),
  }),
  forgotPass: yup.object().shape({
    phoneNumber: Validation.phone("Number").max(15),
  }),
  resetPass: yup.object().shape({
    password: Validation.password("Password"),
    conPass: Validation.passwordMatch("password", "Confirm Password"),
  }),
  editProfile: yup.object().shape({
    name: Validation.alphanumeric("Full Name").max(30),
    email: Validation.email("Email").max(30),
    mobile_number: Validation.phone("Number").max(15),
    dob: Validation.required("Date of birth", "null"),
  }),
  changePassword: yup.object().shape({
    current_password: Validation.password("current password"),
    new_password: Validation.password("new password"),
    confirm_password: Validation.passwordMatch(
      "new_password",
      "confirm password"
    ),
  }),
  comment: yup.object().shape({
    comment: Validation.required("Comment", "null"),
  }),
  chatInput: yup.object().shape({
    chat: Validation.notRequired(),
  }),
};

export default { ValidationSchema, useHookField, useHookForm };
