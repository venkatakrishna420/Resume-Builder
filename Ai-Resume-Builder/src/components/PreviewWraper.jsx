import { useEffect, useState } from 'react'
import PreviewResume from './PreviewResume';
import { useDispatch, useSelector } from 'react-redux';
import { FORM_SECTIONS, ROUTES_PATH } from '../constant';
import { updateStoreData, setCurrentFormSection } from '../features/formDataSlice';
import useDragAndDrop from '../utils/dragAndDrop/dragAndDrop';
import useResumeSection from '../utils/resume_template1_sections/allSections.jsx';
import { useNavigate } from 'react-router-dom';

function PreviewWraper() {
    const data = useSelector((state) => state.formData)
    const [userData, setUserData] = useState(data)
    console.log(data, 'data from store in wrapper check')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onEditSection = (section) => {
        dispatch(setCurrentFormSection(section));
        navigate(ROUTES_PATH.FORM_SECTIONS);
    }


    // This function checks whether a section has at least one answered field
    function isAllRequiredFilled(section) {
        // If section is null/undefined, return false
        if (!section) return false;

        // If the section is an array (ex: list of questions)
        if (Array.isArray(section)) {
            // Check if ANY question has a non-empty answer
            return section.some((question) => question?.answer?.trim());
        }

        // If the section is an object (ex: education: { school: [], college: [] })
        if (typeof section === "object") {
            return Object.values(section)
                // Only look inside values that are arrays
                .some((subArray) =>
                    Array.isArray(subArray) &&
                    // Check if ANY item in that array has a non-empty answer
                    subArray.some(q => q?.answer?.trim())
                );
        }

        // If it's neither array nor object
        return false;
    }

    // Get answer from a specific index inside a sub-array
    function getAns(sectionArray, questionLabel) {
        return sectionArray?.find(q => q.displayQuestion === questionLabel)?.answer || "";
    }

    const initialSections = [FORM_SECTIONS.SKILLS, FORM_SECTIONS.PROJECT, FORM_SECTIONS.EDUCATION, FORM_SECTIONS.CERTIFICATIONS];

    // ----------------- Drag & Drop logic -----------------
    function groupAnagrams(strs) {
    const obj = {};

    for (let str of strs) {
        let key = str.split("").sort().join("");

        if (!obj[key]) {
            obj[key] = [];
        }

        obj[key].push(str);
    }

    return Object.values(obj);
}
    // Sections we want draggable (initial order)
    
    const { sectionsOrder, onDragStart, onDragOver, onDrop, onDragEnd, getSectionContainerStyle } = useDragAndDrop(initialSections);

    const { renderSkills, renderEducation, renderProjects, renderCertifications } = useResumeSection({
        userData,
        isAllRequiredFilled,
        getAns,
        onDragStart,
        onDragOver,
        onDrop,
        onDragEnd,
        getSectionContainerStyle,
        onEditSection
    });


    // ----- Render functions for each section -----

    const sectionRenderMap = {
        skills: renderSkills,
        projects: renderProjects,
        education: renderEducation,
        certifications: renderCertifications,
    };



    useEffect(() => {
        if (localStorage.getItem("userData") && !userData) {
            const localStorageData = JSON.parse(localStorage.getItem("userData"))
            setUserData(localStorageData)
            dispatch(updateStoreData(localStorageData))
        }
    }, [])
    // console.log(userData, 'user data in wrapper')

    return (
        <div>
            {userData && <PreviewResume userData={userData} isAllRequiredFilled={isAllRequiredFilled} sectionRenderMap={sectionRenderMap} getAns={getAns} sectionsOrder={sectionsOrder} onEditSection={onEditSection} />}

        </div>
    )
}

export default PreviewWraper