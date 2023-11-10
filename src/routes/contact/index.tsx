import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline"

export default component$(()  => {
     useStylesScoped$(ContactStyles)

     const formVisible = useSignal(false)
     const formState = useStore({name: "", date: "", email: "", ticketno: "", airplaneno: "", 
           arrivetime: "", departtime: "", delay: "", reason: "", message: "" })

      return(

        <article>
            <h2>Flight Details</h2>
            <p>
                Please click the button below to register your flight details.
            </p>

            <button onClick$={() => formVisible.value = true}>Flight Details</button>

          {formVisible.value && (
          <form preventdefault:submit onSubmit$={() => {
          console.log(formState.name, formState.email, formState.date, formState.ticketno, formState.departtime,
                     formState.arrivetime, formState.airplaneno, formState.delay, formState.reason, formState.message)
          formState.name = ""
          formState.email = ""
          formState.ticketno = ""
          formState.airplaneno = ""
          formState.date = ""
          formState.departtime = ""
          formState.arrivetime = ""
          formState.reason = ""
          formState.message = ""
          formState.delay = ""
        }}>
          <div class= "Details">
            <label for="">
            <span>Your Name</span>
            <input 
                 value= {formState.name}
                 type= "text"
                 onInput$={(e) => formState.name = (e.target as HTMLInputElement).value}
                 required 
            />
             </label>

            <label for="">
            <span>Date</span>
            <input 
                 value= {formState.date}
                 type= "date"
                 onInput$={(e) => formState.date = (e.target as HTMLInputElement).value}
                 required 
            />
            </label>
            
            
            <label for="">
              <span>Email</span>
              <input 
              value= {formState.email}
              type="email" 
              onInput$={(e) => formState.email = (e.target as HTMLInputElement).value}
              required
              />
            </label>

            <label for="">
            <span>Airplane No</span>
            <input 
                 value= {formState.airplaneno}
                 type= "text"
                 onInput$={(e) => formState.ticketno = (e.target as HTMLInputElement).value}
                 required 
            />
            </label>

            <label for="">
            <span>Ticket No</span>
            <input 
                 value= {formState.ticketno}
                 type= "text"
                 onInput$={(e) => formState.ticketno = (e.target as HTMLInputElement).value}
                 required 
            />
            </label>

            <label for="">
            <span>Departure Time</span>
            <input 
                 value= {formState.departtime}
                 type= "time"
                 onInput$={(e) => formState.departtime = (e.target as HTMLInputElement).value}
                 required 
            />
            </label>

            <label for="">
            <span>Arrival Time</span>
            <input 
                 value= {formState.arrivetime}
                 type= "time"
                 onInput$={(e) => formState.arrivetime = (e.target as HTMLInputElement).value}
                 required 
            />
            </label>
             
            <label for="">
            <span>Delay Duration</span>
            <input 
                 value= {formState.delay}
                 type= "text"
                 onInput$={(e) => formState.delay = (e.target as HTMLInputElement).value}
                 required 
            />
            </label>
             
            
            <label for="">
            <span>Reason For Delay</span>
            <textarea 
            value={formState.reason}
            onInput$={(e) => formState.reason = (e.target as HTMLInputElement).value} 
            required
            ></textarea>
          </label>

          <label for="">
            <span>Remarks</span>
            <textarea 
            value={formState.message}
            onInput$={(e) => formState.message = (e.target as HTMLInputElement).value} 
            required
            ></textarea>
          </label>
        </div>
          

          <button>Submit</button>

          <p>
            {formState.name}
          </p>
          <p>
            {formState.airplaneno}
          </p>
          <p>
            {formState.message}
          </p>
          <p>
            {formState.ticketno}
          </p>
          <p>
            {formState.email}
          </p>
          <p>
            {formState.date}
          </p>
          <p>
            {formState.reason}
          </p>
        </form>
         )}
        </article>
      )

})