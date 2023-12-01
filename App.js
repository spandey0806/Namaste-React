/* <div id ="parent">
    <div id ="child">
        <h1>I am in H1 tag</h1>

    </div>

</div> */


// ReactElement (Object) => HTML Browser Understands

const heading = React.createElement(
    'div',
    {id :"parent"},
    React.createElement('div' ,{ id : "chiild"} , [React.createElement('h1',{id:'heading1'}, "I am h1 tag") ,React.createElement('h2',{id:'heading2'}, "I am h2 tag")])
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);