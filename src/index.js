import ReactDOM from "react-dom/client";

// npm install bootstrap@5
import "bootstrap/dist/css/bootstrap.css";
import NameList from "./ex4_props/NameList";
import Header from "./ex4_props/Header";
import App from "./ex4_props/App";
import Counter from "./ex5_state/Counter";
import MyComponent from "./ex6-demo-lifecycle/MyComponent";
import ToggleButtun from "./ex5_state/ToggleButtun";
import HooksDemo from "./ex7_hooks/HooksDemo";
import TodoList from "./ex7_hooks/TodoList";
import ValidationForm from "./ex7_hooks/ValidationForm";
import HookFormDemo from "./ex7_hooks/HookFormDemo";
import SkillPractice from "./ex7_hooks/SkillPractice";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*root.render(
  <>
    <NameList names={["Mehrdad Javan", "Simon Elbrink", "Marcus Godmunson"]} />
    <NameList names={["Test Test", "Test2 Test2"]} />
  </>
);*/

root.render(
  <div className="container">
    <ValidationForm />
    <br/>
    <HookFormDemo />
    <br/>
    <SkillPractice />
    <br/>
  </div>
);
