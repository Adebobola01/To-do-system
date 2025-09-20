const HeaderTexts = () => {
  return (
    <div className="flex gap-[10px]">
      <div className="flex gap-[10px]  bg-[#F7F7F7] rounded-[10px] border-1 border-[#EEF1F9] p-[4px] ">
        <span className="px-[10px] py-[12px] bg-[#41245F] text-white font-bold flex items-center rounded-[10px] cursor-pointer ">
          Melding maken
        </span>
        <span className="px-[10px] py-[12px] bg-[#75C5C1] text-white font-bold flex items-center rounded-[10px] cursor-pointer ">
          VIM
        </span>
        <span className="px-[10px] py-[12px] bg-[#75C5C1] text-white font-bold flex items-center rounded-[10px] cursor-pointer ">
          LMS
        </span>
        <span className="px-[10px] py-[12px] bg-[#75C5C1] text-white font-bold flex items-center rounded-[10px] cursor-pointer ">
          BHV
        </span>
        <span className="px-[10px] py-[12px] bg-[#75C5C1] text-white font-bold flex items-center rounded-[10px] cursor-pointer ">
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
