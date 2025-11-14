import { ResourceChange, ResourceFormData } from "../../../config/config";
import { getLabel } from "../utils/utils";
import ResourceInput from "./ResourceInput";

type Props = {
  formData: ResourceFormData;
  onChange: ResourceChange;
};

export default function ResourceForm({ formData, onChange }: Props) {
  console.log("---ResourceForm");

  return (
    <div className="flex flex-wrap justify-center gap-1">
      {formData.map((part) => (
        <div className="p-2 border border-black rounded-sm" key={part.name}>
          <h2 className="mb-1 text-center font-bold text-base">
            {getLabel(part.name)}
          </h2>
          {part.blocks.map((input) => (
            <ResourceInput
              blockName={part.name}
              key={input.name}
              id={part.name + input.name}
              name={input.name}
              value={input.value}
              onChange={onChange}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
