import { img } from 'src/constants/imgPaths';

export const InputMenu = () => {
  return (
    <div className="flex justify-center gap-16">
      <img className="cursor-pointer" src={img.menu.morning} alt="朝食" />
      <img className="cursor-pointer" src={img.menu.lunch} alt="昼食" />
      <img className="cursor-pointer" src={img.menu.dinner} alt="夕飯" />
      <img className="cursor-pointer" src={img.menu.snack} alt="間食" />
    </div>
  );
};
