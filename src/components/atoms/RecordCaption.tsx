type Props = {
  text: string;
  date: string;
};

export const RecordCaption = (props: Props) => {
  const { text, date } = props;
  const [firstLine, secondeLine] = text.split(' ');

  return (
    <div className=" text-light flex">
      <div className="w-24 h-4">
        <p>
          {firstLine}
          <br />
          {secondeLine}
        </p>
      </div>
      <p className="text-2xl">{date}</p>
    </div>
  );
};
