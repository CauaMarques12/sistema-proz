const phoneInputElement = document.getElementById("phone");

phoneInputElement.addEventListener("input", formatPhone);

function formatPhone() {
  const phoneValue = phoneInputElement.value.replace(/\D/g, "").substring(0, 11);
  const formattedPhone = phoneValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  phoneInputElement.value = formattedPhone;
}
