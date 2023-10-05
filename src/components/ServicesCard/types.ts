export interface ServiceProps {
  title: string;
  src: string;
  alt: string;
  icon: string;
  list: Array<{
    text: string;
    toolTip?: string;
  }>;
}
