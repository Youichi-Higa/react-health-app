import { ColumnPhoto } from 'src/components/molecules';
import { imgPath } from 'src/constants';

type Props = {
  text: string;
  createdAt: string;
  img: string;
  tags: string[];
};

export const ColumnItem = (props: Props) => {
  const { text, createdAt, img, tags } = props;

  return (
    <>
      <div>
        <div className="cursor-pointer mb-2">
          <ColumnPhoto createdAt={createdAt} img={img} />
          <div className="w-[232px] h-12 mt-2">
            <p className=" line-clamp-2">{text}</p>
          </div>
        </div>

        <div className="flex gap-2 text-xs text-primary-400">
          <>
            {tags.map((tag) => {
              return <p className="cursor-pointer">{`#${tag}`}</p>;
            })}
          </>
        </div>
      </div>
    </>
  );
};
