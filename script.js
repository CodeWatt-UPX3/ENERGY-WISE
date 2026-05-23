// SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({
        behavior: 'smooth'
      });

  });

});


// QR CODE AUTOMÁTICO

const qrCode = document.getElementById("qrCode");

const projectUrl = "https://codewatt-upx3.github.io/ENERGY-WISE/";

qrCode.src =
  `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(projectUrl)}`;