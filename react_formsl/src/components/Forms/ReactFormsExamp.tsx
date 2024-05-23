// useForm
import { FieldValues, useForm } from "react-hook-form"


const ReactFormsExamp = () => {

    //now we're going to use React Hook Forms
    // lets use useForm  it holds everything  so lets comment out and use register which is the name portion
    // const form = useForm()
    // console.log(form);
    const {register, handleSubmit} = useForm();
    console.log(register('name'));

    // lets make a function to see our console logs
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }

  return (
    <>
        <h1 className="text-center">Form using React Hook Forms</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          {/* notice that we are simply putting the function inside the onchange instead of making a helper function */}
          <input {...register('name')} id="name" type="text" className="form-control" />

          <label htmlFor="" className="form-label">Age</label>
          <input {...register('age')} id="age" type="text" className="form-control" />

          <button className="btn btn-primary mt-3" type="submit">Submit</button>   
        </div>
      </form>
    </>
  )
}

export default ReactFormsExamp