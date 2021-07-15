import {useState} from "react";

import Button from "./components/Button";

function App() {
    const [output, setOutput] = useState(0)

    // Add a number to the screen
    const addNumber = (numberToAdd) => setOutput(output * 10 + numberToAdd)

    // Delete last number inputted

    const tempFunc = () => {
        console.log('temp')
    }

    return (
        <div className="Calculator">
            <div className='header'>Header</div>
            <div className='screen'>{output}</div>
            <div className='btn-panel'>
                <div className='btn-row'>
                    <Button value={7} func={addNumber}/>
                    <Button value={8} func={addNumber}/>
                    <Button value={9} func={addNumber}/>
                    <Button value={'DEL'} func={tempFunc}/>
                </div>
                <div className='btn-row'>
                    <Button value={4} func={addNumber}/>
                    <Button value={5} func={addNumber}/>
                    <Button value={6} func={addNumber}/>
                    <Button value={'+'} func={tempFunc}/>
                </div>
                <div className='btn-row'>
                    <Button value={1} func={addNumber}/>
                    <Button value={2} func={addNumber}/>
                    <Button value={3} func={addNumber}/>
                    <Button value={'-'} func={tempFunc}/>
                </div>
                <div className='btn-row'>
                    <Button value={'.'} func={tempFunc}/>
                    <Button value={0} func={addNumber}/>
                    <Button value={'/'} func={tempFunc}/>
                    <Button value={'x'} func={tempFunc}/>
                </div>
                <div className='btn-row'>
                    <Button value={'RESET'} func={tempFunc}/>
                    <Button value={'='} func={tempFunc}/>
                </div>
            </div>
        </div>
    );
}

export default App;
