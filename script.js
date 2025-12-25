document.addEventListener("DOMContentLoaded", function () {
    // Selecting all anchor links within the page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1); // Extract target section ID

            if (!targetId) return;

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();

                const offset = 70; // Adjust offset (e.g., for fixed headers)
                const targetPos = targetSection.getBoundingClientRect().top + window.scrollY - offset;

                // Call custom fast smooth scroll
                smoothScrollTo(targetPos);

                // If the offcanvas menu is open, close it after clicking the link
                const offcanvas = document.querySelector('.offcanvas');
                if (offcanvas) {
                    const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvas); // Initialize the offcanvas
                    bootstrapOffcanvas.hide(); // Close the offcanvas after the link is clicked
                }
            }
        });
    });

    function smoothScrollTo(targetPos) {
        const start = window.scrollY;
        const distance = targetPos - start;
        const duration = 500; // Duration of scroll in ms (lower value for faster speed)
        let startTime = null;

        // Animation loop for smooth scroll
        function scrollAnimation(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollProgress = Math.min(timeElapsed / duration, 1); // Ensures we don't go beyond the target position

            // Ease-in-out effect for smooth scroll
            const easing = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            window.scrollTo(0, start + distance * easing(scrollProgress));

            if (timeElapsed < duration) {
                window.requestAnimationFrame(scrollAnimation); // Keep animating until we reach the target
            }
        }

        window.requestAnimationFrame(scrollAnimation);
    }
});

  (function() {
    var options = {
      whatsapp: "03114666173", // Replace with your WhatsApp number
      call_to_action: "Chat with us on WhatsApp", // Message that will show
        button_color: "#FF6550", // Color of the button (default: #FF6550)
      size: "60", // Size of the button
      header_title: "Welcome to Harram Autos!", // Widget title
    };
    var proto = document.location.protocol, host = "getbutton.io";
    var url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
    s.src = url + '/widget-send-button/js/init.js';
    s.onload = function() { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
  })();

  function initMap() {
    var location = { lat: 31.543520, lng: 74.303841 }; // آپ کا لوکیشن یہاں لکھیں
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Clippers Hair & Skin Care'
    });
  }