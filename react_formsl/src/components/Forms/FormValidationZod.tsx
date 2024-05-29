import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import {z} from "zod";



  // we are going to use zod now for validation
  const schema = z.object({

    // for standard error message we do this
    //name: z.string().min(3),
    // to have a custom message we do this
    name: z.string().min(3, {message: "Name must be at least 3 characters bruh!"}),
    //for standard age message
    age: z.number().min(21)
    // for custom age message
    // age: z.number({invalid_type_error: "Age field is required"}).min(21, {message: "You must be 21 to continue"})
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
    // now lets see how it is for making sure its valid too
    const {register, handleSubmit, formState:{errors,isValid}} = useForm<FormData>({resolver:zodResolver(schema)});

    console.log(errors);

    // lets make a function to see our console logs
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }

  return (
    <>
        <h1 className="text-center">React Forms Validation with Zod</h1>
      <form onSubmit={handleSubmit(onHelpSubmit)}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          
          <input {...register('name', )} id="name" type="text" className="form-control" />
          {/* lets add our errors here */}
          {/* notice that && is similar to the turnery that is just below it but only for rendering null if false */}
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          
          <label htmlFor="" className="form-label">Age</label>
          {/* notice that we have to add valueAsNumber: true so that our input is made to be a number instead the standar string */}
          <input {...register('age', {valueAsNumber: true})} id="age" type="number" className="form-control" />
          {errors.age ? <p className="text-danger">{errors.age.message}</p> : null}

          {/* now lets add the validation to this button */}
          <button disabled={!isValid} className="btn btn-primary mt-3" type="submit">Submit</button>   
        </div>
      </form>
    </>
  )
}

export default FormValidationZod