export function getMessageAndInputIdFromError(error) {
  const errorMessage =
    error?.response?.data?.error ||
    (typeof error?.response?.data == "string" ? error.response.data : "Erro desconhecido");
  const idOfElementToShowErrorMessage = error?.response?.data?.input || undefined;

  return {
    errorMessage,
    idOfElementToShowErrorMessage,
  };
}
