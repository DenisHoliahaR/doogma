import { setProperSizes } from "./setProperSizes";

export function adjustWrapperSize(wrapper, canvas, inputValue = Infinity) {
    const viewportWidth = window.innerWidth;
    const newWidth = Math.min(viewportWidth * 0.65, parseInt(inputValue));
    wrapper.style.width = `${newWidth}px`;
    wrapper.style.height = `${newWidth}px`;
    setProperSizes(wrapper, canvas, true);
}