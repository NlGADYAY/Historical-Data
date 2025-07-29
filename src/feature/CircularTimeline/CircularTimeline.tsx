type TCircularTimeline = {
  activeIndex: number;
  Component: React.ComponentType;
}

export const CircularTimeline: React.FC<TCircularTimeline> = ({ Component }) => {
  return (
    <div>
      <Component />
    </div>
  );
};
