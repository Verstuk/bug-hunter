export const smoothScrollTo = (elementId: string) => {
  const element = document.querySelector(elementId);
  if (!element) return;

  const headerOffset = 100;
  
  // Используем более современный метод
  element.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });

  // Компенсируем высоту хедера
  setTimeout(() => {
    window.scrollBy({
      top: -headerOffset,
      behavior: 'smooth'
    });
  }, 0);
}; 