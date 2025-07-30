type TProps = {
  height?: string;
  width?: string;
  color?: string;
  viewBox?: string;
};

export const ArrowLeftGray: React.FC<TProps> = ({
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
        xmlns="http://www.w3.org/2000/svg"
        d="M1.58386 1.04178L4.70886 4.16678L1.58386 7.29178"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};
