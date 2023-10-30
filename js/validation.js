const inputElement = document.getElementById('spec-input');

inputElement.addEventListener('input', function(event) {
  const inputValue = event.target.value;
  const sanitizedValue = inputValue.replace(/[!@#$%^&*()]/g, '');
  event.target.value = sanitizedValue;
});
