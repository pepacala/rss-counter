import { useState, useRef, useCallback } from "react";
import { config, ResourceFormData } from "../../../config/config";
import { dbData } from "../../../services/db";
import { getDisplayData } from "../utils/utils";

const initialFormData: ResourceFormData = config.form.map((form) => ({
  name: form.name,
  blocks: form.blocks.map((f) => ({ name: f, value: 0 })),
}));

export default function useFormCounter(data?: dbData) {
  console.log("useFormCounter hook");
  const [formData, setFormData] = useState(
    data ? data.formData : initialFormData
  );
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const displayData = getDisplayData(formData);
  const note = data ? data.note : "";

  const handleFormChange = useCallback(
    (value: number, name: string, blockName: string) => {
      setFormData((prev) => {
        return prev.map((p) =>
          p.name === blockName
            ? {
                ...p,
                blocks: p.blocks.map((fb) =>
                  fb.name === name ? { ...fb, value: value } : fb
                ),
              }
            : p
        );
      });
    },
    []
  );

  return {
    note,
    noteRef,
    formData,
    displayData,
    handleFormChange,
  };
}
