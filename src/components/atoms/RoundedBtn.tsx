type Props = {
  text: string;
  selectedSpan: string;
};

export const RoundedBtn = (props: Props) => {
  const { text, selectedSpan } = props;
  const selected = text === selectedSpan;

  return (
    <>
      {selected ? (
        <button className="w-14 h-6 rounded-xl bg-primary-300 text-light">{text}</button>
      ) : (
        <button className="w-14 h-6 rounded-xl bg-light text-primary-300">{text}</button>
      )}
    </>
  );
};
