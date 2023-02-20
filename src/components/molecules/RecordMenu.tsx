import { TransparentPhoto } from 'src/components/atoms';
import { imgPath } from 'src/constants';

export const RecordMenu = () => {
  return (
    <div className="flex gap-12">
      <TransparentPhoto
        img={imgPath.photos.myRecommend1}
        title="BODY RECORD"
        text="自分のカラダの記録"
      />
      <TransparentPhoto
        img={imgPath.photos.myRecommend2}
        title="MY EXERCISE"
        text="自分の運動の記録"
      />
      <TransparentPhoto img={imgPath.photos.myRecommend3} title="MY DIARY" text="自分の日記" />
    </div>
  );
};
