// import { initialState } from "../../constant";

// function OptionalSections(userData) {
//   let skipped = 0;
//   //skills

//   // Object.values(userData.skills).map((i) => {
//   //   i[0].displayQuestion.toLowerCase().includes("databases") && i[0].answer > 0
//   //     ? skipped++
//   //     : "";
//   // });

//   if (initialState.skills.database[0].answer.length < 1) skipped++;
//   //project 3
//   // if (!hasSection(userData.projects.project3)) skipped++;
//   if(initialState.projects.project3)
//   //certifications
//   if (!hasSection(userData.certifications)) skipped++;
//   //internship
//   if (!hasSection(userData.intership)) skipped++;

//   return skipped;
// }

function OptionalSections(userData) {
  let skipped = 0;
  const skills = userData.skills;
  //skills
  const skillsFilled =
    skills.database[0].answer.trim().length > 0 ||
    skills.others[0].answer.trim().length > 0;

  if (!skillsFilled) skipped++;
  //projects
  const project3Filled = userData.projects.project3.some(
    (item) => item.answer?.trim()?.length > 0
  );

  if (!project3Filled) skipped++;

  //certifications
  const certificationsFilled = userData.certifications.some(
    (item) => item.answer?.trim()?.length > 0
  );

  if (!certificationsFilled) skipped++;

  //  internship
  if (userData.intership) {
    const internshipFilled = userData.intership.some(
      (item) => item.answer?.trim()?.length > 0
    );

    if (!internshipFilled) skipped++;
  }

  return skipped;
}

// 160 per line

function setCharCount(userData) {
  const skipped = OptionalSections(userData);

  let minCount;
  let maxCount;

  if (skipped > 3) {
    minCount = 640;
    maxCount = 850;
  } else if (skipped === 2 || skipped === 3) {
    minCount = 550;
    maxCount = 800;
  } else {
    minCount = 480;
    maxCount = 700;
  }

  return { minCount, maxCount, skipped };
}
export default setCharCount;
