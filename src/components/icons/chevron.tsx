export const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  height = 24,
  width = 24,
  ...props
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      height={height}
      width={width}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon points="16,22 6,12 7.4,10.6 16,19.2 24.6,10.6 26,12" />
      <rect
        width={width}
        height={height}
        fill="none"
      />
    </svg>
  );
};
