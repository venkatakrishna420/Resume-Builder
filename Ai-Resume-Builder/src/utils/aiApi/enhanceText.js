import axios from "axios";

// Call gemini api with and return optimised text with given maxLength and minLength
export async function enhanceText(inputText, maxLength = 800, minLength = 300) {
  if (!inputText || !inputText.trim()) {
    return { error: "Input cannot be empty." };
  }

  const trimmed = inputText.trim();

  const prompt = `
    Rewrite and enhance the following text so that the final output is 
    professional, concise, resume-ready, and strictly between 
    ${minLength} and ${maxLength} characters. 
    
    - If the text is too short, expand it meaningfully.
    - If the text is too long, summarize it intelligently.
    - Return ONLY the improved final text with no extra formatting.

    Text: "${trimmed}"
  `;

  // Payload for gemini api
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: {
      parts: [{ text: "You are a professional resume writer." }],
    },
  };

  const apiUrl =
    import.meta.env.VITE_GEMINI_API_URL;

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: { "Content-Type": "application/json" },
    });

    const aiText = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiText) {
      return { error: "AI returned empty response." };
    }

    const finalText = aiText.trim();

    // Optional safety check — ensures AI followed length rules
    if (finalText.length < minLength || finalText.length > maxLength) {
      return { error: "AI could not produce text within the required length." };
    }

    // return { text: finalText };
    return finalText;
  } catch (error) {
    console.error(error);
    return { error: "AI enhancement failed." };
  }
}

// Call Groq (Llama 3) API and return optimized text
export async function enhanceTextLlama(inputText, maxLength = 800, minLength = 300) {
  if (!inputText || !inputText.trim()) {
    return { error: "Input cannot be empty." };
  }

  const trimmed = inputText.trim();

  const prompt = `
    Rewrite and enhance the following text so that the final output is 
    professional, concise, resume-ready, and strictly between 
    ${minLength} and ${maxLength} characters. 
    
    - If the text is too short, expand it meaningfully.
    - If the text is too long, summarize it intelligently.
    - Return ONLY the improved final text with no extra formatting.

    Text: "${trimmed}"
  `;

  // Payload for Groq (OpenAI-compatible format)
  const payload = {
    model: "llama3-8b-8192", // or llama3-70b-8192
    messages: [
      { role: "system", "content": "You are a professional resume writer. Return only the optimized text strictly meeting the user's criteria." },
      { role: "user", "content": prompt }
    ],
    temperature: 0.7,
  };

  const apiUrl = "https://api.groq.com/openai/v1/chat/completions";

  try {
    const response = await axios.post(apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
      },
    });

    const aiText = response?.data?.choices?.[0]?.message?.content;

    if (!aiText) {
      return { error: "AI returned empty response." };
    }

    const finalText = aiText.trim();

    return finalText;
  } catch (error) {
    console.error(error);
    return { error: "Llama AI enhancement failed." };
  }
}