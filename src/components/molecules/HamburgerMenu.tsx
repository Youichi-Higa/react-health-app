import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HamburgerMenuItem } from 'src/components/atoms';
import { imgPath, urlPath } from 'src/constants';

export const HamburgerMenu = () => {
  const navigate = useNavigate();

  const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false);
  const openHamburgerMenu = () => {
    setIsOpenHamburgerMenu(true);
  };
  const closeHamburgerMenu = () => {
    setIsOpenHamburgerMenu(false);
  };

  return (
    <div>
      {isOpenHamburgerMenu ? (
        <>
          <img
            className="m-4 cursor-pointer"
            src={imgPath.header.close}
            alt="閉じる"
            onClick={closeHamburgerMenu}
          />

          <div className="absolute right-40 z-10">
            <HamburgerMenuItem text="自分の記録" goToNextPage={() => navigate(urlPath.myRecord)} />
            <HamburgerMenuItem text="体重グラフ" />
            <HamburgerMenuItem text="目標" />
            <HamburgerMenuItem text="洗濯中のコース" />
            <HamburgerMenuItem text="コラム一覧" goToNextPage={() => navigate(urlPath.column)} />
            <HamburgerMenuItem text="設定" />
          </div>
        </>
      ) : (
        <img
          className="m-4 cursor-pointer"
          src={imgPath.header.hamburgerMenu}
          alt="ハンバーガーメニュー"
          onClick={openHamburgerMenu}
        />
      )}
    </div>
  );
};
