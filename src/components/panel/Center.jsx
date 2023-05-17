import Block from "../Block";

function Center() {

    const data = fetchData()

    return (
        <div className="center">
            {data.map((value) => {
                return <Block number={value}/>
            })}
        </div>
    );


}

function fetchData() {

    let data = []
    const limit = 48
    for (let i = 1; i <= limit; i++) {
        data.push(i)
    }
    return data
}

export default Center;