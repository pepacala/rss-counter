import { PropsWithChildren } from "react";
import "../App.css";
import TopPanel from "./TopPanel";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <h1 className="p-4 text-3xl text-center font-bold text-gray-900">
        Resource counter
      </h1>
      <TopPanel />
      {children}
    </>
  );
}
