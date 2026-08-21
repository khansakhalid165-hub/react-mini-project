import { useContext } from "react"
import { GlobalContext } from "../../Context/Index"
import Recipe from "../../component/recipe-list"

export default function Favourite(){
    const {favoritelist}=useContext(GlobalContext)
        
        return(
            <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
                {
                    favoritelist &&favoritelist.length>0 ?favoritelist.map(item=><Recipe item={item}/>)
    
                    :<div><p className="lg:text-4xl text-center text-xl text-black font-extrabold">Nothing is added in favorites</p></div>
    
                }
                
            </div>
        )
}