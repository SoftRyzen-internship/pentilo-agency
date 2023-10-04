export interface TimelineListProps {
  timelines: {
    decorImage: string;
    number: string;
    title: string;
    text: string;
  }[];
  counter?: number;
  className?: string;
}
