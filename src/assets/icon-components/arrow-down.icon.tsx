import React, { type SVGProps } from "react";

/**
 * @param props props
 * @param props.className classname
 * @param props.size size
 * @returns component
 */
const ArrowDownIcon = ({
  className,
  size = 36,
  ...props
}: SVGProps<SVGSVGElement> & {
  className?: string;
  size?: number;
}): React.JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    {...props}
    className={className}
    width={size}
    height={size}
    fill="#e3e3e3"
  >
    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
  </svg>
);

export default ArrowDownIcon;
