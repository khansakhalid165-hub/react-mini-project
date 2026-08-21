import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context/Index";

export default function Navbar() {
    const {searchparam,setsearchparam,handlesubmit}=useContext(GlobalContext)
   
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="search"
          value={searchparam}
          onChange={(event)=>setsearchparam(event.target.value)}
          placeholder="enter item"
          className="bg-white/75 px-8 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form >
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
