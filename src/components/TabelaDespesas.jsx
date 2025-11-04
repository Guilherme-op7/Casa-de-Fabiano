export default function TabelaDespesas() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white w-4xl">
            <table className="min-w-full flex flex-col">
                <thead className="bg-gray-100">
                    <tr className="text-sm font-semibold text-gray-300">
                        <th className="px-6 py-3">
                            <input type="checkbox" className="accent-blue-500"/>
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
    );
}
