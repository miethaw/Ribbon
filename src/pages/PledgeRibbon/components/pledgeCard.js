import React from "react";

export const PledgeCard = ({recipientName,senderName,message, media}) => {
    return (
        <div style={{ marginTop: '10%', marginLeft: '3%', position:(media.tablet || media.desktop) && 'fixed' }}>
            <div style={{margin: 'auto', width: 200}}>
            <img src="./assets/images/cards/black.png" alt="ribbons" style={{ width: 200, height: 250, borderRadius: 15 }} />
            <div style={{padding: 20, marginTop: -200, color: 'white', fontWeight: 500, fontSize: 12, textAlign: 'left'}}>
                <div>{recipientName}</div><br/>
                <div>{message}</div><br/>
                {senderName && <div>Love, {senderName}</div>}
            </div>
            </div>
        </div>
    )
}