import { useState } from "react";

function InputRealtime() {
    const [name, setName] = useState();
    const [radio , setRadio] = useState()

    function HandleName(event) {
        setName(event.target.value)
    }
    return (<div>
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" value={name} onChange={HandleName} />
        <p>Name: {name}</p>

        
    </div>)
}

export default InputRealtime ;