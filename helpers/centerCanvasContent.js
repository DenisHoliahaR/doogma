export function centerCanvasContent(canvas, scale) {
    const objects = canvas.getObjects();
    
    if (objects.length === 0) return;

    const centerX = (canvas.width / 2) / scale;
    const centerY = (canvas.height / 2) / scale;

    objects.forEach((obj) => {
        obj.set({
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
        });
    });

    canvas.renderAll();
}
