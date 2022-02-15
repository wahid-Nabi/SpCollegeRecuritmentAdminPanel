import Joi from "joi-browser";
const joiValidate = (data, schema) => {
  const result = Joi.validate(data, schema, {
    abortEarly: false,
    allowUnknown: true,
  });
  if (!result.error) return {};

  const errors = {};
  for (let item of result.error.details) {
    if (!(item.path[0] in errors)) errors[item.path[0]] = item.message;
  }
  return errors;
};

const joiValidateField = ({ name, value }, schemaState) => {
  const schemaObj = { [name]: value };
  const schema = { [name]: schemaState[name] };
  const { error } = Joi.validate(schemaObj, schema);
  return error ? error.details[0].message : null;
};

export const validate = (e, data, schema, setErrors) => {
  e.preventDefault();
  const errors = joiValidate(data, schema);
  setErrors(errors);
  if (
    errors &&
    Object.keys(errors).length === 0 &&
    errors.constructor === Object
  )
    return true;
  return false;
};

export const validateField = (e, schema, errors) => {
  const errorMessage = joiValidateField(e.currentTarget, schema);
  if (errorMessage) errors[e.currentTarget.name] = errorMessage;
  else delete errors[e.currentTarget.name];
};
