
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMedicalResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are a helpful and compassionate medical assistant for Nova Medical Campus. 
        Provide general health information and guidance about our hospital's departments (Cardiology, Neurology, Pediatrics, Orthopedics, Oncology). 
        Always include a disclaimer that you are an AI and the user should consult a real doctor for medical emergencies.
        Keep answers concise, reassuring, and professional.`,
        temperature: 0.7,
      },
    });
    // Access the text property directly, do not call as a method
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please contact our 24/7 support line for immediate assistance.";
  }
};
