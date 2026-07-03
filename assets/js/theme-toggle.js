(function() {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function current() {
    var saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  apply(current());

  btn.addEventListener('click', function() {
    var next = current() === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();
