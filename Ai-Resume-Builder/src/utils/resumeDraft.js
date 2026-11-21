import { FORM_SECTIONS } from "../constant";

export function readSavedDraft() {
  try {
    const storedData = localStorage.getItem("userData");
    if (!storedData) return null;

    const draft = JSON.parse(storedData);
    if (!draft || typeof draft !== "object" || Array.isArray(draft)) return null;
    if (!Object.values(FORM_SECTIONS).includes(draft.currentForm)) return null;

    const activeSection = draft[draft.currentForm];
    const renderingQuestions = draft.renderingQuestions;
    const isValidSection = (section) =>
      Array.isArray(section) || (section !== null && typeof section === "object");

    if (!isValidSection(activeSection) || !isValidSection(renderingQuestions)) return null;

    return draft;
  } catch {
    return null;
  }
}
