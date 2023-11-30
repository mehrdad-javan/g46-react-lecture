import ReactDOM from "react-dom/client";

// npm install bootstrap@5
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex4_props/NameList";
import Header from "./ex4_props/Header";
import App from "./ex4_props/App";
import Counter from "./ex5_state/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*root.render(
  <>
    <NameList names={["Mehrdad Javan", "Simon Elbrink", "Marcus Godmunson"]} />
    <NameList names={["Test Test", "Test2 Test2"]} />
  </>
);*/

root.render(
    <Counter />
  );
