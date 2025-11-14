import React from 'react'
import Intro from '../components/forms/Intro'
import { useSelector } from 'react-redux'
import Objective from '../components/forms/Objective'
import Skills from '../components/forms/Skills'
import Projects from '../components/forms/Projects'
import Education from '../components/forms/Education'

function Form() {

    const formRenderStatus = useSelector((state)=>state.userData.formRenders)


    console.log(formRenderStatus,'form render status')
  return (
    <div className='h-screen flex justify-center items-center'>

    {formRenderStatus.INTRO && <Intro />}

    {formRenderStatus.OBJECTIVE && <Objective />}

    {formRenderStatus.SKILLS && <Skills />}

    {formRenderStatus.PROJECTS && <Projects />}


    {formRenderStatus.EDUCATION && <Education />}




    </div>
  )
}

export default Form