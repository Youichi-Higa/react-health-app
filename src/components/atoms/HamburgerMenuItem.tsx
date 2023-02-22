type Props = {
  text: string;
  goToNextPage?: () => void;
};

export const HamburgerMenuItem = (props: Props) => {
  const { text, goToNextPage } = props;

  return (
    <div
      className="w-[280px] h-[72px] pl-8 bg-gray flex items-center cursor-pointer"
      onClick={goToNextPage}
    >
      <p className="text-light">{text}</p>
    </div>
  );
};
