const examples = document.querySelectorAll('.example');

examples.forEach((example) => {
  const content = example.querySelector('.content');
  const text = example.querySelector('.text');
  const description = text.getAttribute('data-text');

  example.addEventListener('mouseover', () => {
    content.style.opacity = 1;
    text.style.transform = 'translateY(250px)';
    text.style.opacity = 1;
    text.textContent = description;
  });

  example.addEventListener('mouseout', () => {
    content.style.opacity = 0;
    text.style.transform = 'translateY(0)';
    text.style.opacity = 0;
  });
});