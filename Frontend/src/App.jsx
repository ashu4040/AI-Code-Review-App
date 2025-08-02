import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";


function App() {

  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    setReview(""); 
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL,
        { code }
      );
      setReview(response.data);
    } catch (error) {
      setReview("Error fetching review.");
    }
    setLoading(false);
  }

 return (
  <>
    <main>
      <div className="left" style={{ overflow: "auto" }}>
        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => {
              setCode(code);
              setReview(""); // Clear previous review when code changes
            }}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div onClick={reviewCode} className="review">
          Review
        </div>
      </div>

      <div className="right">
        {loading ? (
          <div className="shimmer">Please Wait</div>
        ) : !code.trim() ? (
          <div style={{ color: "#bbb", textAlign: "center" }}>
            Write code in the editor.
          </div>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        )}
      </div>
    </main>
  </>
);
}

export default App;
