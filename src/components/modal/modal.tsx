import {component$, Slot, useStylesScoped$, } from "@builder.io/qwik";
import ModalSylyes from "./modal.css?inline"
import type { PropFunction } from "@builder.io/qwik";

interface ModalProps {
    size: 'sm' | 'lg',
    frosted?: boolean,
    close: PropFunction<() => void>,
}

export default component$((props: ModalProps) => {

    useStylesScoped$(ModalSylyes)
    return(
        <div class={`modal ${props.size} ${props.frosted && 'frosted'}`  }>
            <div class= "modal-content">
                <div class="close" onClick$={props.close}>close</div>
                <main class="main-content">
                    <Slot name="content"/>
                </main>
                <footer>
                    <Slot name="footer"/>
                </footer>
            </div>
        </div>
    )
})