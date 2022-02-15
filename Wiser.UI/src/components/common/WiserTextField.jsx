import { TextField } from "@material-ui/core";
const WiserTextField = ({
  name,
  label,
  value,
  fullWidth,
  disabled,
  autoFocus,
  type,
  onChange,
  helperText,
  error,
}) => {
  return (
    <TextField
      margin="normal"
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      id={name}
      label={label}
      name={name}
      variant="outlined"
      autoFocus={autoFocus}
      disabled={disabled}
      size="small"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default WiserTextField;
