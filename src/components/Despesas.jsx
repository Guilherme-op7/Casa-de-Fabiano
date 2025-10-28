import Header from "./Header";

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

                <div className="bg-white p-6 rounded-xl border border-gray-200 w-4xl flex flex-col">
                    <form>
                        <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
                            <label className="text-gray-700 font-medium w-32 text-sm ">
                                Conta <span className="text-red-500">*</span>
                            </label>
                            <select
                                placeholder="Selecione a conta"
                                className="w-full border-gray-300 text-sm py-1"
                            />
                        </div>

                        <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
                            <label className="text-gray-700 font-medium w-32 text-sm">
                                Tipo <span className="text-red-500">*</span>
                            </label>
                            <select
                                placeholder="Selecione o tipo da despesa"
                                className="w-full border-gray-300 text-sm py-1"
                            />
                        </div>

                        <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
                            <label className="text-gray-700 font-medium w-32 text-sm">
                                Valor <span className="text-red-500">*</span>
                            </label>
                            <input
                                placeholder="Insira o valor da despesa"
                                className="w-full border-gray-300 text-sm py-1"
                            />
                        </div>

                        <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
                            <label className="text-gray-700 font-medium w-32 text-sm">
                                Parcelas <span className="text-red-500">*</span>
                            </label>
                            <input
                                placeholder="Insira a quantidade de parcelas"
                                className="w-full border-gray-300 text-sm py-1"
                            />
                        </div>

                        <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
                            <label className="text-gray-700 font-medium w-32 text-sm">
                                Data <span className="text-red-500">*</span>
                            </label>
                            <input type="date" className="w-full border-gray-300 text-sm py-1" />
                        </div>

                        <div className="gap-x-8 border-b border-gray-200 flex items-center">
                            <label className="font-medium text-gray-700">Observações</label>
                            <textarea
                                className="w-full text-sm pt-5 m-1"
                                placeholder="Informe detalhes da despesa"
                            />
                        </div>

                        <div className="border-b border-gray-200 flex items-center gap-x-4 mb-4 mt-4">
                            <label className="text-gray-700 font-medium w-32 text-sm">
                                Recibo <span className="text-red-500">*</span>
                            </label>
                            <input
                                placeholder="Selecione o arquivo recebido"
                                type="file"
                                className="w-full border-gray-300 text-sm py-1"
                            />
                        </div>

                        <div className="flex justify-end mt-8">
                            <button className="w-40 bg-blue-400 text-white rounded-md py-2 px-4 flex items-center justify-center hover:bg-blue-500 transition">
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
                <h2 className="text-2xl text-gray-500 font-semibold mt-8">
                    Despesas de Outubro/2025
                </h2>

                <div className="mt-3 rounded-xl border border-gray-200 bg-white w-4xl">
                    <table className="min-w-full flex flex-col">
                        <thead className=" bg-gray-100">
                            <tr className="text-sm font-semibold text-gray-300 ">
                                <th className="px-6 py-3">
                                    <input type="checkbox" className="accent-blue-500" />
                                </th>
                                <th className="">
                                    Conta <span className="text-xs">⇅</span>
                                </th>
                                <th className="">
                                    Tipo <span className="text-xs">⇅</span>
                                </th>
                                <th className="">
                                    Valor <span className="text-xs">⇅</span>
                                </th>
                                <th className="">
                                    Data <span className="text-xs">⇅</span>
                                </th>
                                <th className="text-center w-6">⋮</th>
                            </tr>
                        </thead>

                        <tbody className="text-gray-400 text-md divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-6 text-center">
                                    Nenhum registro encontrado
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
