import { createFileRoute, useNavigate } from "@tanstack/react-router";
import ResourceCounter from "../modules/rssCounter/components/ResourceCounter";
import { addRecord } from "../services/db";
import { ResourceFormData } from "../config/config";
import notify from "../utils/notify";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  console.log("Index");
  const navigate = useNavigate();

  async function handleSave(formData: ResourceFormData, note: string) {
    try {
      const id = await addRecord(formData, note);
      navigate({ to: "/records/$id", params: { id: String(id) } });
      notify("Added");
    } catch (e) {
      notify("Failed to add", "error");
      console.log(e);
    }
  }

  return (
    <div className="p-10">
      <ResourceCounter onSave={handleSave}></ResourceCounter>
    </div>
  );
}
