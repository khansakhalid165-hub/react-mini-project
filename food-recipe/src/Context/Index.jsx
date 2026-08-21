import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function Globalstate({ children }) {
  const [searchparam, setsearchparam] = useState("");
  const [loading, setloading] = useState(false);
  const [recipelist, setrecipelist] = useState([]);
  const[recipedetails,setrecipedetails]=useState(null)
  const[favoritelist,setfavoritelist]=useState([])
  const navigate=useNavigate()
  function handlefavorite(getcurrentitem){
    let cpylist=[...favoritelist]
    const index=cpylist.findIndex(item=>item.id===getcurrentitem.id)

    if(index===-1){
      cpylist.push(getcurrentitem)
    } else {
      cpylist.splice(index, 1)
    }

    setfavoritelist(cpylist)
  }

  async function handlesubmit(params) {
    params.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${searchparam}`,
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setrecipelist(data?.data?.recipes);
        setloading(false);
        setsearchparam("");
        navigate('/')
      }
    } catch (e) {
      console.log(`${e} occurs`);
      setloading(false);
      setsearchparam("");
    }
  }
  return (
    <GlobalContext.Provider
      value={{ searchparam, setsearchparam, loading, recipelist, handlesubmit ,recipedetails,setrecipedetails,favoritelist,setfavoritelist,handlefavorite}}
    >
      {children}
    </GlobalContext.Provider>
  );
}
