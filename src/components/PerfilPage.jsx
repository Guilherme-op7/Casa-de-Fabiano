export default function PerfilPage() {
  return (
    <div className="flex flex-col border-r border-gray-200 w-64 h-full">
      <div className="flex flex-col items-center gap-4 p-6">
        <img src="/assets/People.png" alt="Perfil" className="rounded-full w-24 h-24"/>
        <h3 className="text-gray-500 text-2xl font-semibold">Bruno Oliveira</h3>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <button className="flex gap-3 w-full px-7 py-3 font-medium text-gray-500 bg-gray-200 cursor-pointer">
          Meu Perfil
        </button>
        <button className="flex gap-3 w-full px-7 py-3 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer">
          Outros 01
        </button>
        <button className="flex gap-3 w-full px-7 py-3 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer">
          Outros 02
        </button>
        <button className="flex gap-3 w-full px-7 py-3 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer">
          Outros 03
        </button>
        <button className="flex gap-3 w-full px-7 py-3 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer">
          Outros 04
        </button>
        <button className="flex gap-3 w-full px-7 py-3 font-medium text-gray-500 hover:bg-gray-100 cursor-pointer">
          Outros 05
        </button>
      </div>
    </div>
  );
}
