 
import { useState } from "react";
import "./App.css";

const memes = [
  {
    id: 1,
    name: "Drake",
    image: "/memes/dark.jpg",
  },
  {
    id: 2,
    name: "Distracted Boyfriend",
    image: "/memes/distracted-boyfriend.jpg",
  },
  {
    id: 3,
    name: "Two Buttons",
    image: "/memes/two-buttons.jpg",
  },
  {
    id: 4,
    name: "Change My Mind",
    image: "/memes/change-my-mind.jpg",
  },
];

function App() {
  const [selectedMeme, setSelectedMeme] = useState(memes[0]);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  return (
    <div className="app">
      <header className="header">
        <h1>  Meme Generator</h1>
        <p>Create memes in seconds.</p>
      </header>

      <main className="container">
        <section className="templates">
          <h2>Choose a Template</h2>

          <div className="meme-grid">
            {memes.map((meme) => (
              <button
                className={`meme-card ${
                  selectedMeme.id === meme.id ? "active" : ""
                }`}
                key={meme.id}
                onClick={() => setSelectedMeme(meme)}
              >
                <img src={meme.image} alt={meme.name} />
                <span>{meme.name}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="editor">
          <div className="preview">
            <img src={selectedMeme.image} alt={selectedMeme.name} />

            {topText && <div className="top-text">{topText}</div>}

            {bottomText && (
              <div className="bottom-text">{bottomText}</div>
            )}
          </div>

          <div className="controls">
            <h2>Customize</h2>

            <label>Top Text</label>
            <input
              type="text"
              placeholder="Enter top text..."
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
            />

            <label>Bottom Text</label>
            <input
              type="text"
              placeholder="Enter bottom text..."
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
            />

            <button
              className="clear-button"
              onClick={() => {
                setTopText("");
                setBottomText("");
              }}
            >
              Clear Text
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
 
