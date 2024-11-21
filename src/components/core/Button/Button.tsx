import { ComponentProps } from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ComponentProps<"button"> & ButtonProps> = ({
  title,
  className,
  ...rest
}) => (
  <button
    {...rest}
    className={`px-4 transition  delay-100 ease-linear py-2 w-32 rounded border border-solid border-transparent ${className}`}
  >
    {title}
  </button>
);

export default Button;
