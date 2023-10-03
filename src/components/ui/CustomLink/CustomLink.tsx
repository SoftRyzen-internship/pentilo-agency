import { ILinkProps } from './types';

export const CustomLink: React.FC<ILinkProps> = ({
  className = '',
  href,
  text,
  onClick,
}) => {
  return (
    <a
      className={className}
      rel="noopener noreferrer nofollow"
      target="_blank"
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  );
};
