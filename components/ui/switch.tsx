import { Switch } from "@ark-ui/react/switch";

const SwitchComponent = ({ label }: { label: string }) => (
  <Switch.Root defaultChecked>
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label className="text-[#6C7278]">{label}</Switch.Label>
    {/* <Switch.HiddenInput /> */}
  </Switch.Root>
);

export default SwitchComponent;
