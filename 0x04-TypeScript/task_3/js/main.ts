/// <reference lib="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};
CRUD.insertRow(obj);

const newRowID: RowID = 78;

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
