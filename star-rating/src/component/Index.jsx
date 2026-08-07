import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
export default function Starrating({noofstars}){
    const[rating,setrating]=useState(0)
    const[hover,sethover]=useState(0)
    function handleclick(getindex){
        setrating(getindex)

    }
    function handlemouseenter(getindex){
        sethover(getindex)

    }
    function handlemouseleave(getindex){
        sethover(rating)

    }
    return(
        <div className="flex gap-2">
        {[...Array(noofstars)].map((_,index)=>{
            index+=1
            return <FaStar
            key={index}
            className={`cursor-pointer transition-all duration-200 ${
              index <= (hover || rating)
                ? "text-yellow-400 scale-110"
                : "text-gray-300 hover:text-yellow-300"
            }`}
            onClick={()=>handleclick(index)}
            onMouseMove={()=>handlemouseenter(index)}
            onMouseLeave={()=>handlemouseleave(index)}
            size={40}/>
        })}
        </div>
    )

}