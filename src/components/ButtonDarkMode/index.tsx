import { useAppData } from "@/data/hook/userAppData";
import { IconeLua, IconeSol } from "../icons";

export default function ButtonDarkMode() {
  const { alternarTema, tema } = useAppData();
  return (
    <button
      onClick={alternarTema}
      className="hidden w-10 h-5 rounded-full bg-white sm:flex items-center transition duration-300 focus:outline-none shadow dark:bg-gray-600"
    >
      <div
        id="switch-toggle"
        className={`w-6 h-6 relative rounded-full transition duration-500 transform flex justify-center items-center ${
          tema === "dark" ? "bg-gray-700" : "bg-yellow-500"
        } ${
          tema === "dark" ? "translate-x-full" : "-translate-x-2"
        } p-1 text-white`}
      >
        {tema === "dark" ? IconeLua : IconeSol}
      </div>
    </button>
  );
}
