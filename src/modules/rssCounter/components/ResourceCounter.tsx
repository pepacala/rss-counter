import Display from "./Display";
import ResourceForm from "./ResourceForm";
import useFormCounter from "../hooks/useFormCounter";
import { DBdata } from "../../../services/db";
import { ResourceFormData } from "../../../config/config";
import ControlPanel from "./ControlPanel";

type Props = {
  data?: DBdata;
  onSave?: (formData: ResourceFormData, note: string) => Promise<void>;
};

export default function ResourceCounter({ data, onSave }: Props) {
  console.log("-ResourceCounter");

  const { formData, note, noteRef, displayData, handleFormChange } =
    useFormCounter(data);

  async function handleSave() {
    if (typeof onSave !== "undefined") {
      return onSave(formData, noteRef.current ? noteRef.current.value : "");
    }
  }

  return (
    <div>
      <Display data={displayData} />
      <ControlPanel
        noteRef={noteRef}
        placeholder={note}
        handleSave={handleSave}
      />
      <ResourceForm onChange={handleFormChange} formData={formData} />
    </div>
  );
}
