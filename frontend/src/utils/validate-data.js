import { setFormError } from "./set-form-error.js";

export function validateData(data) {
  if (!data || !data.email || !data.password) {
    setFormError("Email ou senha não inseridos.", "email");
    setFormError("Email ou senha não inseridos.", "password");
    return false;
  }

  const isNameOnData = data.name;
  const isNameValid = isNameOnData ? data.name.length <= 50 : false;
  if (isNameOnData && !isNameValid) {
    setFormError("Nome deve conter somente 50 caracteres.", "name");
    return false;
  }

  const isGenderOnData = data.gender;
  const isGenderValid = data.gender == "M" || data.gender == "F";
  if (isGenderOnData && !isGenderValid) {
    setFormError("Gênero inválido.", "male");
    setFormError("Gênero inválido.", "female");
    return false;
  }

  const isAgeOnData = data.age;
  const isAgeValid = data.age > 0;
  if (isAgeOnData && !isAgeValid) {
    setFormError("Idade precisa ser maior que 0.", "age");
    return false;
  }

  const isCellOnData = data.cell;
  const isCellValid = isCellOnData ? data.cell.length == 11: false;
  if (isCellOnData && !isCellValid) {
    setFormError("Número de telefone precisa conter 11 caracteres.", "phone");
    return false;
  }

  if (data.password.length < 8 || data.password.length > 18) {
    setFormError("A senha deve conter entre 8 a 18 caracteres.", "password");
    return false;
  }

  return true;
}
