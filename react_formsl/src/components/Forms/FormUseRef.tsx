// we will now see how to use useRefs instead of useStates

import { FormEvent, useRef } from "react"


const FormUseRef = () => {

    // create a useRef  and lets give it a type by doing <HTMLInputElement>
    const nameRef = useRef<HTMLInputElement>(null)

    // to hold the age we need to make a nother useRef
    const ageRef = useRef<HTMLInputElement>(null)

    // create an object to hold our values since it makes more sense to use in this case
    const person = {
        name: '',
        age: 0
    }

    //lets create a helper function to handle our onSubmit
    const handleClick = (e:FormEvent) => {
        e.preventDefault()
        console.log("Submited with our handleClick function");
        if(nameRef.current != null)
            person.name = nameRef.current.value;
        if(ageRef.current !=null)
            person.age = parseInt(ageRef.current.value);
        console.log(person);
    } 

  return (
    <>
        <h1 className="text-center">Form Using UseRef</h1>
        <form onSubmit={handleClick}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          {/* notice that we are simply putting the function inside the onchange instead of making a helper function */}
          <input ref={nameRef} id="name" type="text" className="form-control"  />

          <label htmlFor="" className="form-label">Age</label>
          <input ref={ageRef} id="age" type="text" className="form-control"  />

          <button className="btn btn-primary mt-3" type="submit">Submit</button>   
        </div>
      </form>
    </>
  )
}

export default FormUseRef