import SidebarPacientes from "../components/SidebarPacientes";
import HeaderPacientes from "../components/HeaderPacientes";
import PerfilPage from "../components/PerfilPage";
import FormularioPacientes from "../components/FormularioPacientes";

export default function Pacientes() {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <SidebarPacientes />

      <div className="flex flex-col w-full">
        <HeaderPacientes />

        <div className="flex w-full">
          <PerfilPage />

          <div className="w-full">
            <p className="text-gray-400 text-sm font-semibold px-6 py-4">
              Link Anterior &gt; Link Atual
            </p>
            <FormularioPacientes />

          </div>
        </div>
      </div>
    </div>
  );
}
