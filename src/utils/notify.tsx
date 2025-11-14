import { toast } from "react-toastify";

export default function notify(text: string, type?: "succes" | "error") {
  if (type === "succes" || !type) toast.success(text);
  if (type === "error") toast.error(text);
}
