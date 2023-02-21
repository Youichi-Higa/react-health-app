import { PhotoCaption } from 'src/components/atoms';

type Props = {
  createdAt: string;
  img: string;
};

export const ColumnPhoto = (props: Props) => {
  const { createdAt, img } = props;

  return (
    <div className="relative cursor-pointer">
      <img className="w-[234px] h-36 object-cover" src={img} alt={createdAt} />
      <div className="w-36 h-6 absolute bottom-0">
        <PhotoCaption text={createdAt} />
      </div>
    </div>
  );
};
