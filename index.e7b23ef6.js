(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),$(document).ready((function(){$(".reviews__slider").slick({infinite:!0,loop:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0,swipe:!0,touchThreshold:10,touchMove:!0})})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),window.addEventListener("load",(function(){let e={};function t(t){let o=t||document.querySelectorAll("[data-digits-counter]");o&&o.forEach((t=>{e[t.id]||function(t){let o=null;e[t.id]=!0;const n=parseInt(t.dataset.digitsCounter)?parseInt(t.dataset.digitsCounter):1e3,d=parseInt(t.innerHTML),a=0,r=l=>{o||(o=l);const s=Math.min((l-o)/n,1);t.innerHTML=Math.floor(s*(a+d)),console.log(d+" - "+t.innerHTML+", progress: "+s),s<1?window.requestAnimationFrame(r):e[t.id]=!1};window.requestAnimationFrame(r)}(t)}))}let o=new IntersectionObserver(((e,o)=>{e.forEach((e=>{if(e.isIntersecting){const o=e.target.querySelectorAll("[data-digits-counter]");o.length&&t(o)}}))}),{threshold:.3});document.querySelectorAll(".advantages").forEach((e=>{o.observe(e)}))}));
//# sourceMappingURL=index.e7b23ef6.js.map
