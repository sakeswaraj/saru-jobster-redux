import { Route, Routes } from "react-router-dom";
import { Dashboard, Error, Landing, Register } from "./routes";
function App() {
  return (
    <div className="pt-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
