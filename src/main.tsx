import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-red-500 text-white p-8">
      Tailwind CSS가 적용되었습니다!
    </div>
  </StrictMode>
);
