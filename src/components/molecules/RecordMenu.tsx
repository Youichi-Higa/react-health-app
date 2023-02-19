import { TransparentPhoto } from 'src/components/atoms';
import { img } from 'src/constants/imgPaths';

export const RecordMenu = () => {
  return (
    <div className='flex gap-12'>
      <TransparentPhoto
        img={img.photos.myRecommend1}
        title="BODY RECORD"
        text="自分のカラダの記録"
      />
      <TransparentPhoto
        img={img.photos.myRecommend2}
        title="MY EXERCISE"
        text="自分の運動の記録"
      />
      <TransparentPhoto
        img={img.photos.myRecommend3}
        title="MY DIARY"
        text="自分の日記"
      />
    </div>
  );
};
