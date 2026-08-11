import Menuitem from "./Menuitem";

export default function Menulist({list=[]}){
    return(
        <ul className="ml-4 list-disc space-y-2 text-sm text-slate-700">
            {
                list && list.length?
                list.map((listitem, index)=><Menuitem key={listitem.label || index} item={listitem}/>)
                :null
            }
        </ul>
    )

}