import { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [emoji, setEmoji] = useState("🤍");
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setLikes(likes + 1);
    setEmoji("🩷");
    setIsClicked(true);
  };

  return (
    <p onClick={handleClick} className={isClicked ? "clicked" : ""}>
      {emoji} {likes}
    </p>
  );
}

export default App;
