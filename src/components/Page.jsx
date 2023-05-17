import axios from "axios";
import {useEffect, useState} from "react";
import "../style/Style.css"

function Page({id}) {

    const [data, setData] = useState({})
    useEffect(()=>{
        fetchData(id, setData)
        console.log(data)
    },[])

    return (
        <div className='data'>
            <div className= 'data__content'>
                <p>ID:</p>
                <p>{data.id}</p>
            </div>
            <div className="data__content">
                <p>useId:</p>
                <p>{data.userId}</p>
            </div>
        </div>
    )
}

async function fetchData(id, setData) {
    const url = "https://jsonplaceholder.typicode.com/albums/" + id
    const response = await axios.get(url)
    setData(response.data)
}

export default Page;