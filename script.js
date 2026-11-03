(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Enquiry form: validate, then hand off to your backend.
  var form = document.getElementById('enquiry');
  var status = document.getElementById('form-status');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function show(msg, type) {
    status.textContent = msg;
    status.className = 'status ' + type;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.elements.name;
    var email = form.elements.email;
    [name, email].forEach(function (f) { f.removeAttribute('aria-invalid'); });

    if (!name.value.trim()) {
      name.setAttribute('aria-invalid', 'true');
      name.focus();
      return show('Enter your name.', 'error');
    }
    if (!emailPattern.test(email.value.trim())) {
      email.setAttribute('aria-invalid', 'true');
      email.focus();
      return show('Enter a valid email address.', 'error');
    }

    var data = Object.fromEntries(new FormData(form).entries());

    // TODO: connect to your inbox before publishing, e.g.:
    // fetch('https://your-form-endpoint.example', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // }).then(...)
    console.log('Enquiry (not sent yet):', data);

    show('Thanks, ' + name.value.trim() + '. Your enquiry is ready to send once the form is connected.', 'ok');
    form.reset();
  });
})();
