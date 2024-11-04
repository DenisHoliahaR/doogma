import { centerCanvasContent } from "./centerCanvasContent";

export function setProperSizes(wrapper, canvas, changeImage = false) {
    const wrapperWidth = wrapper.getBoundingClientRect().width;
    const scale = wrapperWidth / 1000;

    canvas.setDimensions({
        width: wrapper.getBoundingClientRect().width,
        height: wrapper.getBoundingClientRect().height,
    });

    if (changeImage) canvas.setZoom(scale);
    
    centerCanvasContent(canvas, scale);
}