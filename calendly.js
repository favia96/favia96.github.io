// Calendly popup, loaded only when a visitor clicks a [data-calendly] link:
// no third-party script or cookie touches the page until then.
// The link's own href is the fallback (opens in a new tab) if the widget can't load.
(function () {
  var PARAMS = 'background_color=0e1318&text_color=e2e8f0&primary_color=00e5ff';
  var loading = null;

  function load() {
    if (window.Calendly) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(css);
      var js = document.createElement('script');
      js.src = 'https://assets.calendly.com/assets/external/widget.js';
      js.onload = resolve;
      js.onerror = reject;
      document.head.appendChild(js);
    });
    return loading;
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-calendly]');
    if (!el || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    load().then(function () {
      window.Calendly.initPopupWidget({ url: el.href + '?' + PARAMS });
    }).catch(function () {
      loading = null;
      window.open(el.href, '_blank', 'noopener');
    });
  });
})();
