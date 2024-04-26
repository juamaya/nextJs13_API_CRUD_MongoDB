'use client'
import Image from "next/image";
 
import { useEffect, useState } from 'react'

const SpaceX = () => {

    const [launches, setLaunches] = useState([])

    const getAllLaunches = async () => {
        try {

            const result = await fetch("https://api.spacexdata.com/v3/launches")
            const data = await result.json()
            setLaunches(data)
            console.log(data);

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getAllLaunches()
    }, [])

    return (
        <>
            <div className="container  rounded-3xl mx-auto my-10 p-10 bg-gradient-to-l from-sky-500 to-indigo-900 hover:bg-gradient-to-r   duration-1000 ">

                <p className="m-5">API: https://api.spacexdata.com/v3/launches</p>
                <div className="text-4xl">API SpaceX</div>
                <Image
                    src="/images/spaceX.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className="align-center rounded-full my-5 mx-auto size-80 hover:scale-110 duration-1000"
                />
                <h1 className='text-5xl text-indigo-950 mt-5'> Launches List</h1>

            </div>

            <div className='grid grid-cols-1     sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container       rounded-3xl   mx-auto my-20 p-10 bg-gradient-to-r from-sky-500 to-indigo-900 hover:bg-gradient-to-l justify-items-center  duration-1000 '>


                {launches.map(launch => (

                    <>

                        <div key={launch.flight_number} className='rounded-lg border-4 border-indigo-500 mb-5 justify-items-center' >

                            <h2 className='m-3 text-left text-3xl' >Launch : <span className='text-white'>{launch.mission_name}</span> </h2>
                            <img src={launch.links.mission_patch_small} alt={launch.mission_name} className='size-40  hover:scale-105 duration-500' />
                            <h2 className='m-3 text-left'>Year: {launch.launch_year}  </h2>
                        </div>
                    </>

                ))}

            </div>


        </>
    )
}

export default SpaceX