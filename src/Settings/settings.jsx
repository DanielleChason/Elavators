import {Func} from '../Building/building';
import { useEffect, useState} from 'react';

export const Settings = (props) => {
    function handleClick() {
        props.handleSet();
    }

    const [allFloors, setAllFloors] = useState(document.getElementsByClassName('floorButton'));

    useEffect(() => {
      const interval = setInterval(() => {
        let tempFloors = [...allFloors];
        const toClick = tempFloors[Math.floor(Math.random() * (16 - (0) + 1)) + 0];
        toClick.click();
        setAllFloors(tempFloors);
      }, 500);
      return () => clearInterval(interval);
    },);
  

        return (
        <div>
            <div className='elevatorPeak'>
                {<Func
                    elevatorsCount={15} 
                    floorsCount={17} 
                />}
            </div>
            

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
        </div>
    )
}