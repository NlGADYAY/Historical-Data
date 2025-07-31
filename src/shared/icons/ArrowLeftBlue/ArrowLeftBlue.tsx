type TProps = {
  height?: string;
  width?: string;
  color?: string;
  viewBox?: string;
};

export const ArrowLeftBlue: React.FC<TProps> = ({
  height = "12",
  width = "8",
  color = "#3877EE",
  viewBox = "0 0 8 12",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <g transform="translate(8, 0) scale(-1, 1)">
        <path d="M1 1L6 6L1 11" stroke={color} strokeWidth="2" />
      </g>
    </svg>
  );
};
