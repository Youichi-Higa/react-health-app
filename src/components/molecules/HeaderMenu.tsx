import { useNavigate } from 'react-router-dom';
import { HeaderItem } from 'src/components/atoms';
import { imgPath, urlPath } from 'src/constants';

export const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center">
      <HeaderItem
        imgPath={imgPath.header.memo}
        text="自分の記録"
        goToPage={() => navigate(urlPath.myRecord)}
      />
      <HeaderItem imgPath={imgPath.header.challenge} text="チャレンジ" />
      <HeaderItem imgPath={imgPath.header.info} text="お知らせ" />
      <img
        className="m-4 cursor-pointer"
        src={imgPath.header.hamburgerMenu}
        alt="ハンバーガーメニュー"
      />
    </div>
  );
};
