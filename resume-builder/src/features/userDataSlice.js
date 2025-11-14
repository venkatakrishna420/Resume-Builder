import Education from "../components/forms/Education";

const { createSlice } = require("@reduxjs/toolkit");


export const educationData = {collegeName : "", passedOutYear :"", course :"", cgpa:"", percentage :"" }
export const projectStructure  ={projectName:"",projectDetails : "",preview:"",gitHub:""}
export const educationStructure = {higherSchool : educationData,degree : educationData}
export const intro = {firstName : "", lastName :"", phoneNo: "", email :"", gitHub : "", linkedIn:""}

export const FORM_RENDERS = {
    INTRO : true,
    OBJECTIVE : false,
    SKILLS : false,
    PROJECTS : false,
    EDUCATION : false,
}

const initialState = {
    intro ,
    objective : "",
    skills : [],
    projects : [projectStructure],
    education : [educationStructure],
    formRenders : FORM_RENDERS 

}

const userDataSlice = createSlice({
    name : "userData",
    initialState ,
    reducers : {
        updateIntro(state,action){
            console.log(action,'action sent from dispatch')
            state.intro = action.payload
            state.formRenders.INTRO = false
            state.formRenders.OBJECTIVE = true
        },
        updateObjective(state,action){
            state.objective = action.payload
            state.formRenders.OBJECTIVE = false
            state.formRenders.SKILLS = true
        },
        updateSkills(state,action){
            state.skills = action.payload
            state.formRenders.SKILLS = false
            state.formRenders.PROJECTS = true
        },
        updateProjects(state,action){
            state.projects = action.payload
            state.formRenders.PROJECTS = false
            state.formRenders.EDUCATION = true
        },
        updateEducation(state,action){
            state.education = action.payload
        }
    }
})

export const {updateIntro,updateObjective,updateEducation,updateProjects,updateSkills} =  userDataSlice.actions
export default userDataSlice.reducer