import { MutableRefObject } from "react";
import { handleAlertMessage } from "./Auth";
import validator from "validator";

export const validationRegistrationInputs = (
  nameInput: MutableRefObject<HTMLInputElement>,
  emailInput: MutableRefObject<HTMLInputElement>,
  passwordInput: MutableRefObject<HTMLInputElement>,
  passworConfirmInput: MutableRefObject<HTMLInputElement>
) => {
  const nameInputValue = nameInput.current.value;
  const emailInputValue = emailInput.current.value;
  const passwordInputValue = passwordInput.current.value;
  const passwordConfirmInputValue = passworConfirmInput.current.value;

  const inputs = [
    nameInput.current,
    emailInput.current,
    passwordInput.current,
    passworConfirmInput.current
  ]

  const addDangerBorderByCondition = () => {
    inputs.forEach(input => input.value.length
      ? input.classList.remove('border-danger')
      : input.classList.add('border-danger'))
  }

  if (!nameInputValue || !emailInputValue || !passwordInputValue || !passwordConfirmInputValue) {
    handleAlertMessage({ alertText: 'Заполните все поля', alertStatus: 'warning' });
    addDangerBorderByCondition();
    return false
  }

  if (!validator.isEmail(emailInputValue)) {
    handleAlertMessage({ alertText: "Введите Email!", alertStatus: 'warning' });
    addDangerBorderByCondition();
    emailInput.current.classList.add('border-danger');
    return false
  }

  inputs.forEach(input => input.classList.remove('border-danger'));

  return true
}