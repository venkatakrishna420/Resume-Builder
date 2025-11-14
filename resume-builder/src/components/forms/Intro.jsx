import React, { useState } from 'react'
import { intro, updateIntro } from '../../features/userDataSlice'
import { useDispatch, useSelector } from 'react-redux'

function Intro() {

    const [userDetail, setUserDetails] = useState(intro)
    const storedDetails = useSelector((state)=>state.userData)
    const dispatch = useDispatch()

    function getData(e) {
        e.preventDefault()
        
        // Data update in store
        dispatch(updateIntro(userDetail))

        // 
    }

    console.log(storedDetails)
    return (
        <div>
            <form className="max-w-md mx-auto" onSubmit={getData}>
                {/* First Name */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        value={userDetail.firstName}
                        required
                        onChange={(e) => setUserDetails({ ...userDetail, firstName: e.target.value })}
                    />
                    <label
                        htmlFor="firstName"
                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        First Name
                    </label>
                </div>

                {/* Last Name */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        value={userDetail.lastName}
                        required
                        onChange={(e) => setUserDetails({ ...userDetail, lastName: e.target.value })}

                    />
                    <label
                        htmlFor="lastName"
                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Last Name
                    </label>
                </div>

                {/* Email */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        value={userDetail.email}

                        required
                        onChange={(e) => setUserDetails({ ...userDetail, email: e.target.value })}

                    />
                    <label
                        htmlFor="email"
                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                </div>

                {/* LinkedIn and GitHub */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="url"
                            name="linkedIn"
                            id="linkedIn"
                            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            value={userDetail.linkedIn}

                            required
                            onChange={(e) => setUserDetails({ ...userDetail, linkedIn: e.target.value })}

                        />
                        <label
                            htmlFor="linkedIn"
                            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            LinkedIn
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="url"
                            name="github"
                            id="github"
                            className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            placeholder=" "
                            value={userDetail.gitHub}

                            required
                            onChange={(e) => setUserDetails({ ...userDetail, gitHub: e.target.value })}

                        />
                        <label
                            htmlFor="github"
                            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Github Link
                        </label>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        pattern="[0-9]{10}"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        value={userDetail.phoneNo}

                        required
                        onChange={(e) => setUserDetails({ ...userDetail, phoneNo: e.target.value })}

                    />
                    <label
                        htmlFor="phone"
                        className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Phone number
                    </label>
                </div>

                {/* Submit */}
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

export default Intro