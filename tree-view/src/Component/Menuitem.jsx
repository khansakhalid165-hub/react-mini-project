import { useState } from "react";
import Menulist from "./Menulist";

export default function Menuitem({item}){
    const [display, setDisplay] = useState({});

    function handleToggleCondition(getLabel) {
        setDisplay((prev) => ({ ...prev, [getLabel]: !prev[getLabel] }));
    }

    return(
        <li className="list-none">
            <div className="flex items-center gap-2">
                <p className="m-0 font-medium text-slate-800">{item.label}</p>
                {item && item.children && item.children.length > 0 ? (
                    <button
                        type="button"
                        onClick={() => handleToggleCondition(item.label)}
                        className="rounded bg-slate-100 px-2 py-0.5 text-sm text-slate-700 hover:bg-slate-200"
                    >
                        {display[item.label] ? "-" : "+"}
                    </button>
                ) : null}
            </div>
            {item && item.children && item.children.length > 0 && display[item.label] ? (
                <Menulist list={item.children} />
            ) : null}
        </li>
    );
}