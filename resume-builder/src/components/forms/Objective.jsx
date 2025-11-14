import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateObjective } from '../../features/userDataSlice'

function Objective() {
    const [objective, setObjective] = useState("")

    const dispatch = useDispatch()

    function getData(e){
        e.preventDefault()

        // Save data in store
        dispatch(updateObjective(objective))

        
    }
    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={getData}>

                <div className="relative z-0 w-full mb-5 group">
                    <textarea
                        type="text"
                        name="objective"
                        id="objective"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        value={objective}
                        required
                        onChange={(e) => setObjective(e.target.value)}
                    />
                    <label
                        htmlFor="objective"
                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Objective
                    </label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-green-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                    Next
                </button>
            </form>
        </div>
    )
}

export default Objective