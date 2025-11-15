import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Resume from '../components/preview/Resume'
import { useNavigate } from 'react-router-dom'
import EditButton from '../components/EditButton'   
import { goToSection } from '../features/userDataSlice'

function Preview() {
    
    // const resumeDetails = useSelector((state) => state.userData)
    const navigate = useNavigate()
    const dispatch=useDispatch()

    function handleEdit() {
        navigate("/userDetails")   
    }

    function editSection(section) {
    dispatch(goToSection(section));
    navigate("/userDetails");
  }
function editAll() {
    dispatch(goToSection("INTRO"));
    navigate("/userDetails");
  }
    return (
         <div className="h-screen flex relative">
      <div className="w-[80%] flex flex-col justify-center items-center gap-6">
        <div className="flex gap-3">
          <button onClick={() => editSection("INTRO")}>Intro</button>
          <button onClick={() => editSection("OBJECTIVE")}>Objective</button>
          <button onClick={() => editSection("SKILLS")}>Skills</button>
          <button onClick={() => editSection("PROJECTS")}>Projects</button>
          <button onClick={() => editSection("EDUCATION")}>Education</button>
        </div>

        <Resume />
      </div>

      <div className="absolute bottom-10 right-10 flex gap-4">
        <EditButton onClick={editAll}>Edit All</EditButton>

        <button className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
          Download
        </button>
      </div>
    </div>
    )
}

export default Preview
