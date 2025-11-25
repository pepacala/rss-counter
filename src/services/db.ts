import Dexie, { type EntityTable } from "dexie";
import { ResourceFormData } from "../config/config";
import data from "../data/data.json";

export interface DBdata {
  id: number;
  time: number; // timeStamp
  formData: ResourceFormData;
  note: string;
}

const db = new Dexie("ResourceDB") as Dexie & {
  data: EntityTable<DBdata, "id">;
};

// Schema declaration:
db.version(1).stores({
  data: "++id, time, data, note",
});

export async function addRecord(formData: ResourceFormData, note: string) {
  return db.data.add({
    time: Date.now(),
    formData,
    note,
  });
}

export async function deleteRecord(id: number) {
  return db.data.where("id").equals(id).delete();
}

export async function editRecord(
  formData: ResourceFormData,
  note: string,
  id: number
) {
  return db.data.where("id").equals(id).modify({ formData, note });
}

export async function getRecord(id: number) {
  return db.data.get(id);
}

export async function getAllRecords() {
  return db.data.orderBy("id").toArray();
}

export async function populateDB() {
  await db.data.clear();
  return db.data.bulkAdd(data);
}
