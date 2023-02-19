import Circle from 'react-circle';

type Props = {
  date: string;
  achievementRate: number;
};

export const ProgressCircle = (props: Props) => {
  const { date, achievementRate } = props;
  
  return (
    <div className="relative">
      <Circle
        progress={achievementRate} //進捗率
        size="181px" //円グラフのサイズ
        lineWidth="6px" //円グラフの線幅
        progressColor="white" //進捗の色
        bgColor="transparent" //残部分の色
        textColor="transparent" //進捗文字の色
      />
      <div className="flex items-end absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-light text-lg mr-1">{date}</p>
        <p className="text-light text-2xl">{`${achievementRate}%`}</p>
      </div>
    </div>
  );
};
