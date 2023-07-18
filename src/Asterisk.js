import React from "react";

const Asterisk = () => {
  const stairs = 15;
  const pyramid = [];
  for (let r = 1; r <= stairs; r++) {
    let line = " ";
    for (let j = 1; j <= stairs - r; j++) {
      line += " ";
    }
    for (let k = 1; k <= 2 * r - 1; k++) {
      line += "*";
    }
    pyramid.push(line);
  }
  return (
    <div className="pyramidd">
      {pyramid.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Asterisk;
