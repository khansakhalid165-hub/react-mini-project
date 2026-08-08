import {useState,useEffect} from 'react'
export default function Data(){
    const[loading,setloading]=useState(false)
    const[products,setproducts]=useState([])
    const[count,setcount]=useState(0)
    async function fetchproducts() {
        try{
            setloading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            if(result && result.products && result.products.length){
            setproducts((prevdata)=>[...prevdata,...result.products])
        setloading(false)}
        } catch(e) {
            console.log(`${e} occurs`)
        } finally {
            setloading(false)
        }
    }
    useEffect(()=>{
        fetchproducts()
    },[count])
    if(loading){
        return <div className="flex min-h-30 items-center justify-center text-slate-600">Loading data ! please wait</div>
    }
    

    return(
        <>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {
                products && products.length ? 
                products.map(item=><div className='overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm' key={item.id}>
                    <img className='h-48 w-full rounded-xl object-cover' src={item.thumbnail} alt="item.title" />
                    <p className='mt-3 text-sm font-medium text-slate-900'>{item.title}</p>

                </div>)
                
                :null
            }
        </div>
        <div className="mt-6 flex justify-center">
            <button className='rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700' onClick={()=>setcount(count+1)}>Load more data</button>
        </div>

        </>
    )

}