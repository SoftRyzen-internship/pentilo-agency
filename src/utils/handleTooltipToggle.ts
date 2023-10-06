export const handleTooltipToggle = (
  index: number,
  activeTooltipIndex: number | null,
  setActiveTooltipIndex: React.Dispatch<React.SetStateAction<number | null>>,
) => {
  if (activeTooltipIndex === index) {
    setActiveTooltipIndex(null);
  } else {
    setActiveTooltipIndex(index);
  }
};
