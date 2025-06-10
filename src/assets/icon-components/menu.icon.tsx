import React, { type SVGProps } from "react";

/**
 * @param props props
 * @param props.className classname
 * @param props.size size
 * @returns component
 */
const MenuIcon = ({
  className,
  size = 24,
  color = "#e3e3e3",
  ...props
}: SVGProps<SVGSVGElement> & {
  className?: string;
  size?: number;
  color: string;
}): React.JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill={color}
    className={className}
    height={size}
    width={size}
    {...props}
  >
    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
  </svg>
);

export default MenuIcon;
