import { ScrollToTopButton } from './ScrollToTopButton';

export const ToTopButtonWrapper = ({ children }) => {
  return (
    <div className="relative">
      <ScrollToTopButton />
      {children}
    </div>
  );
};
