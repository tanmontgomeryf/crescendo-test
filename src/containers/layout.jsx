import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="hidden sm:block sm:bg-[url('/hero.jpg')] sm:w-full sm:h-[50vh] sm:bg-center sm:bg-cover" />
      <nav className="w-screen h-8 bg-main flex justify-center items-center">
        <IoMenu color="white" size={24} className="ml-auto mr-5 sm:hidden" />
        <ul className="hidden sm:flex-row sm:justify-center sm:items-center sm:gap-x-8  sm:flex">
          {["Home", "Recipes", "About", "Contact us"].map((nav) => (
            <li
              key={nav}
              className="text-white text-[11px] tracking-wider hover:text-sky-400 cursor-pointer uppercase"
            >
              {nav}
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
      <footer className="w-screen h-8 bg-main flex justify-center items-center self-end text-white text-xs">
        Just Cook | The Best Recipe © 2012-2022
      </footer>
    </div>
  );
};

export default Layout;
