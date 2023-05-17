import '../style/Style.css'

function Block({number}) {
    return (
        <div className="block">
            <h1>{number}</h1>
        </div>
    );
}

export default Block;