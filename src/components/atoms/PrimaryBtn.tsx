type Props = {
  text: string;
};

export const PrimaryBtn = (props: Props) => {
  const { text } = props;
  return (
    <button className="w-full h-full rounded-lg text-lg text-light bg-gradient-to-b from-primary-300 to-primary-400">
      {text}
    </button>
  );
};
