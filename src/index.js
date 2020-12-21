import React from "react";
import ReactDOM from "react-dom";
import { HookApp } from "./HookApp";
import { CounterApp } from "./components/01-Use-State/CounterApp";
import { CounterWithCustomHook } from "./components/01-Use-State/CounterWithCustomHook";
import { SimpleForm } from "./components/02-useEffect/SimpleForm";


ReactDOM.render(
  <SimpleForm className="container" />,
  document.getElementById('root'),
);
