const HeaderProfile = () => {
  return (
    <div className="flex gap-[8px] ">
      <img
        src="/notification-1.svg"
        alt="notification icon"
        className="bg-[#F7F7F7] rounded-full p-[24px] "
      />
      <div className="bg-[#F7F7F7] p-[3px] rounded-[50px] flex items-center gap-[8px] pr-2 ">
        <img src={"/paul-image.png"} alt="paul image" />
        <span>Hi Paul</span>
        <img
          src="/arrow-down_1.svg"
          alt="arrow down icon"
          className="ml-[16px]"
        />
      </div>
    </div>
  );
};

export default HeaderProfile;
