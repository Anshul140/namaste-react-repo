
// creating React element
const heading1 = React.createElement(
    "h2", 
    {class: "react-heading-id-1"}, 
    "Hello World 1... Injected from React!"
)

const heading2 = React.createElement(
    "h2", 
    {class: "react-heading-id-2"}, 
    "Hello World 2... Injected from React!"
)

/*
<div id = "parent">
   <div id="child-1">
      <h2>Hello World 1... Injected from React!</h2>
      <h2>Hello World 2... Injected from React!</h2>
    </div>
    <div id="child-2">
      <h2>Hello World 1... Injected from React!</h2>
      <h2>Hello World 2... Injected from React!</h2>
    </div>
</div>
*/

// create above nested structures using createElement
const nestedStructure = React.createElement("div", {id: "parent"},
        [
            React.createElement("div", {id: "child-1"}, [heading1, heading2]),
            React.createElement("div", {id: "child-2"}, [heading1, heading2])
        ]
)


console.log(nestedStructure)

// React always needs root element to do all DOM manipulations
const root = ReactDOM.createRoot(document.getElementById("root"))

// method to inject html content via react
root.render(nestedStructure)