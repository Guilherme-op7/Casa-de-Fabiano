import { Home, Wallet, TrendingUp, Shuffle, BarChart2, LogOut } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 text-gray-100 flex flex-col justify-between">

      <div>

        <div className="flex items-center gap-2 mb-6 p-8">
          <img src="public/assets/cf.png" alt=""/>
        </div>

        <nav className="flex flex-col gap-3">

          <button className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242] ">
            <Home size={18}/> Home
          </button>

          <button className="flex items-center gap-3 w-full px-3 py-2 text-md border-l-2 bg-[#424242]">
            <Wallet size={18}/> Despesas
          </button>

          <button className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242]">
            <TrendingUp size={18}/> Receitas
          </button>

          <button className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242] ">
            <Shuffle size={18}/> Transferências
          </button>

          <button className="flex items-center gap-3 w-full px-3 py-2 text-md hover:bg-[#424242]">
            <BarChart2 size={18}/> Relatórios
          </button>
          
        </nav>
        
      </div>

      <button className="flex items-center gap-3 w-full px-3 mb-8 py-2 text-md hover:bg-gray-700">
        <LogOut size={18} /> Sair
      </button>
    </div>
  );
}
