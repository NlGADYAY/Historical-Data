type TProps = {
  height?: string;
  width?: string;
  color?: string;
  viewBox?: string;
};

export const ArrowRightBlue: React.FC<TProps> = ({
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
      <path d="M1 1L6 6L1 11" stroke={color} stroke-width="2" />
    </svg>
  );
};
