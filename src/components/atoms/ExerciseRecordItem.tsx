type Props = {
  text: string;
  calorie: number;
  time: number;
};

export const ExerciseRecordItem = (props: Props) => {
  const { text, calorie, time } = props;

  return (
    <div className="w-[416px] h-10 flex justify-between border-b-2 border-b-gray">
      {/* 左側 */}
      <div className="flex leading-4">
        <p className="text-light">・</p>
        <div>
          <p className="text-light">{text}</p>
          <p className="text-primary-300">{`${calorie}kcal`}</p>
        </div>
      </div>

      {/* 右側 */}
      <p className="text-primary-300 text-lg">{`${time}min`}</p>
    </div>
  );
};
