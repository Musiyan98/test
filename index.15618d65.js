function windowLoad(){var n={};function e(e){var t=e||document.querySelectorAll("[data-digits-counter]");t&&t.forEach((function(e){n[e.id]||function(e){var t=null;n[e.id]=!0;var r=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,o=parseInt(e.innerHTML),i=0,a=function(d){t||(t=d);var s=Math.min((d-t)/r,1);e.innerHTML=Math.floor(s*(i+o)),console.log(o+" - "+e.innerHTML+", progress: "+s),s<1?window.requestAnimationFrame(a):n[e.id]=!1};window.requestAnimationFrame(a)}(e)}))}var t=new IntersectionObserver((function(n,t){n.forEach((function(n){if(n.isIntersecting){var t=n.target.querySelectorAll("[data-digits-counter]");t.length&&e(t)}}))}),{threshold:.3});document.querySelectorAll(".advantages").forEach((function(n){t.observe(n)}))}window.addEventListener("load",windowLoad);
//# sourceMappingURL=index.15618d65.js.map
