import { ExerciseRecordItem, RecordCaption } from 'src/components/atoms';
import type { ExerciseRecord } from 'src/types';

type Props = {
  exerciseRecords?: ExerciseRecord[];
};

export const MyExercise = (props: Props) => {
  const { exerciseRecords } = props;

  return (
    <div className="bg-dark-600 w-full h-[264px] pr-6 py-4">
      <div className="ml-6">
        <RecordCaption text="MY EXERCISE" date="2021.05.21" />
      </div>

      <div className="h-48 ml-6 mt-2 flex flex-wrap gap-4 cursor-pointer overflow-y-auto scrollbar scrollbar-w-[6px] scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-primary-300 scrollbar-track-gray">
        {exerciseRecords?.map((record) => {
          return (
            <ExerciseRecordItem
              key={record.id}
              text={record.name}
              calorie={record.calorie}
              time={record.time}
            />
          );
        })}
      </div>
    </div>
  );
};
