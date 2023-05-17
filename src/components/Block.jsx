import '../style/Style.css'
import Page from "./Page";

function Block({number}) {
    return (
        <div className="block">
            <Page id = {number}/>
        </div>
    );
}

export default Block;