import { useEffect, useState } from 'react';
import { getRecordPhotos } from 'src/api';
import { Button } from 'src/components/atoms';
import { InputMenu, RecordPhoto } from 'src/components/molecules';
import type { Photo } from 'src/types';

export const Top = () => {
  const [recordPhotos, setRecordPhotos] = useState<Photo[]>();

  useEffect(() => {
    const data = getRecordPhotos();
    setRecordPhotos(data);
  }, []);

  return (
    <>
      <div className="w-[960px] mx-auto">
        <div className="mb-6">
          <InputMenu />
        </div>
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
        <div className="w-[296px] h-16 mx-auto  mb-16">
          <Button text="記録をもっと見る" />
        </div>
      </div>
    </>
  );
};
