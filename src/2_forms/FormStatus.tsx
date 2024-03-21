import {delay} from "../helpers/delay.ts";
import {useFormStatus} from "react-dom"
import {useRef} from "react";

export const FormStatus = () => {
    const formRef = useRef()
    const formActionHandler = async () => {
        await delay(3000)
        formRef.current?.reset()
    }
    return (
        <form action={formActionHandler} ref={formRef}>
            <label>Form Status</label>
            <FormControls/>
        </form>

    );
};

const FormControls = () => {
    const {pending, data, method, action} = useFormStatus()
    console.log(pending)
    console.log(data)
    console.log(method)
    console.log(action)
    return (
        <>
            <input type="text" name="name"/>
            <button disabled={pending}>Submit</button>
        </>
    )
}

