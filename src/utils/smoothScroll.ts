export const smoothScroll = (
  e: React.MouseEvent,
  href?: string | undefined,
) => {
  e.preventDefault();

  let elem: HTMLElement | null = null;

  if (href) {
    elem = document.getElementById(href.replace(/[/#]/g, ''));
  }
  window.scrollTo({
    top: href ? elem?.getBoundingClientRect().top : 0,
    behavior: 'smooth',
  });
};
