import { Dashboard, Error, Landing, Register } from "./routes";
function App() {
  return (
    <div className="pt-6">
      <Landing />
      <Register />
      <Error />
      <Dashboard />
    </div>
  );
}

export default App;
