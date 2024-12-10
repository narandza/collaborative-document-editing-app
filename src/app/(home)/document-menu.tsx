import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon, MoreVerticalIcon } from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import { RemoveDialog } from "@/components/remove-dialog";

interface DocumentMenuProps {
  id: Id<"documents">;
  title: string;
  onNewTab: (id: Id<"documents">) => void;
}

export const DocumentMenu = ({ id, title, onNewTab }: DocumentMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <MoreVerticalIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <RemoveDialog></RemoveDialog>
        <DropdownMenuItem onClick={() => onNewTab(id)}>
          <ExternalLinkIcon className="size-4 mr-2" />
          Open in a new tab
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
