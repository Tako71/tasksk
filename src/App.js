import "./style/Style.css";
import Head from "./components/panel/Head";
import Left from "./components/panel/Left";
import Center from "./components/panel/Center";
import Right from "./components/panel/Right";
import Bottom from "./components/panel/Bottom";

function App() {
    return (
        <div className="screen">
            <Head/>
            <div className="center__block">
                <Left/>
                <Center/>
                <Right/>
            </div>
            <Bottom/>
        </div>
    );
}

export default App;
