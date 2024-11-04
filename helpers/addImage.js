export function addImage(canvas, url, callback) {
    fabric.Image.fromURL(url, (fabricImg) => {
        fabricImg.set({
            left: canvas.width / 2,
            top: canvas.height / 2,
            originX: 'center',
            originY: 'center',
        });
        fabricImg.scaleToWidth(canvas.width - 40);
        canvas.add(fabricImg);

        if (typeof callback === 'function') {
            callback(fabricImg);
        }
    });
}