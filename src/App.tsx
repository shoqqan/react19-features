import './App.css'
import {MessageToggler} from "./1_use/MessageToggler.tsx";
import {UserInfo} from "./1_use/Users.tsx";
import {ThemeExample} from "./1_use/Theme.tsx";
import {FormStatus} from "./2_forms/FormStatus.tsx";
import {Form} from "./2_forms/Form.tsx";
import {FormQuiz} from "./2_forms/FormState.tsx";

function App() {

    return (
        <div>
            {/*<title>Hello</title>*/}
            {/*<meta name={'description'}/>*/}
            {/*<MessageToggler/>*/}
            {/*<UserInfo/>*/}
            {/*<ThemeExample/>*/}
            {/*<Form/>*/}
            {/*<FormStatus/>*/}
            <FormQuiz/>
        </div>
    )
}

export default App
