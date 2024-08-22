import classnames from 'classnames';
import './Button.scss';

//Define Button Component-allows for different button styles (primary, secondary, tertiary)
const Button = ({ variant = 'primary', children, ...props }) => (
  <button
    className={classnames('button', {
      [`button--${variant}`]: variant,
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;