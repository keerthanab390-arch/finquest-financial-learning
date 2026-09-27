import React from 'react';

/**
 * Reusable Button component with standardized styles and focus accessibility.
 */
export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'accent' | 'outline-green' | 'ghost' | 'danger-outline'
  size = 'md', // 'sm' | 'md' | 'lg'
  block = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const classes = [
    'btn',
    `btn-${variant}`,
    size !== 'md' ? `btn-${size}` : '',
    block ? 'btn-block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </button>
  );
};

export default Button;
