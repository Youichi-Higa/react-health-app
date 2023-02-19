type Props = {
  imgPath: string;
  text: string;
};

export const HeaderItem = (props: Props) => {
  const { imgPath, text } = props;

  return (
    <div className="flex items-center gap-2 w-40 h-12 pl-2 cursor-pointer">
      <img src={imgPath} alt={text} className="w-8 h-8" />
      <p className="text-light cursor-pointer">{text}</p>
    </div>
  );
};
