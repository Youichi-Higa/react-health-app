type Props = {
  text: string;
};

export const ColumnHeadline = (props: Props) => {
  const { text } = props;

  const translateEnglish = (text: string) => {
    if (text === 'オススメ') return 'COLUMN';
    if (text === 'ダイエット') return 'DIET';
    if (text === '美容') return 'BEAUTY';
    if (text === '健康') return 'HEALTH';
  };

  return (
    <div className="bg-dark-600 w-[216px] h-36 flex flex-col justify-center items-center">
      <p className="text-primary-300 text-2xl">RECOMMENDED</p>
      <p className="text-primary-300 text-2xl">{translateEnglish(text)}</p>
      <hr className="w-14 my-2 border-light border-1" />
      <p className="text-light text-lg">{text}</p>
    </div>
  );
};
