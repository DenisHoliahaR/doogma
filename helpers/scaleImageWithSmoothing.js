export function scaleImageWithSmoothing(canvas, image, width) {
    image.scaleToWidth(width);
    canvas.contextContainer.imageSmoothingEnabled = true;
    canvas.contextContainer.imageSmoothingQuality = 'high';
    canvas.requestRenderAll();
}