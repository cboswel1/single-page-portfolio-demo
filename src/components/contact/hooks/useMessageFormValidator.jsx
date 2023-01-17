import { useState } from "react";

import {
  nameValidator,
  emailValidator,
  messageValidator,
} from "../validators/validators";

const touchErrors = errors => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    acc[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

export const useMessageFormValidator = form => {
  const [errors, setErrors] = useState({
    name: {
      dirty: false,
      error: false,
      message: "",
    },
    email: {
      dirty: false,
      error: false,
      message: "",
    },
    message: {
      dirty: false,
      error: false,
      message: "",
    },
  });

  const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
    let isValid = true;

    // Create a deep copy of the errors
    const nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { name, email, message } = form;

    if (nextErrors.name.dirty && (field ? field === "name" : true)) {
      const nameMessage = nameValidator(name, form);
      nextErrors.name.error = !!nameMessage;
      nextErrors.name.message = nameMessage;
      if (!!nameMessage) isValid = false;
    }


    if (nextErrors.email.dirty && (field ? field === "email" : true)) {
        const emailMessage = emailValidator(email, form);
        nextErrors.email.error = !!emailMessage;
        nextErrors.email.message = emailMessage;
        if (!!emailMessage) isValid = false;
      }

    if (
      nextErrors.message.dirty &&
      (field ? field === "confirmPassword" : true)
    ) {
      const confirmMessageMessage = confirmPasswordValidator(
        confirmMessage,
        form
      );
      nextErrors.confirmMessage.error = !!confirmMessageMessage;
      nextErrors.confirmMessage.message = confirmMessageMessage;
      if (!!confirmMessageMessage) isValid = false;
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = e => {
    const field = e.target.name;
    const fieldError = errors[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...errors[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};