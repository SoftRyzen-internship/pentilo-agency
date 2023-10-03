import data from '@/data/about.json';
export const highlightWords = (text: string) => {
  const wordsToHighlight = data.highlightWords;
  const tokens = text.split(' ');

  let highlightedNotYet = true;

  return (
    <>
      {tokens.map((token, index) => {
        const isHighlighted = wordsToHighlight.includes(token.trim());
        const space = index !== tokens.length - 1 ? ' ' : '';

        if (
          token.trim() === data.not &&
          highlightedNotYet &&
          tokens[index + 1] &&
          tokens[index + 1].trim() === data.reach
        ) {
          highlightedNotYet = false;
          return (
            <span className="font-bold" key={index}>
              {token}
              {space}
            </span>
          );
        }

        if (isHighlighted && token.trim() !== data.not) {
          return (
            <span className="font-bold" key={index}>
              {token}
              {space}
            </span>
          );
        }
        return token + space;
      })}
    </>
  );
};
