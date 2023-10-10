import { RowID, RowElement } from "./interface";

export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updaterow(rowId: RowID, row: RowElement): number;