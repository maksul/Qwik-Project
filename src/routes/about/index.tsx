import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import AboutStyles from './about.css?inline'
import Modal from "~/components/modal/modal";

export default component$(()  => {

    useStyles$(AboutStyles)

    const modalVisible = useSignal(false)
    const closeModal = $(() =>{
        modalVisible.value = false
    })
      return(

        <article>
            <h2>About</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quaerat in perferendis molestiae, odit aperiam voluptate veniam 
                doloremque provident nulla optio, laborum quas, tempore est doloribus. Rerum aperiam cumque quod!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quaerat in perferendis molestiae, odit aperiam voluptate veniam 
                doloremque provident nulla optio, laborum quas, tempore est doloribus. Rerum aperiam cumque quod!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quaerat in perferendis molestiae, odit aperiam voluptate veniam 
                doloremque provident nulla optio, laborum quas, tempore est doloribus. Rerum aperiam cumque quod!
            </p>

            <button onClick$={()  => modalVisible.value = true }>Open modal</button>

            {modalVisible.value && (
                <Modal size="sm" frosted={true} close={closeModal}>
                    <div q:slot="content">
                    <h2>Great news!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit mollitia doloribus nisi consequatur quo illo cumque 
                        iste sunt explicabo, distinctio iure excepturi accusamus dolorem impedit vero tempore magni hic quisquam?
                        </p>
                    </div>

                    <div q:slot="footer">
                          <button>Sign Up Now</button>
                    </div>
                    
                        
                </Modal>
            )}
        </article>
      )

})