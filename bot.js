const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");
dotenv.config({
  path: "./.env",
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(UserText) {
  if (UserText === "/chatbot") {
    return "Chatbot mode activated. Please enter your commands.";
  } else if (UserText === "/exit") {
    return "Exiting Chatbot mode. Goodbye!";
  } else {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    console.log(UserText);
    const prompt = UserText;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
}

module.exports = run;

(chat) => chat.name === "SY IT 2022-23(Unofficial)";
