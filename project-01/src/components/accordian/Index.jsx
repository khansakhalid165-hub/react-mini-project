import { use, useState } from "react";
import { data } from "./data";

export default function Accordian(){
    const [select, setSelected] = useState(null)
    const[Enablemultiselection,setEnablemultiselection]=useState(false)
    const[multiple,setmultiple]=useState([])

    function handlesingleSelection(currentid){
        setSelected(currentid === select ? null : currentid)
    }
    function handlemultipleselection(currentid){
        let cpymultiple=[...multiple]
        const findindex=cpymultiple.indexOf(currentid)
        if(findindex===-1)cpymultiple.push(currentid)
            else{cpymultiple.splice(findindex,1) }
        setmultiple(cpymultiple)
    }

    return(
        <>
        <button className="mb-6 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
        onClick={()=>setEnablemultiselection(!Enablemultiselection)}>
            Enable multi selection
        </button>
        <div className="space-y-4">
            {data && data.length > 0 ?
            data.map(dataitem => (
                <div key={dataitem.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    <button
                        type="button"
                        onClick={Enablemultiselection?()=>handlemultipleselection(dataitem.id):() => handlesingleSelection(dataitem.id)}
                        className="w-full px-5 py-5 text-left flex items-center justify-between gap-4 bg-white transition-colors duration-200 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                    >
                        <div>
                            <h3 className="text-lg font-semibold text-slate-950 transition-colors duration-200 hover:text-sky-700">{dataitem.question}</h3>
                        </div>
                        <span className="text-2xl font-bold text-slate-500 transition-colors duration-200 hover:text-sky-700">{select === dataitem.id ? "−" : "+"}</span>
                    </button>
                    {
                        Enablemultiselection?multiple.indexOf(dataitem.id)!==-1 && 
                        <div className="border-t border-slate-200 bg-slate-100 px-5 py-4 text-slate-700 leading-7">
                            {dataitem.answer}
                        </div> : select === dataitem.id &&
                        <div className="border-t border-slate-200 bg-slate-100 px-5 py-4 text-slate-700 leading-7">
                            {dataitem.answer}
                        </div>
                    }

            
                </div>
            ))
            : <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">No data found!</div>
             }
        </div>
         </>
    )
   
}