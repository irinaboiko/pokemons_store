import { useCallback, useState } from "react";

export default (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      console.log(value);

      setFormValues({
        ...formValues,
        [name]: value,
      });
    },
    [formValues]
  );

  const handleReset = useCallback(() => {
    setFormValues(initialValues);
  }, []);

  return [formValues, handleChange, handleReset];
};
