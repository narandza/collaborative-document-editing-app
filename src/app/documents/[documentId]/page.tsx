import { Editor } from "./editor";
import { Navbar } from "./navbar";
import { Toolbar } from "./toolbar";

const DocumentIdPage = () => {
  return (
    <div className="min-h-screen bg-[#fafbfb] ">
      <Navbar />
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
