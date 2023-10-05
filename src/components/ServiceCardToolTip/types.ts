export interface ServiceCardToolTipProps {
  toolTip: string;
  index: number;
  activeIndex: number | null;
  handleTooltipToggle: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}
