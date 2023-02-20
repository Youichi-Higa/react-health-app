type Props = {
  img: string;
  title: string;
  text: string;
};

export const TransparentPhoto = (props: Props) => {
  const { img, title, text } = props;

  return (
    <div className="relative w-72 h-72 bg-dark-600 border-[#FFCC21] border-[24px] cursor-pointer">
      <img className="absolute h-[240px] opacity-20 object-cover" src={img} alt="" />
      <div className="w-60 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-primary-300 text-2xl pb-2">{title}</p>
        <p className="text-light text-sm bg-primary-400 w-36 h-5 mx-auto">{text}</p>
      </div>
    </div>
  );
};
