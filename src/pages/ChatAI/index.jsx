import { useState } from "react";
import NavDashboard from "../../components/NavDashboard";
import OpenAI from "openai";
import "./ChatAI.css";
import { Link } from "react-router-dom";
import LoaderWhite from "../../components/LoaderWhite";

const ChatAI = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_OPENAI,
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await openai.completions.create({
      prompt: input,
      model: "text-davinci-003",
      max_tokens: 1000,
    });

    setOutput(res.choices[0].text);
    setIsLoading(false);
  };

  return (
    <>
      <NavDashboard />
      <div className="container text-center">
        <h1 className="text-center pt-3 title-chat">Chat AI</h1>
        <p className="text-center py-2 paragrap-chat">
          <strong>Ask anything about your money management</strong>
        </p>
        <Link to={"/"} className="back-home">
          <strong>Back to Home</strong>
        </Link>
        <div className="container parent-chat mt-5 rounded shadow">
          <form onSubmit={handleSubmit} className="py-5">
            <textarea
              placeholder="input your question here..."
              className="form-control container input-area"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div>
              <button type="submit" className="btn btn-outline-light my-3 ">
                Generate
              </button>
              {isLoading && <LoaderWhite />}
            </div>
          </form>
          <div className="container  pb-5 text-start text-white">{output}</div>
        </div>
      </div>
    </>
  );
};

export default ChatAI;
