import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import {z} from "zod";



  // we are going to use zod now for validation
  const schema = z.object({
    name: z.string().min(3),
    age: z.number().min(21)
  })

  // // lets make an interface to hold our data
  // this is the new way to set up our interface with zod
  type FormData = z.infer<typeof schema>

  // we will comment this one out since its not how we will use interfaces with zod
  // this interface is for react interfaces instead of zod
  // interface FormData {
  //   name: string,
  //   age: number
  // }


const FormValidationZod = () => {

    
    // in order to see just the errors we can destructure the formState  see below
    const {register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)});

    console.log(errors);

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
          <input {...register('name', )} id="name" type="text" className="form-control" />
          {/* lets add our errors here */}
          {/* notice that && is similar to the turnery that is just below it but only for rendering null if false */}
          {errors.name && <p className="text-danger">{}</p>}
          
          <label htmlFor="" className="form-label">Age</label>
          <input {...register('age', )} id="age" type="text" className="form-control" />
          {errors.age ? <p className="text-danger">The age field is required</p> : null}
          <button className="btn btn-primary mt-3" type="submit">Submit</button>   
        </div>
      </form>
    </>
  )
}

export default FormValidationZod