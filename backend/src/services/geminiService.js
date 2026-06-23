import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const categorizeTransactions = async (csvString) => {
  const prompt = `
    Here are raw bank transactions from a CSV file:
    ${csvString}

    Return a JSON array where each transaction has exactly these fields:
    - type (string, either "income" or "expense")
    - amount (number, positive for income negative for expense)
    - category (string, if an expense on of - Food , Transport , Bills , Shopping , Health , Other : if an income on of - Salary , Freelance , Business , Other)
    - description (string, default = "")
    - date (Date, format YYYY-MM-DD)
    
    Return only valid JSON array, no explanation, no markdown backticks.
  `;

  const result = await model.generateContent(prompt);
  const text = result.response.text();
  return JSON.parse(text);
};
