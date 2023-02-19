import { useEffect, useState } from 'react';
import { getRecordPhotos } from 'src/api';
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
        <InputMenu />
        {recordPhotos ? (
          <div className="grid grid-cols-4 gap-1">
            {recordPhotos?.map((photo) => {
              return <RecordPhoto key={photo.id} text={photo.caption} img={photo.img} />;
            })}
          </div>
        ) : (
          <div className='py-40'>
            <p className="text-center text-2xl">登録データがありません</p>
          </div>
        )}
      </div>
    </>
  );
};
