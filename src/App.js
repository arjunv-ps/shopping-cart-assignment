import React, { useState } from "react";

export default function App() {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}
