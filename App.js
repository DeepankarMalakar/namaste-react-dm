const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
console.log(heading);    // returns an object


// Nested divs
{/* <div id="parent">
    <div id="child">
        <h1 id="firstHeading">Hello, I am h1 inside divs</h1>
        <h2 id="secondHeading">Hello, I am sibling of h1 and inside divs</h2>
    </div>
</div> */}

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", { id: "firstHeading" }, "Hello, I am h1 inside divs")], [React.createElement("h2", { id: "secondHeading" }, "Hello, I am sibling of h1 and inside divs")]));

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);