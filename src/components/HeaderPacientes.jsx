import { Search, Bell } from "lucide-react"

export default function HeaderPacientes() {
    return (
        <div className="flex justify-end items-center border-b text-gray-400 border-gray-200 py-5 px-10 gap-3 h-20">
            <div className="flex gap-4 mx-7">
                <Bell size={24} />
                <Search size={24} />
            </div>

            <div className="flex flex-col text-right font-semibold">
                <span>Bruno O</span>
                <span className="text-sm">Online</span>
            </div>

            <img
                src="/assets/teste.jpg"
                alt=""
                className="h-14 w-14 rounded-full"
            />
        </div>
    )
}