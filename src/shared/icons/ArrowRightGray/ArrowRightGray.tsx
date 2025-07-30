type TProps = {
  height?: string;
  width?: string;
  color?: string;
  viewBox?: string;
};

export const ArrowRightGray: React.FC<TProps> = ({
  height = "8",
  width = "6",
  color = "#42567A",
  viewBox = "0 0 6 8",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <path
        d="M4.7489 1.04178L1.6239 4.16678L4.7489 7.29178"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};
