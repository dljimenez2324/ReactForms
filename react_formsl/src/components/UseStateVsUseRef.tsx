import { useRef, useState } from "react";


const UseStateVsUseRef = () => {

    //useState
    const [count, setCount] = useState(0);
    // useRef
    const countRef = useRef(0);

    // create a helper function to handle our Increment
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        console.log ('from useState ', count)

        countRef.current++;
        console.log('from countRef ',countRef.current)
    }

  return (
    <>
        <h1 className="text-center">UseState VS UseRef</h1>
        <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
        <div>
            <span>
                Counter from useState: {count}
            </span>
        </div>
        <div>
            <span>Count from useRef: {countRef.current}</span>
        </div>
    </>
  )
}

export default UseStateVsUseRef