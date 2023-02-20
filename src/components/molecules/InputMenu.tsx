import { imgPath } from 'src/constants';

export const InputMenu = () => {
  return (
    <div className="flex justify-center gap-16">
      <img className="cursor-pointer" src={imgPath.menu.morning} alt="朝食" />
      <img className="cursor-pointer" src={imgPath.menu.lunch} alt="昼食" />
      <img className="cursor-pointer" src={imgPath.menu.dinner} alt="夕飯" />
      <img className="cursor-pointer" src={imgPath.menu.snack} alt="間食" />
    </div>
  );
};
