// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input placeholder="Enter Password" type="password" onChange={(e) => console.log('Entering password...')}></input>
        </div>
    )
}

export default Keypad;