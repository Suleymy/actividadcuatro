function enviar(event) {
  const frm = document.getElementById("formu");
  const txt = document.getElementById("message");
  const emailInput = document.getElementById("user");

  if (frm.checkValidity()) {
    if (emailInput.validity.valid) {
      txt.value = "";
      alert("Gracias por tu registro, pronto nos contactaremos contigo");
    } else {
      alert("Por favor, ingresa un correo electrónico válido");
    }
  } else {
    alert("Por favor, ingresa un correo electrónico válido");
  }

  event.preventDefault();
}

function configurarCarga() {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    autoplay: true,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  const btn = document.getElementById("send");
  btn.addEventListener("click", enviar);
}

window.onload = configurarCarga;
