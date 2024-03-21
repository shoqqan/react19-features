import React, {Suspense, useState} from 'react';
import {Message} from "./Message.tsx";


export const MessageToggler: React.FC = () => {
    const [showMessage, setShowMessage] = useState(false)
    return (
        <div>
            <button onClick={() => {
                setShowMessage(!showMessage)
            }}>show/hide message
            </button>
            <Suspense fallback={<p>Waiting for message</p>}>
                <Message show={showMessage}/>
            </Suspense>
        </div>
    );
};

