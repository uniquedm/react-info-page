import React from "react"
import ReactDOM from "react-dom/client"

function SampleComponent() {
  return (
    <>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SampleComponent />);