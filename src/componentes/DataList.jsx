 

import Link from 'next/link';
import BtnDelete from './BtnDelete';
 
 

const getData = async () => {
    try {
        const response = await fetch(process.env.URI, { cache: "no-store" })
        return response.json()
    } catch (error) {
        console.log("Error:", error);
    }
}
/*   const {data} = await getData()
console.log(data); */

 const DataList = async () => {
    const { data } = await getData()
    console.log(data)
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start'>

{data.map((element) => (
    <div key={element._id} className='p-3 shadow-lg bg-white my-4 flex justify-between'>
        <div>
            <p className='font-bold text-2xl text-red-500'>id: {element._id}</p>
            <h2 className='font-bold text-2xl text-red-500'>Name: {element.name}</h2>
            <p className='font-bold text-2xl text-red-500'>Age: {element.age}</p>
        </div>
        {/*BOTONES DE ACCIONES */}
        <div className='flex mt-4 space-x-3 md:mt-6'>
            <Link href={`/editStudent/${element._id}`} className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-violet-400 hover:bg-violet-600 focus:ring-4 focus:outline-none'>Update</Link>
            <BtnDelete id={element._id}/>
        </div>
    </div>
))}

        

        </div>
    )
}

export  default DataList