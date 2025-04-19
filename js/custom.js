document.getElementById('Request-A-Quote').addEventListener('click', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const whatsappNumber = '919447117263'; // Include country code (India = 91)
    const text = `Hello, I am ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');
  });