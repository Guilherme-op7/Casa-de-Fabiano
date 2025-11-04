import FormularioDespesas from "../components/FormularioDespesas";
import Header from "../components/Header";
import TabelaDespesas from "../components/TabelaDespesas";

export default function Despesas() {
    return (
        <div>
            <Header />

            <p className="text-gray-400 text-sm font-semibold px-3 py-3">
                Controle de Caixa &gt; Despesas
            </p>

            <div className="px-15 py-9 flex flex-col">
                <h2 className="text-2xl font-semibold mb-5 text-gray-500">Referência</h2>

                <div className="flex gap-14 justify-center items-center border bg-white border-gray-200 rounded-xl px-3 py-3 w-85">
                    <p className="text-gray-500 font-semibold">Mês/Ano</p>
                    <select className="text-gray-500 font-medium">
                        <option>Outubro/2025</option>
                    </select>
                </div>

                <h2 className="text-2xl text-gray-500 font-semibold mt-8 mb-5">
                    Controle de Despesas
                </h2>

                <FormularioDespesas />


                <h2 className="text-2xl text-gray-500 font-semibold mt-8">
                    Despesas de Outubro/2025
                </h2>

                <div className="mt-3 rounded-xl border border-gray-200 bg-white w-4xl">
                    <TabelaDespesas />
                </div>
            </div>
        </div>
    );
}
