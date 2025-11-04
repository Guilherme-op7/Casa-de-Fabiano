export default function FormularioDespesas() {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 w-4xl flex flex-col">
            <form className="flex flex-col">
                <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">

                    <label className="text-gray-700 font-medium w-32 text-sm ">
                        Conta <span className="text-red-500">*</span>
                    </label>

                    <select className="w-full border-gray-300 text-sm py-1 text-gray-500">
                        <option>Selecione a conta</option>
                    </select>

                </div>

                <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">

                    <label className="text-gray-700 font-medium w-32 text-sm">
                        Tipo <span className="text-red-500">*</span>
                    </label>

                    <select className="w-full border-gray-300 text-sm py-1 text-gray-500">
                        <option>Selecione o tipo da despesa</option>
                    </select>

                </div>

                <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">

                    <label className="text-gray-700 font-medium w-32 text-sm">
                        Valor <span className="text-red-500">*</span>
                    </label>

                    <input placeholder="Insira o valor da despesa" className="w-full border-gray-300 text-sm py-1" />

                </div>

                <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">

                    <label className="text-gray-700 font-medium w-32 text-sm">
                        Parcelas <span className="text-red-500">*</span>
                    </label>

                    <input placeholder="Insira a quantidade de parcelas" className="w-full border-gray-300 text-sm py-1" />
                </div>

                <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
                    <label className="text-gray-700 font-medium w-32 text-sm">
                        Data <span className="text-red-500">*</span>
                    </label>
                    <input type="date" className="w-full border-gray-300 text-sm py-1" />
                </div>

                <div className="gap-x-8 border-b border-gray-200 flex items-center">
                    <label className="font-medium text-gray-700">Observações</label>
                    <textarea className="w-full text-sm pt-5 m-1" placeholder="Informe detalhes da despesa" />
                </div>

                <div className="border-b border-gray-200 flex items-center gap-x-4 mb-4 mt-4">
                    <label className="text-gray-700 font-medium w-32 text-sm">
                        Recibo <span className="text-red-500">*</span>
                    </label>
                    <input type="file" className="w-full border-gray-300 text-sm py-1" />
                </div>

                <div className="flex justify-end mt-8">
                    <button className="w-40 bg-blue-400 text-white rounded-md py-2 px-4 flex items-center justify-center hover:bg-blue-500 transition">
                        Registrar
                    </button>
                </div>

            </form>
        </div>


    );
}
