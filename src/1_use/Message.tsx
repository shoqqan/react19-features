import React, {use} from "react"

interface MessageProps {
    show: boolean
}

const messagePromise = async () => {
    return new Promise<string>((res) => setTimeout(res, 1000, "Hello World"))
}
export const Message: React.FC<MessageProps> = ({show}) => {
    let message = ""
    if (show) {
        message = use(messagePromise())
    }
    return (
        <div>
            {message}
        </div>
    );
};

