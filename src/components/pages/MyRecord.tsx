import { useEffect, useState } from 'react';
import { getBodyRecords, getExerciseRecords } from 'src/api';
import { RecordCaption } from 'src/components/atoms';
import { BodyChart, MyExercise, RecordMenu, SpanBtns } from 'src/components/molecules';
import type { BodyRecord, ExerciseRecord } from 'src/types';

export const MyRecord = () => {
  const [bodyRecords, setBodyRecords] = useState<BodyRecord[]>();
  const [exerciseRecords, setExerciseRecords] = useState<ExerciseRecord[]>();
  const [selectedSpan, setSelectedSpan] = useState<'日' | '週' | '月' | '年'>('年');

  useEffect(() => {
    setBodyRecords(getBodyRecords());
    setExerciseRecords(getExerciseRecords());
  }, []);

  return (
    <div className="w-[960px] mx-auto">
      {/* 各記録画面に遷移メニュー */}
      <div className="my-14">
        <RecordMenu />
      </div>

      {/* 体重・体脂肪率グラフ */}
      <div className="bg-dark-600 w-full mb-14">
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

      {/* 運動記録 */}
      <div className="mb-14">
        <MyExercise exerciseRecords={exerciseRecords} />
      </div>
    </div>
  );
};
