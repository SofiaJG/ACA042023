// script.js
const images = document.querySelectorAll('#gallery img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = image.src;
        link.download = image.alt;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const image = document.querySelectorAll('.gallery-item img')[index];
    const link = document.createElement('a');
    link.href = image.src;
    link.download = image.alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

