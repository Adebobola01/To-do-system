import { Switch } from "@ark-ui/react/switch";

const SwitchComponent = ({ label }: { label?: string }) => (
  <Switch.Root className="cursor-pointer">
    <Switch.Label className="text-[#6C7278]">{label}</Switch.Label>
    <Switch.Control className="bg-[#BAC1CC] w-full h-full rounded-[9px] p-[2px] flex items-center ">
      <Switch.Thumb className="bg-[#fff] w-[50%] h-full rounded-full  " />
    </Switch.Control>
    <Switch.HiddenInput />
  </Switch.Root>
);

export default SwitchComponent;
