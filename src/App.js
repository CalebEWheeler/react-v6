import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
    let animalList = ["Dog", "Cat"];

    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));