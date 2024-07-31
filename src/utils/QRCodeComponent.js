import React, { useRef } from 'react';
import { QRCode } from 'react-qrcode-logo';

const QRCodeComponent = ({ url }) => {
    const qrRef = useRef();

    const downloadQRCode = () => {
        const canvas = qrRef.current.querySelector('canvas');
        const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Scan the QR code to visit my website</h1>
            <div ref={qrRef}>
                <QRCode
                    value={url}
                    size={256}
                    bgColor={"#ffffff"}
                    fgColor={"#000000"}
                    level={"L"}
                    includeMargin={true}
                />
            </div>
            <button onClick={downloadQRCode} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
                Download QR Code
            </button>
        </div>
    );
};

export default QRCodeComponent;
