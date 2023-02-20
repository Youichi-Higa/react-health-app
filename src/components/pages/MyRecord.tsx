import { useEffect, useState } from 'react';
import { getBodyRecords } from 'src/api';
import { RecordCaption, RoundedBtn } from 'src/components/atoms';
import { BodyChart, RecordMenu, SpanBtns } from 'src/components/molecules';
import type { ExerciseRecord } from 'src/types';

export const MyRecord = () => {
  const [exerciseRecords, setExerciseRecords] = useState<ExerciseRecord[]>();
  const [selectedSpan, setSelectedSpan] = useState<'日' | '週' | '月' | '年'>('年');

  useEffect(() => {
    setExerciseRecords(getBodyRecords());
  }, []);

  return (
    <div className="w-[960px] mx-auto">
      {/* 各記録画面に遷移メニュー */}
      <div className='my-14'>
        <RecordMenu />
      </div>

      {/* 体重・体脂肪率グラフ */}
      <div className="bg-dark-600 w-full">
        <div className="ml-6 pt-4">
          <RecordCaption text="BODY RECORD" date="2021.05.21" />
        </div>
        <div className="flex justify-center">
          <BodyChart exerciseRecord={exerciseRecords} />
        </div>
        <div className="ml-8 pb-4">
          <SpanBtns selectedSpan={selectedSpan} />
        </div>
      </div>
    </div>
  );
};
