import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline"

export default component$(()  => {
     useStylesScoped$(ContactStyles)

     const formVisible = useSignal(false)
     const formState = useStore({name: "", message: "" })

      return(

        <article>
            <h2>Contact</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quaerat in perferendis molestiae, odit aperiam voluptate veniam 
                doloremque provident nulla optio, laborum quas, tempore est doloribus. Rerum aperiam cumque quod!
            </p>

            <button onClick$={() => formVisible.value = true}>Contact Me</button>

            {formVisible.value && (
        <form preventdefault:submit onSubmit$={() => {
          console.log(formState.name, formState.message)
          formState.name = ""
          formState.message = ""
        }}>
          <label for="">
            <span>Your Name</span>
            <input 
                 value= {formState.name}
                 type= "text"
                  onInput$={(e) => formState.name = (e.target as HTMLInputElement).value} 
            />
            
          </label>

          <label for="">
            <span>Your Message</span>
            <textarea 
            value={formState.message}
            onInput$={(e) => formState.message = (e.target as HTMLInputElement).value} 
            ></textarea>
          </label>
          <button>Send</button>

          <p>
            {formState.name}
          </p>
          <p>
            {formState.message}
          </p>
        </form>
         )}
        </article>
      )

})