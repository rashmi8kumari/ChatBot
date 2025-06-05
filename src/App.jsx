import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("")

  async function generateAnswer() {
    setAnswer("loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB7DRP5Ov3Ayq-f5MzPmJsxwAQkewiiyOU",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      },
    });
    console.log(
      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"])
    );
  }

  return (
    <>
      <h1 className="bg-red-300">Chat AI</h1>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={generateAnswer}>Generate answer</button>
      <pre>{answer}</pre>
    </>
  );
}

export default App;
