export function randomColor() {
  const hue = Math.floor(Math.random() * 30) + 15;
  const saturation = Math.floor(Math.random() * 30) + 70;
  const lightness = Math.floor(Math.random() * 30) + 50;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
