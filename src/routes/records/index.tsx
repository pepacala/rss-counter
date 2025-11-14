import {
  createFileRoute,
  Link,
  useNavigate,
  useRouter,
} from "@tanstack/react-router";
import { deleteRecord, getAllRecords } from "../../services/db";
import Confirm from "../../components/Confirm";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import notify from "../../utils/notify";
import { getLabel } from "../../modules/rssCounter/utils/utils";
import { transformRecords } from "../../utils/utils";

const RSS_TO_SHOW = ["food", "lumber", "stone", "ore"];

export const Route = createFileRoute("/records/")({
  component: Records,
  loader: getAllRecords,
  pendingComponent: Pending,
});

function Records() {
  const records = Route.useLoaderData();
  const router = useRouter();
  const navigate = useNavigate();

  const recordsData = transformRecords(records, RSS_TO_SHOW);

  async function handleDelete(id: number) {
    try {
      await deleteRecord(id);
      await router.invalidate({ sync: true });
      notify("Deleted");
    } catch (e) {
      notify("Error - deleting", "error");
      console.log(e);
    }
  }

  function handleClick(id: number) {
    navigate({ to: "/records/$id", params: { id: String(id) } });
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4 text-center">Records</h2>

      {records.length > 0 ? (
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Date / time</TableCell>
                {RSS_TO_SHOW.map((rss) => (
                  <TableCell align="center" key={rss}>
                    {getLabel(rss)}
                  </TableCell>
                ))}
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recordsData.map((row) => (
                <TableRow
                  hover
                  key={row.id}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleClick(row.id)}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">
                    {new Date(row.time).toLocaleString()}
                  </TableCell>

                  {row.rss.map((rss) => (
                    <TableCell align="center" key={rss.name}>
                      {rss.value}
                    </TableCell>
                  ))}

                  <TableCell
                    align="right"
                    sx={{ cursor: "auto" }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Confirm
                      title={`Realy delete record ID ${row.id}`}
                      onConfirm={() => handleDelete(row.id)}
                    >
                      <DeleteForeverIcon sx={{ cursor: "pointer" }} />
                    </Confirm>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div className="mb-4">
          No record yet, go to{" "}
          <Link to="/" className="underline">
            index/homeapge
          </Link>{" "}
          and make first one, or populate DB with dummy data on{" "}
          <Link to="/about" className="underline">
            About
          </Link>
        </div>
      )}
    </div>
  );
}

function Pending() {
  console.log("Pending Records");
  return <h2 className="text-4xl p-10">Pending</h2>;
}
