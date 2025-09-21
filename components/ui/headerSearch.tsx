const HeaderSearchInput = () => {
  return (
    <div className="bg-[#F7F7F7] py-[.64rem] px-[.782rem] border-1 border-[#CDD6E9] rounded-[10px]  flex items-center w-[12.3rem]  ">
      <img src="/search-normal.svg" alt="search icon" />
      <span className="ml-[11px] border-[#BBBBBB] border-r-1 pr-1 leading-[100%] ">
        M91
      </span>
      <input type="text" className="w-full outline-0 px-1 " />
      <img
        src="/close-circle.svg"
        alt="close circle"
        className=" cursor-pointer "
      />
    </div>
  );
};

export default HeaderSearchInput;
