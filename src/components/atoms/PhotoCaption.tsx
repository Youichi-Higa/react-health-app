type Props = {
  text: string;
};

export const PhotoCaption = (props: Props) => {
  const { text } = props;

  return (
    <div className="w-full h-full pl-2 bg-primary-300 flex items-center">
      <p className="text-light">{text}</p>
    </div>
  );
};
