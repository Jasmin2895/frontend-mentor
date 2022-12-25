import React, { useState } from "react";
import QR_CODE_COMPONENT_DETAILS from "../utils/constants";
import "./qr-code-component.css";
import qrCodeImage from "../qrCodeImages/image-qr-code.png"

// divide the QR component into preview and details component.
const QRCodeComponent = () => {
    const [qrCodeDetails] = useState(QR_CODE_COMPONENT_DETAILS)


    return (<div className="qr-code-component">
        <div className="qr-code-card">
            <img src={qrCodeImage}></img>
            <div className="qr-code-card-content">
                <h2>{qrCodeDetails.description}</h2>
                <p>Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    </div>)
}

export default QRCodeComponent;