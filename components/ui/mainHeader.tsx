import SwitchComponent from "./switch";

const MainHeader = () => {
  return (
    <div className="p-4.5 pb-3.5 border-b-1 border-[#CDD6E9] flex justify-between items-center ">
      <div className=" flex gap-[1.65rem] items-center ">
        <img
          src="/arrow-left.svg"
          alt="left facing arrow"
          className="p-2 rounded-full border-1 border-[#CDD6E9] "
        />
        <h2 className="font-bold text-2xl">Afdeling Kwaliteit</h2>
      </div>
      <div className="flex gap-2.5 ">
        <div className="w-[2.8rem]  aspect-square py-[.9rem] px-2 bg-[#F7F7F7] hover:bg-[rgba(205,214,233,0.4)]  border-1 border-[rgba(205,214,233,0.2)] rounded-[8px] cursor-pointer hover:opacity-80 ">
          <SwitchComponent label="" />
        </div>
        <div className="w-[2.8rem]  aspect-square bg-[#F7F7F7] hover:bg-[rgba(205,214,233,0.4)]  border-1 border-[rgba(205,214,233,0.2)] rounded-[8px] px-1 py-2  flex justify-center items-center cursor-pointer hover:opacity-80 ">
          <img
            src="/sort.svg"
            alt="sort icon"
            className="h-full aspect-square"
          />
        </div>
        <div className="w-[2.8rem]  aspect-square bg-[#F7F7F7] hover:bg-[rgba(205,214,233,0.4)] border-1 border-[rgba(205,214,233,0.2)] rounded-[8px] px-1 py-2  flex justify-center items-center cursor-pointer hover:opacity-80 ">
          <img
            src="/calendar.svg"
            alt="sort icon"
            className="h-full aspect-square"
          />
        </div>
        <button className="flex items-center gap-2 bg-[#41245F] rounded-[8px] px-2.5 py-2.5 text-white w-auto text-nowrap cursor-pointer hover:opacity-80 ">
          <img
            src="/export.svg"
            alt="export icon"
            className=" w-[20px] aspect-square"
          />
          Export xlsx
        </button>
        <button className="flex items-center gap-2 bg-[#75C5C1] rounded-[8px] px-2.5 py-2.5 text-white w-auto text-nowrap cursor-pointer hover:opacity-80 ">
          <img
            src="/add-circle.svg"
            alt="export icon"
            className="aspect-square w-[20px]"
          />
          Add Task
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
