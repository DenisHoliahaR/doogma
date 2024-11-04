export function scaleImageDirectly(canvas, image, inputValue) {
    const scale = inputValue / 800;
    image.scaleX = scale;
    image.scaleY = scale;
    canvas.requestRenderAll();
}