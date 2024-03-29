import { setFormError } from "./utils/set-form-error.js";
import { validateData } from "./utils/validate-data.js";
import { API } from "./services/api.js";

const formElement = document.querySelector("form");
formElement.addEventListener("submit", async e => {
  formSubmitButton.innerText = "Carregando...";
  formSubmitButton.disabled = true;

  setFormError("");

  await handleFormSubmit(e);

  formSubmitButton.innerText = initialFormSubmitButtonText;
  formSubmitButton.disabled = false;
});

const formSubmitButton = document.querySelector("button");
const initialFormSubmitButtonText = formSubmitButton.innerText;

async function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    age: formData.get("age"),
    cell: formData.get("cell"),
    gender: formData.get("gender"),
  };

  const isDataValid = validateData(data);

  if (!isDataValid) return setFormError("Dados inválidos");

  const authType = data.gender ? "sign" : "login";

  authType == "login" ? await API.login(formData) : await API.sign(formData);
}
