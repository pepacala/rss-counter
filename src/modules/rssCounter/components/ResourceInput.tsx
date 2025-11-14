import { FormEvent, memo } from "react";
import { ResourceChange } from "../../../config/config";

type Props = {
  blockName: string;
  name: string;
  id: string;
  value: number;
  onChange: ResourceChange;
};

const ResourceInput = memo(function ResourceInput({
  blockName,
  name,
  id,
  value,
  onChange,
}: Props) {
  //console.log("-----ResourceInput - " + id + " " + value);
  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    onChange(+(e.target as HTMLInputElement).value, name, blockName);
  };

  return (
    <div className="flex leading-tight mb-0.5">
      <label htmlFor={id} className="min-w-14 text-right pr-2">
        {name}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
        className="border px-1 w-[110px]"
      />
    </div>
  );
});

export default ResourceInput;
