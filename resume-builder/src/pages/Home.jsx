import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    function redirectToForms() {
        navigate('/userDetails')
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen'>

            <h1>Will be adding soon until then add user details</h1>

            <button className='bg-green-800 text-white rounded h-10 w-20' onClick={redirectToForms}>Next</button>

        </div>



    )
}

export default Home