import { FormEvent, useState } from "react";

const FormUseState = () => {

  // we will need a useState to handle our form (like a variable)
  // ourState will need to handle an object.  person object that will have a name and age  notice how down belowe we initialized it already
  const [person, setPerson] = useState({
    name: '',
    age: 0.00
  })

  // now we need to create a helper function to handle our on submit from our form and use the even in it
  // when dealing with typescript the event type has to be specified in this case as a FormEvent  see that e:FormEvent  is using the internal interface that react has instead of what we make with our own types with the todo

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    console.log(person);
  }

  return (
    <>
      <h1 className="text-center">Form using UseState</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          {/* notice that we are simply putting the function inside the onchange instead of making a helper function */}
          <input id="name" type="text" className="form-control" onChange={(e) => setPerson({...person,name:e.target.value})} />

          <label htmlFor="" className="form-label">Age</label>
          <input id="age" type="text" className="form-control" onChange={(e) => setPerson({...person,age:parseFloat(e.target.value)})} />

          <button className="btn btn-primary mt-3" type="submit">Submit</button>   
        </div>
      </form>
    </>
  );
};

export default FormUseState;
