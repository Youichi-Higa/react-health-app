import { RecordCaption } from 'src/components/atoms';
import { BodyChart, SpanBtns } from 'src/components/molecules';
import type { BodyRecord, SelectedSpan } from 'src/types';

type Props = {
  bodyRecords?: BodyRecord[];
  selectedSpan: SelectedSpan;
};

export const BodyChartWithBtn = (props: Props) => {
  const { bodyRecords, selectedSpan } = props;

  return (
    <div className="bg-dark-600 w-full">
      <div className="ml-6 pt-4">
        <RecordCaption text="BODY RECORD" date="2021.05.21" />
      </div>
      <div className="flex justify-center">
        <BodyChart bodyRecord={bodyRecords} />
      </div>
      <div className="ml-8 pb-4">
        <SpanBtns selectedSpan={selectedSpan} />
      </div>
    </div>
  );
};
