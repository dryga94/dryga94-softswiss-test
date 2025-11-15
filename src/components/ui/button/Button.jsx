import "./Button.scss";

const Button = ({
  variant = "primary",
  size = "md",
  onClick,
  children,
  href,
  className = "",
}) => {
  const Component = href ? "a" : "button";
  const classes =
    `button button--${variant} button--${size} ${className}`.trim();

  const props = href ? { href } : { onClick };

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Button;
