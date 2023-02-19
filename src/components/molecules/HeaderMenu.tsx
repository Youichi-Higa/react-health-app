import { HeaderItem } from 'src/components/atoms';
import { img } from 'src/constants/imgPaths';

export const HeaderMenu = () => {
  return (
    <div className='flex items-center'>
      <HeaderItem imgPath={img.header.memo} text="自分の記録" />
      <HeaderItem imgPath={img.header.challenge} text="チャレンジ" />
      <HeaderItem imgPath={img.header.info} text="お知らせ" />
      <img className="m-4 cursor-pointer" src={img.header.hamburgerMenu} alt="ハンバーガーメニュー" />
    </div>
  );
};
