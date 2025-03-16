const qrImg = document.getElementById('qrImg');

const generateQRCode = () => {
    const qrTextInput = document.getElementById('qrTextInput').value;

    if (!qrTextInput || qrTextInput.trim() === '') {
        alert('Please enter a text or URL to generate QR code.');
    }
    else {
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(qrTextInput)}`;
        qrImg.style.display = 'block';
        document.getElementById('downloadBtn').style.display = 'block';
    }
};

const downloadQRCode = () => {

    const qrTextInput = document.getElementById('qrTextInput').value;

    if (!qrImg.src || qrImg.style.display === 'none') {
        alert('Please generate a QR code first.');
        return;
    }

    fetch(qrImg.src)
    .then(res => res.blob())
    .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${qrTextInput}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    .catch(err => {
        console.error(`Error downloading QR code: ${err}`);
    });
};