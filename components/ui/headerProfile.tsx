const HeaderProfile = () => {
  return (
    <div className="flex gap-[8px] ">
      <img
        src="/notification-bell.svg"
        alt="notification icon"
        className="bg-[#F7F7F7] rounded-full p-2.5 aspect-square "
      />
      <div className="bg-[#F7F7F7] p-[4px] rounded-[50px] flex items-center pr-2 gap-2 ">
        <img
          src={"/paul-image.png"}
          alt="paul image"
          className="aspect-square h-full "
        />
        <span>Hi Paul</span>
        <img src="/arrow-down_1.svg" alt="arrow down icon" className="ml-2" />
      </div>
    </div>
  );
};

export default HeaderProfile;
