import { FaUserCircle } from "react-icons/fa";

export default function Header() {
    return (
        <div className="p-3 border-b border-gray-100 flex justify-end items-center text-gray-700 font-semibold">
            <h2>Olá, CasadeFabiano!</h2>
            <FaUserCircle size={30} className="mx-7" />
        </div>
    )
}