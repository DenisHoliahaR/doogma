export function addImageWithOffscreenScaling(canvas, cachedImage, scaleWidth) {
    const offscreenCanvas = document.createElement('canvas');
    const offscreenContext = offscreenCanvas.getContext('2d');

    const img = cachedImage.getElement();

    const scaleFactor = scaleWidth / img.width;
    const scaledWidth = img.width * scaleFactor;
    const scaledHeight = img.height * scaleFactor;

    offscreenCanvas.width = scaledWidth;
    offscreenCanvas.height = scaledHeight;

    offscreenContext.imageSmoothingEnabled = true;
    offscreenContext.imageSmoothingQuality = 'high';

    offscreenContext.drawImage(img, 0, 0, scaledWidth, scaledHeight);

    const dataURL = offscreenCanvas.toDataURL();

    fabric.Image.fromURL(dataURL, function (fabricImg) {
        fabricImg.set({
            left: canvas.width / 2,
            top: canvas.height / 2,
            originX: 'center',
            originY: 'center',
        });
        
        canvas.clear();
        canvas.add(fabricImg);
        canvas.requestRenderAll();
    });
}