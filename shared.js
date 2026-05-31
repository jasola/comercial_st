/* ============================================================
   PYMEX SEVILLA 2026 — Marketing para la Direccion
   shared.js  |  Comportamiento común (sidebar, tabs, etc.)
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Tab switching ---------- */
  window.showTab = function (id, btn) {
    var panels = document.querySelectorAll('.tab-panel');
    var btns   = document.querySelectorAll('.tab-btn');
    panels.forEach(function (p) { p.classList.remove('active'); });
    btns.forEach(function (b)   { b.classList.remove('active'); });
    var panel = document.getElementById('tab-' + id);
    if (panel) panel.classList.add('active');
    if (btn)   btn.classList.add('active');
  };

  /* ---------- Mark current page active in sidebar ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item[href]').forEach(function (a) {
      var href = a.getAttribute('href').split('/').pop();
      if (href === current) {
        a.classList.add('active');
      }
    });
  });

})();
