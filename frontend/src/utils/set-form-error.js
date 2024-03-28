export function setFormError(errorMessage) {
  const formElement = document.querySelector("form");

  formElement.childNodes.forEach(child => {
    const isChildADiv = child.localName == "div";

    if (!isChildADiv) return;

    const errorMessageElement = document.createElement("span");
    errorMessageElement.innerText = errorMessage;
    errorMessageElement.className = "error-message";

    const alreadyHasAnErrorMessage = child.lastChild.localName == "span";

    if (alreadyHasAnErrorMessage) {
      child.replaceChild(errorMessageElement, child.lastChild);
    } else {
      child.appendChild(errorMessageElement);
    }
  });
}
