import React from "react";
import b from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={b.dialogs}>
            <div className={b.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={b.messages}>
                {messagesElements}
            </div>
        </div>

    )
};
export default Dialogs;


