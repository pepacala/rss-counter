import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllRecords } from "../services/db";
import { useNavigate } from "@tanstack/react-router";

type Props = {
  id: string;
};

export default function Paginator({ id }: Props) {
  const [ids, SetIds] = useState<number[]>([]);
  const navigate = useNavigate();
  const count = ids.length;
  const page = ids.findIndex((elm) => elm == parseInt(id)) + 1;
  useEffect(() => {
    async function populateIDs() {
      try {
        const data = await getAllRecords();
        SetIds(data.map((d) => d.id));
      } catch (error) {
        console.log(`Failed - getAllRecords: ${error}`);
        console.log(error);
      }
    }
    populateIDs();
  }, []);

  function handlePageChange(_e: React.ChangeEvent<unknown>, page: number) {
    navigate({ to: "/records/$id", params: { id: String(ids[page - 1]) } });
  }

  if (ids.length == 0) return;

  return (
    <>
      <Stack alignItems="center" className="pb-6">
        <Pagination page={page} count={count} onChange={handlePageChange} />
      </Stack>
    </>
  );
}
