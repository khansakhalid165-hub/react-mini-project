import { useContext } from "react"
import { GlobalContext } from "../../Context/Index"
import Recipe from "../../component/recipe-list"

export default function Home(){
    const {recipelist,loading}=useContext(GlobalContext)
    if(loading) return <div>Loading...Please Wait</div>
    return(
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                recipelist &&recipelist.length>0 ?recipelist.map(item=><Recipe item={item}/>)

                :<div><p className="lg:text-4xl text-center text-xl text-black font-extrabold">Nothing do so Please something</p></div>

            }
            
        </div>
    )
}