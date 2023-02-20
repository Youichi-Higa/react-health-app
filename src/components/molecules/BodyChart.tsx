import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { BodyRecord } from 'src/types';

type Props = {
  bodyRecord?: BodyRecord[];
};

export const BodyChart = (props: Props) => {
  const { bodyRecord } = props;

  return (
    <LineChart
      width={800}
      height={312}
      data={bodyRecord}
      margin={{
        top: 16,
        right: 40,
        left: 40,
        bottom: 4,
      }}
    >
      <CartesianGrid horizontal={false} />
      <XAxis
        dataKey="month"
        tick={{
          fontSize: 12,
          fill: '#FFFFFF',
        }}
        axisLine={false}
        tickLine={false}
      />
      <YAxis hide tickCount={1} />
      <Tooltip />
      <Line
        dataKey="weight"
        stroke="#FFCC21"
        strokeWidth={3}
        dot={{ stroke: '#FFCC21', strokeWidth: 5 }}
        isAnimationActive={false}
      />
      <Line
        dataKey="fatPercentage"
        stroke="#8FE9D0"
        strokeWidth={3}
        dot={{ stroke: '#8FE9D0', strokeWidth: 5 }}
        isAnimationActive={false}
      />
    </LineChart>
  );
};
