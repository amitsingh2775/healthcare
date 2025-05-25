import Maindashboard from "./pages/Maindashboard";
import Sidebarpages from "./pages/Sidebarpages";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col md:flex-row">
  <div className="bg-slate-100 w-full md:w-64">
    <Sidebarpages />
  </div>
  <div className="flex-1 bg-white">
    <Maindashboard />
  </div>
</div>

  );
}

export default App;
