import { DiaryItem } from 'src/components/atoms';
import type { Diary } from 'src/types';

type Props = {
  diaries?: Diary[];
};

export const MyDiary = (props: Props) => {
  const { diaries } = props;

  return (
    <div className="w-full ">
      <p className="text-xl">MY DIARY</p>
      <div className="flex flex-wrap gap-3">
        {diaries?.map((dairy) => {
          return <DiaryItem key={dairy.id} text={dairy.text} createdAt={dairy.createdAt} />;
        })}
      </div>
    </div>
  );
};
