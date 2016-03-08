(function(app) {
  document.addEventListener('DOMContentLoaded', function() {

    ng.platform.browser.bootstrap(app.TempsPomo);
    ng.platform.browser.bootstrap(app.TasquesForm);

  });
})(window.app || (window.app = {}));
