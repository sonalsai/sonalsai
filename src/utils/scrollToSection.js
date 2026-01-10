/**
 * Smoothly scrolls to a section by its ID with custom easing animation
 * @param {string} id - The ID of the section to scroll to
 * @param {Function} callback - Optional callback to execute after scrolling starts
 */
export const scrollToSection = (id, callback) => {
  const element = document.getElementById(id);
  if (!element) return;

  // Execute callback if provided (e.g., to close sidebar)
  if (callback) callback();

  const offset = 100;
  const elementPosition = element.getBoundingClientRect().top;
  const startPosition = window.scrollY;
  const targetPosition = elementPosition + startPosition - offset;
  const distance = targetPosition - startPosition;
  const duration = 1500;
  let start = null;

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = (currentTime) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
