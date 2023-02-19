import { img } from 'src/constants/imgPaths';

export const getRecordPhotos = () => {
  const dummyData = [
    { id: 1, caption: '05.21.Morning', img: img.photos.m01 },
    { id: 2, caption: '05.21.Lunch', img: img.photos.l03 },
    { id: 3, caption: '05.21.Dinner', img: img.photos.d01 },
    { id: 4, caption: '05.21.Snack', img: img.photos.l01 },
    { id: 5, caption: '05.20.Morning', img: img.photos.m01 },
    { id: 6, caption: '05.20.Lunch', img: img.photos.m02 },
    { id: 7, caption: '05.20.Dinner', img: img.photos.d02 },
    { id: 8, caption: '05.20.Snack', img: img.photos.s01 },
  ];

  return dummyData;
};
