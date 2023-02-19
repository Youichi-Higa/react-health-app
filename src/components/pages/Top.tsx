import { useEffect, useState } from 'react';
import { getRecordPhotos } from 'src/api';
import { Button } from 'src/components/atoms';
import { InputMenu, RecordPhoto, TopPhoto } from 'src/components/molecules';
import type { Photo } from 'src/types';

export const Top = () => {
  const [recordPhotos, setRecordPhotos] = useState<Photo[]>();

  useEffect(() => {
    const data = getRecordPhotos();
    setRecordPhotos(data);
  }, []);

  return (
    <>
      <TopPhoto date={'05/21'} achievementRate={75} />

      {/* メインエリア */}
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
          <Button text="記録をもっと見る" />
        </div>
      </div>
    </>
  );
};
