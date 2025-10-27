import Despesas from "./components/Despesas";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex bg-[#2B3031] h-full">
      <Sidebar />

      <div className="bg-white w-full h-230 rounded-tl-3xl my-4 rounded-b-2xl rounded-tr-2xl mr-4">
      <Despesas />
      </div>
    </div>
  );
}
