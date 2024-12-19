import { useState } from "react";
import { Greet } from "../wailsjs/go/main/App";
import { main } from "../wailsjs/go/models";
import { Button } from "./components/ui/button";

function App() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function generate() {
    const t = main.Person.createFrom({
      name: "Peter",
      age: 27,
      address: {
        street: "123 Main St",
        postcode: "12345",
      },
    });
    Greet(t).then(updateResultText);
  }

  return (
    <div id="App">
      <div className="w-screen h-screen bg-slate-200"></div>
    </div>
  );
}

export default App;
