import { RoundedBtn } from 'src/components/atoms';

type Props = {
  selectedSpan: string;
};

export const SpanBtns = (props: Props) => {
  const { selectedSpan } = props;

  return (
    <div className="flex gap-4">
      <RoundedBtn text="日" selectedSpan={selectedSpan} />
      <RoundedBtn text="週" selectedSpan={selectedSpan} />
      <RoundedBtn text="月" selectedSpan={selectedSpan} />
      <RoundedBtn text="年" selectedSpan={selectedSpan} />
    </div>
  );
};
