import { Link } from "react-router-dom";

export default function SidebarPacientes() {
    return (
        <div className="min-h-screen w-72 bg-[#2B3031] text-gray-200 flex flex-col justify-between">
            <div>
                <div className="flex justify-center py-7">
                    <img src="/assets/AppleLogo.png" alt="Logo" />
                </div>

                <nav className="flex flex-col gap-1">
                    <Link to="/" className="flex items-center gap-3 w-full px-3 py-4 text-md hover:bg-[#424242]">
                        <img src="/assets/House.png" alt="" /> Home
                    </Link>

                    <Link to="/pacientes" className="flex items-center gap-3 w-full px-3 py-4 text-md border-l-4 border-white bg-[#77777796]">
                        <img src="/assets/UsersThree.png" alt="" /> Pacientes
                    </Link>

                    <Link to="/" className="flex items-center gap-3 w-full px-3 py-4 text-md hover:bg-[#424242]">
                        <img src="/assets/CalendarBlank.png" alt="" /> Sessões
                    </Link>

                    <Link to="/" className="flex items-center gap-3 w-full px-3 py-4 text-md hover:bg-[#424242]">
                        <img src="/assets/Wallet.png" alt="" /> Carteiras Virtuais
                    </Link>

                    <Link to="/" className="flex items-center gap-3 w-full px-3 py-4 text-md hover:bg-[#424242]">
                        <img src="/assets/Files.png" alt="" /> Relatórios
                    </Link>

                    <Link to="/" className="flex items-center gap-3 w-full px-3 py-4 text-md hover:bg-[#424242]">
                        <img src="/assets/Megaphone.png" alt="" /> Avisos
                    </Link>

                    <Link to="/" className="flex items-center gap-3 w-full px-3 py-4 text-md hover:bg-[#424242]">
                        <img src="/assets/GearSix.png" alt="" /> Configurações
                    </Link>
                </nav>
            </div>

            <div className="flex border-t border-gray-500 py-4"></div>
        </div>
    );
}
