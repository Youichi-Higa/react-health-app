type Props = {
  text: string;
  createdAt: string;
};

export const DiaryItem = (props: Props) => {
  const { text, createdAt } = props;
  const [date, time] = createdAt.split(' ');

  return (
    <div className="text-dark-500 w-[231px] h-[231px] p-4 border-2 border-gray">
      <p className="text-lg leading-5 mb-2">
        {date} <br />
        {time}
      </p>
      <p className="text-sm line-clamp-7">{text}</p>
    </div>
  );
};
