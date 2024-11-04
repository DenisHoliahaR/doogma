export function isValidImageUrl(url) {
    const imageUrlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp))(?:\?.*)?$/i;
    return imageUrlPattern.test(url);
}