import { useEffect, useState } from 'react';
import { getBodyRecords, getDiaries, getExerciseRecords } from 'src/api';
import { PrimaryBtn, ScrollTopIcon } from 'src/components/atoms';
import { BodyChartWithBtn, MyDiary, MyExercise, RecordMenu } from 'src/components/molecules';
import { Footer, Header } from 'src/components/organisms';
import type { BodyRecord, Diary, ExerciseRecord, SelectedSpan } from 'src/types';

export const MyRecord = () => {
  const [bodyRecords, setBodyRecords] = useState<BodyRecord[]>();
  const [exerciseRecords, setExerciseRecords] = useState<ExerciseRecord[]>();
  const [diaries, setDiaries] = useState<Diary[]>();
  const [selectedSpan, setSelectedSpan] = useState<SelectedSpan>('年');

  useEffect(() => {
    setBodyRecords(getBodyRecords());
    setExerciseRecords(getExerciseRecords());
    setDiaries(getDiaries());
  }, []);

  return (
    <>
      <Header />

      <div className="w-[960px] mx-auto">
        {/* 各記録画面に遷移メニュー */}
        <div className="my-14">
          <RecordMenu />
        </div>

        {/* 体重・体脂肪率グラフ */}
        <div className="mb-14">
          <BodyChartWithBtn bodyRecords={bodyRecords} selectedSpan={selectedSpan} />
        </div>

        {/* 運動記録 */}
        <div className="mb-14">
          <MyExercise exerciseRecords={exerciseRecords} />
        </div>

        {/* 日記 */}
        <div className="mb-[30px]">
          <MyDiary diaries={diaries} />
        </div>

        {/* ボタン */}
        <div className="w-[296px] h-16 mx-auto  mb-16">
          <PrimaryBtn text="自分の日記をもっと見る" />
        </div>
      </div>

      <ScrollTopIcon />

      <Footer />
    </>
  );
};
