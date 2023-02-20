import { useNavigate } from 'react-router-dom';
import { HeaderMenu } from 'src/components/molecules';
import { imgPath, urlPath } from 'src/constants';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 px-40 bg-dark-500 flex justify-between items-center">
      <img
        className="cursor-pointer"
        src={imgPath.logo}
        alt="logo"
        onClick={() => navigate(urlPath.top)}
      />
      <HeaderMenu />
    </header>
  );
};
