export function isOverlapping(el1: HTMLElement, el2: HTMLElement) {
  const rect1 = el1.getBoundingClientRect();
  const rect2 = el2.getBoundingClientRect();

  return (
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom > rect2.top ||
    rect1.top > rect2.bottom
  );
}
