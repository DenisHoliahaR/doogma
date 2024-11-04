import { addImage } from "./helpers/addImage";
import { addImageWithOffscreenScaling } from "./helpers/addImageWithOffscreenScalin";
import { adjustWrapperSize } from "./helpers/adjustWrapperSize";
import { isValidImageUrl } from "./helpers/isValidImageUrl";
import { scaleImageDirectly } from "./helpers/scaleImageDirectly";
import { scaleImageWithSmoothing } from "./helpers/scaleImageWithSmoothing";
import { setProperSizes } from "./helpers/setProperSizes";

const canvas = new fabric.Canvas('image__canvas');
const wrapper = document.querySelector('.wrapper');
const slider = document.querySelector('.slider');

const images = [
    'https://screendoogmacom.s3.amazonaws.com/abc/oreo.com.oreoid-0m2j6s0y88i-screen.png',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649'
]

let currentImageIndex = 0;
let currentOption = 'simple';
let cachedImage = null;

setProperSizes(wrapper, canvas);
loadImage(images[currentImageIndex]);

function loadImage(url) {
    addImage(canvas, url, (fabricImg) => {
        cachedImage = fabricImg;
        centerCanvasContent(canvas);
    });
}

slider.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    const image = canvas.item(0);

    if (cachedImage) {
        switch (currentOption) {
            case 'simple': {
                scaleImageDirectly(canvas, image, inputValue);
                break;
            }
            case 'smoothing': {
                scaleImageWithSmoothing(canvas, image, inputValue);
                break;
            }
            case 'css': {
                adjustWrapperSize(wrapper, canvas, inputValue)
                break;
            }
            case 'offscreen': {
                addImageWithOffscreenScaling(canvas, cachedImage, inputValue)
                break;
            }
            case 'off': {
                break;
            }
            default: {
                console.warn('Unknown scaling option:', currentOption);
                break;
            }
        }
    }
});

window.addEventListener('resize', () => adjustWrapperSize(wrapper, canvas));

const buttons = document.querySelectorAll('.switch');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentOption = button.getAttribute('data-option');
    });
});

document.getElementById('previous').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    canvas.clear();
    loadImage(images[currentImageIndex]);
});

document.getElementById('next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    canvas.clear();
    loadImage(images[currentImageIndex]);
});

document.getElementById('addNewImage').addEventListener('click', () => {
    const input = document.querySelector('.add__image input[type="text"]');
    const newImageUrl = input.value.trim();

    if (isValidImageUrl(newImageUrl)) {
        images.push(newImageUrl); 
        currentImageIndex = images.length - 1;
        canvas.clear();
        loadImage(newImageUrl);
        input.value = '';
    } else {
        alert('Please enter a valid image URL.');
        input.value = '';
    }
});