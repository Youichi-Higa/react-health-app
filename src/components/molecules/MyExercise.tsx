import { ExerciseRecordText, RecordCaption } from 'src/components/atoms';
import type { ExerciseRecord } from 'src/types';

type Props = {
  exerciseRecords?: ExerciseRecord[];
};

export const MyExercise = (props: Props) => {
  const { exerciseRecords } = props;

  return (
    <div className="bg-dark-600 w-full h-[264px] pr-6">
      <div className="ml-6 pt-4">
        <RecordCaption text="MY EXERCISE" date="2021.05.21" />
      </div>

      <div className="h-48 mt-5 ml-6 pb-1 overflow-y-auto flex flex-wrap gap-4">
        {exerciseRecords?.map((record) => {
          return (
            <ExerciseRecordText
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
