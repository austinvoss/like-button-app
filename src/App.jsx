import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [emoji, setEmoji] = useState("🤍");

  const handleClick = () => {
    setLikes(likes + 1);
    setEmoji("🩷");
  };

  return (
    <p onClick={handleClick}>
      {emoji} {likes > 0 ? likes : ""}
    </p>
  );
}

export default App;
