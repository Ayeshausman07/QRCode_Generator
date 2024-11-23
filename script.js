
// QR Code Generation
const qrImage = document.getElementById('qrImage');
const qrBox = document.getElementById('imgBox');
const qrText = document.getElementById('qrText');

function qrGenerator() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrBox.style.opacity = 1;
        qrBox.style.transform = 'scale(1)';
    } else {
        alert("Please enter some text...");
    }
}

// Display current year in footer
document.getElementById('date').textContent = new Date().getFullYear();
