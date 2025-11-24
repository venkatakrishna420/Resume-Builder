function OptionalSections(userData) {
    let skipped = 0;
    //skills
    if (!hasSection(userData.skills.database)) skipped++;
    if (!hasSection(userData.skills.others)) skipped++;
    //project 3
    if (!hasSection(userData.projects.project3)) skipped++;
    //certifications
    if (!hasSection(userData.certifications)) skipped++;
    //internship
    if (!hasSection(userData.intership)) skipped++;

    return skipped;
}



function setCharCount(userData) {
  const skipped = OptionalSections(userData);

  let minCount;
  let maxCount;

  if (skipped > 3) {
    minCount = 550;   
    maxCount = 850;  
  }

  else if (skipped === 2 || skipped === 3) {
    minCount = 450;
    maxCount = 800;
  }

  else {
    minCount = 300;
    maxCount = 700;
  }

  return { minCount, maxCount, skipped };
}
export default setCharCount