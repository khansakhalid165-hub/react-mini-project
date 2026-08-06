import { useState } from "react"

export default function Randomcolor(){
    const[typeofcolor,settypeofcolor]=useState('hex')
    const[color,setcolor]=useState('white')
    const buttonStyle = {
        padding: '8px 12px',
        margin: '8px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        background: 'rgba(0,0,0,0.08)'
    }
    function handlecreatecolor(type){
        if(type === 'hex'){
            const hexChars = '0123456789ABCDEF'
            let hcolor = '#'
            for(let i = 0; i < 6; i++){
                hcolor += hexChars[Math.floor(Math.random() * hexChars.length)]
            }
            setcolor(hcolor)
            return
        }

        if(type === 'rgb'){
            const r = Math.floor(Math.random() * 256)
            const g = Math.floor(Math.random() * 256)
            const b = Math.floor(Math.random() * 256)
            setcolor(`rgb(${r}, ${g}, ${b})`)
            return
        }
    }
    return(
        <>
        <div className="color" style={{width:"100vw",height:'100vh',background:color,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
            
                <button style={buttonStyle} onClick={()=>settypeofcolor('hex')}>Create Hex Color</button>
                <button style={buttonStyle} onClick={()=>settypeofcolor('rgb')}>Create RGB color</button>
                <button style={buttonStyle} onClick={()=> handlecreatecolor(typeofcolor)}>Generate Randomcolor</button>
            <div style={
                {
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    color:'white',
                    fontSize:'60px',
                    marginTop:'50px'

                }
            }>
                <h3>{typeofcolor}</h3>
                <h1>{color}</h1>

            </div>

        </div>
        
        </>
    )
}