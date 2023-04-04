import React from 'react'
import classes from "./Notification.module.css"
import { useSelector } from 'react-redux'

export default function Notification() {
    const notify = useSelector(state => state.ui)
    let bg = "red";
    if (notify.notificationBg === "brown") {
        bg = "brown";
    }
    else if (notify.notificationBg === "green") {
        bg = "green";
    }
    return (
        <div className={`${classes.notification} ${(bg === "green") ? classes.green : (bg === "brown") ? classes.brown : classes.red} `}>
            <p>{notify.notificationMsg1}</p>
            <p>{notify.notificationMsg2}</p>
        </div>
    )
}
