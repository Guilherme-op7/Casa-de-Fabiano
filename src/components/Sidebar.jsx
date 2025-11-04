import { Home, Wallet, TrendingUp, Shuffle, BarChart2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 text-gray-100 flex flex-col justify-between">

      <div>

        <div className="flex items-center gap-2 mb-6 p-8">
          <img src="assets/cf.png" alt="" />
        </div>

        <nav className="flex flex-col gap-3">

          <Link to="/" className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242] ">
            <Home size={18} /> Home
          </Link>

          <Link to="/pacientes" className="flex items-center gap-3 w-full px-3 py-2 text-md border-l-2 bg-[#424242]">
            <Wallet size={18} /> Despesas
          </Link>

          <Link to="/pacientes" className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242]">
            <TrendingUp size={18} /> Receitas
          </Link>

          <Link to="/pacientes" className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242] ">
            <Shuffle size={18} /> Transferências
          </Link>

          <Link to="/pacientes" className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242]">
            <BarChart2 size={18} /> Relatórios
          </Link>

        </nav>

      </div>

      <button className="flex items-center gap-3 w-full px-3 mb-8 py-2 text-md hover:bg-gray-700">
        <LogOut size={18} /> Sair
      </button>
    </div>
  );
}
