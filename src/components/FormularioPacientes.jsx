export default function FormularioPacientes() {
  return (
    <div className="flex flex-col bg-gray-50  p-10">

        <h1 className="text-2xl font-semibold mb-6">Novo Paciente</h1>

        <div className="bg-white p-6 rounded-xl border border-gray-200 w-2xl  flex flex-col gap-4">
          <form className="flex flex-col">
            
            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Nome <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Mikasa Ackerman"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Nome Social <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Digite seu nome social"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Naturalidade <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="São Paulo"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Data de Nascimento <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="01/01/2001"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Gênero <span className="text-red-500">*</span>
              </label>
              <select className="w-full text-sm py-1 text-gray-500 outline-none">
                <option>Selecione</option>
                <option>Masculino</option>
                <option>Feminino</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Email
              </label>
              <input
                type="email"
                placeholder="exemplo@email.com"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Celular <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                RG <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="00.000.000-0"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                CPF <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="000.000.000-00"
                className="w-full text-sm py-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-x-4 mb-4 border-b border-gray-200">
              <label className="text-gray-700 font-medium w-32 text-sm">
                Observações
              </label>
              <textarea
                className="w-full text-sm py-2 outline-none resize-none"
                placeholder="Informe observações ou detalhes adicionais"
              />
            </div>

            <div className="flex justify-between mt-8 items-center">
              <button
                type="button"
                className="w-40 bg-gray-200 text-gray-500 font-semibold rounded-md py-2 px-4 hover:bg-gray-300 transition"
              >
                Cancelar
              </button>

              <img src="/assets/Frame 1.png" alt="Ícone central" className="h-6" />

              <button
                type="submit"
                className="w-40 bg-blue-500 text-white font-semibold rounded-md py-2 px-4 hover:bg-blue-600 transition"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>

      </div>
  );
}
