//Input Component- Accepts Five props whioch redners an input element-to be placed in a form component.

const Input = ({ type, value, onChange, placeholder, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
  />
);

export default Input;
