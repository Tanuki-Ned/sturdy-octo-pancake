import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import "./FormField.scss";

//Define Formfield component that renders a form field with a label, input, and optional className
const FormField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  className,
  id,
}) => (
  <div className="form-field">
    <Label htmlFor={id} className="form-label">
      {label}
    </Label>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      id={id}
    />
  </div>
);

export default FormField;
