import { DisplayData } from "../../../config/config";

type Props = {
  data: DisplayData;
};

export default function Display({ data }: Props) {
  console.log("---Display");
  return (
    <div className="grid grid-flow-col gap-2 p-0.5 mb-6 border-2 border-b-blue-950 overflow-auto">
      {data.map(({ name, label, value, roundedFunction }) => (
        <div
          key={name}
          className="px-2 text-center border border-black text-nowrap"
        >
          <h3 className="text-lg font-bold">{label}</h3>
          <p className="text-">{value}</p>
          {roundedFunction && <p>{roundedFunction(value)}</p>}
        </div>
      ))}
    </div>
  );
}
