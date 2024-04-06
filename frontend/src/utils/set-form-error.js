export function setFormError(errorMessage, idOfElementToShowError) {
  const errorMessageElement = document.createElement("span");
  errorMessageElement.innerText = errorMessage;
  errorMessageElement.className = "error-message";

  if (idOfElementToShowError && typeof idOfElementToShowError == "string") {
    const elementToShowError = document.getElementById(idOfElementToShowError);
    const elementToShowErrorParent = elementToShowError.parentNode;

    const alreadyHasAnErrorMessage = elementToShowErrorParent.lastChild.localName == "span";

    if (alreadyHasAnErrorMessage) {
      elementToShowErrorParent.replaceChild(
        errorMessageElement,
        elementToShowErrorParent.lastChild
      );
    } else {
      elementToShowErrorParent.appendChild(errorMessageElement);
    }

    return;
  }

  const formElement = document.querySelector("form");

  formElement.childNodes.forEach(child => {
    const isChildADiv = child.localName == "div";

    if (!isChildADiv) return;

    const alreadyHasAnErrorMessage = child.lastChild.localName == "span";

    if (alreadyHasAnErrorMessage) {
      child.replaceChild(errorMessageElement, child.lastChild);
    } else {
      child.appendChild(errorMessageElement);
    }
  });
}
