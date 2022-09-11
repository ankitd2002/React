import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/id/1/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
