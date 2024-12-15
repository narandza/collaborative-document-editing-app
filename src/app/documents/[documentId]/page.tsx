import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import { Toolbar } from "./toolbar";

const DocumentIdPage = () => {
  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfb] ">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocumentIdPage;
