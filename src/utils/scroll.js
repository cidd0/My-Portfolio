/**
 * Scroll to a specific element with an offset for the navbar
 * @param {string} elementId - The id of the element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 0;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - navbarHeight;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Updates the active tab based on current scroll position
 * @param {Array} items - Navigation items with id and name properties
 * @param {Function} setActiveCallback - Function to update active state
 */
export const handleScrollSpy = (items, setActiveCallback) => {
  const sections = items.map(item => document.getElementById(item.id));
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section, index) => {
    if (section) {
      const { offsetTop, offsetHeight } = section;
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveCallback(items[index].name);
      }
    }
  });
};