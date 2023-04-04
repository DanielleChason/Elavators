
export const Settings = (props) => {
    function handleClick() {
        props.handleSet();
    }
    
    return (
        <div className="settingsContainer">
        <div>
            <p>Elevators:
            <input 
                type="number"
                className="input"
                name="Amount of Elevators"
                min="1"
                value={props.elevatorsCount}
                onChange={(e) => props.setElevatorsCount(Number(e.target.value))}
            />
            </p>
            
        </div>
        <div>
            <p>&nbsp;&nbsp;Floors:&nbsp;&nbsp;
            <input 
                type="number"
                className="input"
                min="1"
                value={props.floorsCount}
                onChange={(e) => props.setFloorsCount(Number(e.target.value))}
            />
            </p>
 
        </div>
        <div>
            <button className='enterButton' onClick={handleClick}>
            Enter Building
            </button>
        </div>

        </div>
    )
}