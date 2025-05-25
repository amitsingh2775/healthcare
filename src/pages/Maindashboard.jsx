import Dashboard from "../components/dashboard"
import Dashboard2 from "../components/Dashboard2"

function Maindashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
  <div className="w-full md:w-1/2">
    <Dashboard />
  </div>
  <div className="w-full md:w-1/2 bg-slate-100">
    <Dashboard2 />
  </div>
</div>

   
  )
}

export default Maindashboard