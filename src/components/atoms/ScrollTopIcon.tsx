import { useEffect, useState } from 'react';
import { imgPath } from 'src/constants';

const PAGE_Y_OFFSET = 250;

export const ScrollTopIcon = () => {
  const onScrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  const [isShow, setIsShow] = useState(false);
  const toggleShow = () => {
    window.pageYOffset > PAGE_Y_OFFSET ? setIsShow(true) : setIsShow(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleShow);
    return () => window.removeEventListener('scroll', toggleShow);
  }, []);

  return (
    <>
      {isShow && (
        <img
          className="fixed bottom-32 right-10 z-10 cursor-pointer"
          src={imgPath.scroll}
          alt="画面トップへ戻る"
          onClick={onScrollTop}
        />
      )}
    </>
  );
};
