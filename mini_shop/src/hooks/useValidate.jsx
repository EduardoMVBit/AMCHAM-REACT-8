import { useState } from "react";

const useValidate = (mensaje) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showError, setShowError] = useState(false);
  const [condition, setCondition] = useState(() => false);
  if (!condition()) {
    setErrorMessage(mensaje);
    setShowError(!showError);
  }
  return { showError, errorMessage, setCondition };
};

export default useValidate;
