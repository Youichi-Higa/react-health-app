import { ProgressCircle } from 'src/components/atoms';
import { img } from 'src/constants/imgPaths';

type Props = {
  date: string;
  achievementRate: number;
};

export const TopPhoto = (props: Props) => {
  const { date, achievementRate } = props;

  return (
    <div className="relative min-w-[540px] h-[312px] ">
      <img className="w-[540px] h-[312px] object-cover" src={img.photos.d01} alt="日付・達成率" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ProgressCircle date={date} achievementRate={achievementRate} />
      </div>
    </div>
  );
};
