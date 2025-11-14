import { RefObject } from "react";

type Props = {
  noteRef: RefObject<HTMLTextAreaElement | null>;
  placeholder: string;
  handleSave: () => void;
};

export default function ControlPanel({
  noteRef,
  placeholder,
  handleSave,
}: Props) {
  console.log("---ControlPanel");
  return (
    <div className="flex mb-6 justify-center items-center gap-4">
      <div className="grow self-center text-right">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
      <div>
        <label htmlFor="note">Note:</label>
      </div>
      <div className="grow self-center ">
        <textarea
          className="border-2 border-blue-500 hover:border-blue-700 py-2 px-4 rounded w-9/12"
          ref={noteRef}
          defaultValue={placeholder}
          id="note"
        ></textarea>
      </div>
    </div>
  );
}
