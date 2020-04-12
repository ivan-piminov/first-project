import React from "react";
import b from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/State";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={b.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div> <textarea placeholder="Enter your message"
                                    onChange={onNewMessageChange}
                                    value={newMessageBody}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> Send</button>
                    </div>

                </div>
            </div>
        </div>

    )
};
export default Dialogs;


