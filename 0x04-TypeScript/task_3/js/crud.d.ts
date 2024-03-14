import { RowID, RowElement } from './interface'

interface insertRow {
  insertRow: () => number;
}

interface deleteRow {
  deleteRow: () => void;
}

interface updateRow {
  updateRow: () => number;
}
