import { Switch } from "@ark-ui/react/switch";

const SwitchComponent = ({ label }: { label: string }) => (
  <Switch.Root defaultChecked>
    <Switch.Label className="text-[#6C7278]">{label}</Switch.Label>
    <Switch.Control className="bg-[#BAC1CC] w-[30px] h-[18px] rounded-[9px] flex items-center ">
      <Switch.Thumb className="bg-[#fff] w-[14px] h-[14px] rounded-full  " />
    </Switch.Control>
    {/* <Switch.HiddenInput /> */}
  </Switch.Root>
);

export default SwitchComponent;
