import Link from 'next/link'
 

const BtnCreate = () => {
    return (
        <button className='inline-flex items-center px-4 py-2 rounded  text-sm  font-medium text-center text-white bg-red-400   hover:bg-red-600 focus:ring-4 focus:outline-none'>
            <Link href={"/createStudent"}>Create Studend</Link>
        </button>
    )
}

export default BtnCreate