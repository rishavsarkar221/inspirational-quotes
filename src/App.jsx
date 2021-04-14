import React, { useEffect, useRef } from "react";
import "./index.css";

export default function App() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
      videoEl.current.removeAttribute("controls")
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="App">
      <h1>Haha You are rickrolled! You cant escape. It will play on loop. Video has no controls. Suffer.</h1>
      <div>
        <video
            style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
            playsInline
            muted
            controls
            loop
            alt="RELOAD TO SEE THE VIDEO"
            src="https://ia801602.us.archive.org/11/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.ogv"
            ref={videoEl}
        />
      </div>
    </div>
  );
}