import { Loader } from "lucide-react";

interface FullScreenLoaderProps {
  label?: string;
}

export const FullScreenLoader = ({ label }: FullScreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <Loader className="animate-spin text-muted-foreground size-6" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
