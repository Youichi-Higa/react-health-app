import { imgPath } from 'src/constants';

export const getRecordPhotos = () => {
  const dummyData = [
    { id: 1, caption: '05.21.Morning', img: imgPath.photos.m01 },
    { id: 2, caption: '05.21.Lunch', img: imgPath.photos.l03 },
    { id: 3, caption: '05.21.Dinner', img: imgPath.photos.d01 },
    { id: 4, caption: '05.21.Snack', img: imgPath.photos.l01 },
    { id: 5, caption: '05.20.Morning', img: imgPath.photos.m01 },
    { id: 6, caption: '05.20.Lunch', img: imgPath.photos.m02 },
    { id: 7, caption: '05.20.Dinner', img: imgPath.photos.d02 },
    { id: 8, caption: '05.20.Snack', img: imgPath.photos.s01 },
  ];

  return dummyData;
};
