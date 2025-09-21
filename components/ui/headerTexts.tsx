const HeaderTexts = () => {
  return (
    <div className="flex gap-2 ">
      <div className="flex justify-between bg-[#F7F7F7] rounded-[10px] border-1 border-[#EEF1F9] py-[3.45px] px-[4px] gap-2 ">
        <span className="px-[.53rem] py-[.65rem] bg-[#41245F] text-white text-[14px] font-bold flex items-center rounded-[8px] cursor-pointer ">
          Melding maken
        </span>
        <span className="px-[.53rem] py-[.65rem] bg-[#75C5C1] text-white text-[14px] font-bold flex items-center rounded-[8px] cursor-pointer ">
          VIM
        </span>
        <span className="px-[.53rem] py-[.65rem] bg-[#75C5C1] text-white text-[14px] font-bold flex items-center rounded-[8px] cursor-pointer ">
          LMS
        </span>
        <span className="px-[.53rem] py-[.65rem] bg-[#75C5C1] text-white text-[14px] font-bold flex items-center rounded-[8px] cursor-pointer ">
          BHV
        </span>
        <span className="px-[.53rem] py-[.65rem] bg-[#75C5C1] text-white text-[14px] font-bold flex items-center rounded-[8px] cursor-pointer ">
          DataLek
        </span>
      </div>
      <img
        src="/link.svg"
        alt="link icon"
        className="p-[10px] rounded-[10px] bg-[#F7F7F7] border-1 border-[#EEF1F9] cursor-pointer px-[8px] py-[11px]  "
      />
    </div>
  );
};

export default HeaderTexts;
