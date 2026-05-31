/* ============================================================
   PYMEX SEVILLA 2026 — shared.js
   ============================================================ */
(function(){
  'use strict';

  /* Tab switching */
  window.showTab = function(id, btn){
    document.querySelectorAll('.tab-panel').forEach(function(p){ p.classList.remove('active'); });
    document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    var panel = document.getElementById('tab-'+id);
    if(panel) panel.classList.add('active');
    if(btn)   btn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* Auto-mark active nav item */
  document.addEventListener('DOMContentLoaded', function(){
    var current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item[href]').forEach(function(a){
      if(a.getAttribute('href').split('/').pop() === current){
        a.classList.add('active');
      }
    });
  });
}());
