// src/components/forms/Projects.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProjects } from "../../features/userDataSlice";

function Projects() {
  const stored = useSelector((state) => state.userData.projects);
  const dispatch = useDispatch();

  const [projects, setProjects] = useState(stored && stored.length ? stored : [
    { projectName: "", projectDetails: "", preview: "", gitHub: "" }
  ]);

  useEffect(() => {
    if (stored && stored.length) setProjects(stored);
  }, [stored]);

  function handleChange(index, key, value) {
    const copy = [...projects];
    copy[index] = { ...copy[index], [key]: value };
    setProjects(copy);
  }

  function addProject() {
    setProjects([...projects, { projectName: "", projectDetails: "", preview: "", gitHub: "" }]);
  }

  function removeProject(index) {
    const copy = [...projects];
    copy.splice(index, 1);
    setProjects(copy);
    dispatch(updateProjects(copy));
  }

  function handleNext(e) {
    e.preventDefault();
    dispatch(updateProjects(projects));
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>

      {projects.map((p, idx) => (
        <div key={idx} className="mb-6 p-4 bg-white rounded shadow">
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input type="text" value={p.projectName} onChange={(e) => handleChange(idx, "projectName", e.target.value)} className="w-full p-2 border rounded" />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Details</label>
            <textarea value={p.projectDetails} onChange={(e) => handleChange(idx, "projectDetails", e.target.value)} className="w-full p-2 border rounded" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1">Preview Link</label>
              <input type="text" value={p.preview} onChange={(e) => handleChange(idx, "preview", e.target.value)} className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">GitHub</label>
              <input type="text" value={p.gitHub} onChange={(e) => handleChange(idx, "gitHub", e.target.value)} className="w-full p-2 border rounded" />
            </div>
          </div>

          <div className="mt-3 flex justify-end gap-2">
            {projects.length > 1 && (
              <button type="button" onClick={() => removeProject(idx)} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
            )}
          </div>
        </div>
      ))}

      <div className="flex gap-2 mb-6">
        <button type="button" onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded">Add Project</button>
      </div>

      <div className="text-right">
        <button onClick={handleNext} className="text-white bg-green-500 px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default Projects;

