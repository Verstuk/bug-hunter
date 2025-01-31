export const smoothScrollTo = (elementId: string) => {
  const element = document.querySelector(elementId);
  if (!element) return;

  const headerHeight = 80; // Высота хедера
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}; 