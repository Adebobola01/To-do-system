type MenuItemProps = {
  image?: string;
  text: string;
};

const MenuItem = ({ image, text }: MenuItemProps) => {
  return (
    <div className="flex gap-[15px] cursor-pointer ">
      {image ? <img src={image} alt={`${text} image`} /> : null}

      <span
        className={`font-[Plus_Jakarta_Sans] font-semibold text-[#464B50] text-[14px] ${
          image ? null : "ml-[32px]"
        } `}
      >
        {text}
      </span>
    </div>
  );
};

export default MenuItem;
