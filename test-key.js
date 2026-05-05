const { GoogleGenerativeAI } = require("@google/generative-ai");

async function main() {
  const b64Key = "QUl6YVN5QS1weThfNmxxaldDb21CVlFmR1lBc0pUQkxkd19yWEJz";
  const apiKey = Buffer.from(b64Key, 'base64').toString();
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
    const models = await genAI.getGenerativeModel({ model: "gemini-flash-latest" }).generateContent("hello");
    console.log("TEST SUCCESSFUL! The API key allowed the request without a Referrer. This means RESTRICTIONS ARE NOT ACTIVE YET.");
  } catch(e) {
    if (e.message.includes("API_KEY_HTTP_REFERRER_BLOCKED")) {
      console.log("TEST SUCCESSFUL! The API key blocked the request because it didn't come from your website. RESTRICTIONS ARE ACTIVE!");
    } else {
      console.error("FAILED with unknown error:", e.message);
    }
  }
  
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    const data = await res.json();
    console.log("AVAILABLE MODELS:", data.models?.map(m => m.name));
  } catch(e) {
    console.error("List models failed", e);
  }
}

main();
