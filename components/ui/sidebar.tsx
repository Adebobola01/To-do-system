import MenuItem from "./menu-item";
// import { Switch } from "@chakra-ui/react";
// import { Provider } from "@/components/ui/provider";
import flag from "../../public/england-icon.svg";
import SwitchComponent from "./switch";

export default function Sidebar() {
  return (
    <div className="w-[14rem] h-full bg-[#fff] row-start-1 row-end-3 col-start-1 col-end-2  flex flex-col px-[30px] pb-[30px] pt-[12px] border-1 border-[#CDD6E9] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]  ">
      <div className="flex items-center justify-between mb-15 ">
        <img src={"/logo.svg"} alt="logo" />
        <img
          src={"/arrow.svg"}
          alt="arrow icon"
          className="bg-[#F7F7F7] w-[30px] h-[30px] rounded-[6px] p-[7.5px] cursor-pointer  "
        />
      </div>
      <div className="flex flex-col gap-[30px] ">
        <MenuItem image="/category.svg" text="Home" />
        <MenuItem image="/stickynote.svg" text="MKVanBinnen" />
        <MenuItem image="/folder.svg" text="Document Management" />
        <MenuItem image="/people.svg" text="Patient Information" />
        <MenuItem image="/note.svg" text="Agenda" />
        <MenuItem image="/newspaper.svg" text="My Department" />
        <MenuItem text="News" />
        <MenuItem text="Members" />
        <MenuItem text="To - Do" />
        <MenuItem text="Form Task" />
        <MenuItem text="Agenda " />
        <MenuItem text="Follow up system " />
        <MenuItem text="Group Settings " />
        <MenuItem image="/call.svg" text="Phone numbers" />
        <MenuItem image="/task-square.svg" text="My to do Protocols" />
        <MenuItem image="/notification.svg" text="My Notifications" />
        <MenuItem image="/menu-board.svg" text="Knowledge Base" />
        <MenuItem image="/message-edit.svg" text="Super Admin" />
        <MenuItem image="/edit.svg" text="Admin" />
        <MenuItem text="Agenda" />
        <MenuItem text="News" />
        <MenuItem text="Poll" />
        <MenuItem text="Department Rules" />
        <MenuItem text="Follow up system " />
      </div>
      <div className="bg-[#F7F7F7] border-1 border-[#CDD6E9] rounded-[10px] px-[14px] py-[10px] mt-[142px] ">
        <div className="#fff rounded-[6px] gap-[10px] flex px-[10px] py-[5px] bg-white ">
          <img src="/england-icon.svg" alt="england icon" />
          <span>English</span>
          <img
            src="/arrow-down.svg"
            alt="arrow down icon"
            className=" ml-auto "
          />
        </div>
        <div className="w-full">
          <SwitchComponent label="Dark mode" />
        </div>
      </div>
    </div>
  );
}
