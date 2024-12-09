import { PaginationStatus } from "convex/react";
import { Doc } from "../../../convex/_generated/dataModel";

interface DocumentsTableProps {
  documents: Doc<"documents">[] | undefined;
  status: PaginationStatus;
  loadMore: (numItems: number) => void;
}

export const DocumentsTable = ({
  documents,
  status,
  loadMore,
}: DocumentsTableProps) => {
  return <div className="">doc table</div>;
};
