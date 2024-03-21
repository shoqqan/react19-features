import {FC} from "react";

export const Form: FC = () => {
    const formActionHandler = async (formData) => {
        console.log(formData.get("name"))
        console.log(formData.get("email"))
    }
    return (
        <form action={formActionHandler}>
            <label>Form</label>
            <input type="text" name="name"/>
            <input type="text" name="email"/>
            <button>Submit</button>
        </form>
    );
};

