import {FieldValues, useForm} from "react-hook-form"

const ReactFormsExamp = () => {
//form state coming from UseForm
    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log(errors);

//lets create a helper function
// && is another way for a turneray operator. i
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);

    }
  return (




    <>

      <h1 className="text-center">Form Using React Hook Forms</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)
    }>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form label">Name</label>
          <input {...register('name',{required:true,minLength: 3})} type="name" className="form-control" />
          {errors.name?.type ==='required' && <p className="text-danger"> The name field is required</p>}
          {errors.name?.type ==='minLength' ? <p className="text-danger"> The name must be more than 3 characters long</p>: null}
          <label htmlFor="" className="form label">Age</label>
          <input {...register('age', {required: true,minLength: 1})} type="age" className="form-control" />
          {errors.age?.type ==='required' ? <p className="text-danger"> The age field is required</p>: null}
        <button className= "btn btn-primary" type="submit">Submit</button>
        </div>
      </form>

    </>




  )
}

export default ReactFormsExamp