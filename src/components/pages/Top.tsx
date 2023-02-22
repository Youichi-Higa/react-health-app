import { useEffect, useState } from 'react';
import { getBodyRecords, getRecordPhotos } from 'src/api';
import { PrimaryBtn, ScrollTopIcon } from 'src/components/atoms';
import { BodyChart, InputMenu, RecordPhoto, TopPhoto } from 'src/components/molecules';
import { Footer, Header } from 'src/components/organisms';
import type { BodyRecord, Photo } from 'src/types';

export const Top = () => {
  const [bodyRecords, setExerciseRecords] = useState<BodyRecord[]>();
  const [recordPhotos, setRecordPhotos] = useState<Photo[]>();

  useEffect(() => {
    setExerciseRecords(getBodyRecords());
    setRecordPhotos(getRecordPhotos());
  }, []);

  return (
    <>
      <Header />

      {/* 達成率・折線グラフ */}
      <div className="flex mb-6">
        <TopPhoto date={'05/21'} achievementRate={75} />
        <div className="bg-dark-600 w-full flex justify-center">
          <BodyChart bodyRecord={bodyRecords} />
        </div>
      </div>

      <div className="w-[960px] mx-auto">
        {/* インプットメニュー */}
        <div className="mb-6">
          <InputMenu />
        </div>

        {/* 食事記録の写真 */}
        {recordPhotos ? (
          <div className="grid grid-cols-4 gap-1 mb-6">
            {recordPhotos?.map((photo) => {
              return <RecordPhoto key={photo.id} text={photo.caption} img={photo.img} />;
            })}
          </div>
        ) : (
          <div className="py-40">
            <p className="text-center text-2xl">登録データがありません</p>
          </div>
        )}

        {/* ボタン */}
        <div className="w-[296px] h-16 mx-auto  mb-16">
          <PrimaryBtn text="記録をもっと見る" />
        </div>
      </div>

      <ScrollTopIcon />

      <Footer />
    </>
  );
};
