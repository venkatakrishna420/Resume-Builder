import React, { useState } from "react";
import { educationData, updateEducation } from "../../features/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Education() {
  const storedArray = useSelector((state) => state.userData.education);
  const [education, setEducation] = useState(educationData);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  // function getData(e) {
  //   e.preventDefault();

  //   dispatch(updateEducation(education));
  // }
  function getData(e) {
    e.preventDefault();
    // wrap back into array to match state shape
    dispatch(updateEducation(education));
    // final step, navigate to preview
    navigate("/download-resume");
  }
  return (
    <div>
      {/* collegeName */}
      <form class="max-w-md mx-auto" onSubmit={getData}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="collageName"
            id="collageName"
            class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
            value={education.collegeName}
            onChange={(e) => setEducation({ ...education, collegeName: e.target.value })}
          />
          <label
            for="floating_email"
            class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Collage Name
          </label>
        </div>

        {/* passedoutYear */}
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="passedoutYear"
            id="passedoutYear"
            class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
            value={education.passedOutYear}
            onChange={(e) => setEducation({ ...education, passedOutYear: e.target.value })}
          />
          <label
            for="floating_password"
            class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            passedOutYear
          </label>
        </div>

        {/* course */}
        <div class="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="course"
            id="course"
            class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required
            value={education.course}
            onChange={(e) => setEducation({ ...education, course: e.target.value })}
          />
          <label
            for="floating_repeat_password"
            class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            course
          </label>
        </div>

        {/* cgpa */}
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="cgpa"
              id="cgpa"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
              value={education.cgpa}
              onChange={(e) => setEducation({ ...education, cgpa: e.target.value })}
            />
            <label
              for="floating_first_name"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              CGPA
            </label>
          </div>

          {/* percentage */}
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="percentage"
              id="percentage"
              class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
              required
              value={education.percentage}
              onChange={(e) => setEducation({ ...education, percentage: e.target.value })}
            />
            <label
              for="floating_last_name"
              class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Percentage
            </label>
          </div>
        </div>

        {/* submit */}
       <button
                    type="submit"
                    className="text-white bg-green-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                    submit & preview
                </button>
      </form>
    </div>
  );
}

export default Education;
