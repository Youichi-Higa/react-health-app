import { PhotoCaption } from 'src/components/atoms';
import { img } from 'src/constants/imgPaths';

type Props = {
  text: string;
  img: string;
};

export const RecordPhoto = (props: Props) => {
  const { text, img } = props;

  return (
    <div className="relative cursor-pointer">
      <img className="w-[234px] h-[234px] object-cover" src={img} alt="" />
      <div className="w-[120px] h-8 absolute bottom-0">
        <PhotoCaption text={text} />
      </div>
    </div>
  );
};
