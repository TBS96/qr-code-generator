const generateQRCode = () => {
    const qrTextInput = document.getElementById('qrTextInput').value;
    const qrImg = document.getElementById('qrImg');

    if (!qrTextInput || qrTextInput.trim() === '') {
        alert('Please enter a text or URL to generate QR code.');
    }
    else {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(qrTextInput)}`;
        qrImg.style.display = 'block';
    }
};

// TODO: Add a btn to download the qr code in jpg/png format