import FormContainer from '../components/FormContainer'
import { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { useDispatch, useSelector } from 'react-redux'
import { updateStoreData } from '../features/formDataSlice'

function Form() {

    const [submittedFormCount, setSubmittedFormCount] = useState(1)
    const dispatch = useDispatch()

    // If page refreshes take stored data from local storage and update the store
    useEffect(() => {

        const locallyStoredUserData = localStorage.getItem("userData")
        if (locallyStoredUserData) {
            // Step 1 : Get data and parse it
            const localStorageData = JSON.parse(locallyStoredUserData)


            // Step 2 : Update data in
            dispatch(updateStoreData(localStorageData))
        }


        // Get submitted form count on refres
        const submittedFormCountStoredInLocal = Number(localStorage.getItem("submittedFormCount"))

        if(submittedFormCountStoredInLocal){
            setSubmittedFormCount(submittedFormCountStoredInLocal)
        }
    }, [])



    return (
        <div className='min-h-screen flex flex-col mt-20 items-center p-4'>

                    {/* Progress Bar on TOP */}
                    <div className='w-full max-w-2xl mb-6'>
                        <ProgressBar submittedFormCount={submittedFormCount} />
                    </div>

                    {/* Render Forms */}
                    <div className='w-full max-w-2xl'>
                        <FormContainer setSubmittedFormCount={setSubmittedFormCount} submittedFormCount={submittedFormCount} />
                    </div>

        </div>
    )
}

export default Form