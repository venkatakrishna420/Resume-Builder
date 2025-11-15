// src/components/preview/Resume.jsx
import React from "react";
import { useSelector } from "react-redux";

function Resume() {
  const { intro, objective, skills, projects, education } = useSelector((state) => state.userData);

  const edu = (education && education[0]) || null;

  return (
    <div className="w-full max-w-3xl bg-white p-8 rounded shadow">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">
          {intro?.firstName} {intro?.lastName}
        </h1>
        <p className="text-sm">{intro?.email} • {intro?.phoneNo}</p>
        <p className="text-sm">{intro?.gitHub} • {intro?.linkedIn}</p>
      </div>

      {/* Objective */}
      {objective && (
        <section className="mb-4">
          <h3 className="font-semibold">Objective</h3>
          <p>{objective}</p>
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-4">
          <h3 className="font-semibold">Skills</h3>
          <ul className="list-disc ml-5">
            {skills.map((s, idx) => <li key={idx}>{s}</li>)}
          </ul>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-4">
          <h3 className="font-semibold">Projects</h3>
          {projects.map((p, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{p.projectName}</p>
              <p className="text-sm">{p.projectDetails}</p>
              <p className="text-xs">{p.preview} {p.gitHub}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {edu && (
        <section className="mb-4">
          <h3 className="font-semibold">Education</h3>

          <div className="mb-2">
            <p className="font-medium">Higher School</p>
            <p>{edu.higherSchool.collegeName} ({edu.higherSchool.passedOutYear}) - {edu.higherSchool.course}</p>
            <p>CGPA: {edu.higherSchool.cgpa} • {edu.higherSchool.percentage}%</p>
          </div>

          <div>
            <p className="font-medium">Degree</p>
            <p>{edu.degree.collegeName} ({edu.degree.passedOutYear}) - {edu.degree.course}</p>
            <p>CGPA: {edu.degree.cgpa} • {edu.degree.percentage}%</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Resume;

