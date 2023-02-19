import { HeaderMenu } from 'src/components/molecules';
import { img } from 'src/constants/imgPaths';

export const Header = () => {
  return (
    <div className="h-16 px-40 bg-dark-500 flex justify-between items-center">
      <img className="cursor-pointer" src={img.logo} alt="logo" />
      <HeaderMenu />
    </div>
  );
};
