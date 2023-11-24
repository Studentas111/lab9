var logo = document.getElementById("logo");

logo.addEventListener("mouseover", function() {
    logo.style.filter = "hue-rotate(240deg)";
});

logo.addEventListener("mouseout", function() {
  logo.style.filter = "brightness(1)";
});


var logo2 = document.getElementById("logo2");

logo2.addEventListener("mouseover", function() {
    logo2.style.filter = "hue-rotate(240deg)";
});

logo2.addEventListener("mouseout", function() {
  logo2.style.filter = "brightness(1)";
});

const rectangles = document.querySelectorAll('.rectangle');

    rectangles.forEach(rectangle => {
      rectangle.addEventListener('mouseenter', () => {
        const imgOverlay = rectangle.querySelector('.img-overlay');
        if (imgOverlay) {
          imgOverlay.style.filter = 'invert(25)'; // Change the image color on hover
        }
      });

      rectangle.addEventListener('mouseleave', () => {
        const imgOverlay = rectangle.querySelector('.img-overlay');
        if (imgOverlay) {
          imgOverlay.style.filter = 'invert(0)'; // Reset the image color on mouse leave
        }
      });
    });

    function getInputValues() {
      var name = document.getElementById("nameInput").value;
      var email = document.getElementById("emailInput").value;

      alert("Name: " + name + "\nEmail: " + email);
  }