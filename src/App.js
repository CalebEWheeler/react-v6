import ReactDOM from 'react-dom';
import Pet from "./Pet";

const App = () => {
    let animal = ["Dog"];

    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Vinny" animal={animal[0]} breed="Canaan Dog" />
            <Pet name="Raylee" animal={animal[0]} breed="Flat Coated Retriever" />
            <Pet name="Sadie" animal={animal[0]} breed="Labrodor Retriever" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));