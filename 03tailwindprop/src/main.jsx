import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./component/card.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Card
      username={"Radha Krishn"}
      role={"World Developer"}
      imgUrl={
        "https://th.bing.com/th/id/OIP.IOgBkxmrkVYMYoeWQ6vCcAHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7"
      }
    />
    ,
    <Card
      username={"Radha Krishn"}
      role={"World Developer"}
      imgUrl={
        "https://th.bing.com/th/id/OIP.IOgBkxmrkVYMYoeWQ6vCcAHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7"
      }
    />
  </>
);
