import Menulist from "./Menulist";

export default function TreeView({menus=[]}){
    return(
        <div className="container">
            <Menulist list={menus}/>

        </div>
    )
}