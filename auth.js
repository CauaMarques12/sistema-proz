import { StorageToken } from "./storage.js";

const formElement = document.querySelector("form");

formElement.addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
    gender: formData.get("gender"),
  };

  const isDataValid = validateData(data);

  if (!isDataValid) return;

  const authType = data.gender ? "sign" : "login";

  authType == "login" ? login(formData) : sign(data);
}

function validateData(data) {
  if (!data || !data.email || !data.password) return false;

  const isGenderOnData = data.gender;
  const isGenderValid = data.gender == "male" || data.gender == "female";

  if (isGenderOnData && !isGenderValid) return false;

  if (data.password.length < 8) return false;

  return true;
}

async function login(formData) {
  axios.defaults.baseURL = "http://localhost:3000";
  const { data: token } = await axios.post("login.php", formData);

  StorageToken.set(token);

  window.location.href = "index.html";
}

function sign({ gender, ...data }) {
  // api.post(data)

  login(data);
}
