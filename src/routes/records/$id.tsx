import { createFileRoute, useRouter } from "@tanstack/react-router";
import ResourceCounter from "../../modules/rssCounter/components/ResourceCounter";
import { editRecord, getRecord } from "../../services/db";
import { ResourceFormData } from "../../config/config";
import Paginator from "../../components/Paginator";
import notify from "../../utils/notify";

export const Route = createFileRoute("/records/$id")({
  component: Record,
  loader: async ({ params: { id } }) => getRecord(parseInt(id)),
  //remountDeps: ({ params }) => params,
});

function Record() {
  const router = useRouter();
  const { id } = Route.useParams();
  const record = Route.useLoaderData();

  console.log(`Record ID ${id}`);

  async function handleSave(formData: ResourceFormData, note: string) {
    try {
      await editRecord(formData, note, +id);
      await router.invalidate({ sync: true });
      notify("Edited");
    } catch (e) {
      notify("Error - editing", "error");
      console.log(e);
    }
  }

  return (
    <div className="p-10">
      {record ? (
        <>
          <h2 className="text-right font-bold mb-4">
            Record ID {id} ({new Date(record.time).toLocaleString()})
          </h2>
          <Paginator id={id} />
          <ResourceCounter data={record} onSave={handleSave} key={id} />
        </>
      ) : (
        <p>This ID {id} does not exist in DB</p>
      )}
    </div>
  );
}
