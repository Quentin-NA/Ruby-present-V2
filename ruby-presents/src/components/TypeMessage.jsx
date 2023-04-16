import React, { useEffect, useState } from "react";

function TypeMessage() {
  const [message, setMessage] = useState("En train d'écrire");
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (dots) {
        case "":
          setDots(".");
          break;
        case ".":
          setDots("..");
          break;
        case "..":
          setDots("...");
          break;
        case "...":
          setDots("");
          break;
        default:
          setDots("");
          break;
      }
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  return (
    <span>
      {message}
      {dots}
    </span>
  );
}

export default TypeMessage;
