//Label Component- To be used in input fields. This to be placed in FormField Component.

const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

export default Label;