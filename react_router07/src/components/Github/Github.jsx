import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // process 1 of fetch
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/SamidulSk')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} className='mx-auto rounded-full border-4 border-blue-500 shadow-lg p-2' />
        </div>
    )
}

export default Github
//process 2 of fetch
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SamidulSk')
    return response.json()
}