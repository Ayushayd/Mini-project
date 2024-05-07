import $ from 'jquery';

// Load jQuery from Google CDN
$.getScript('https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js', function () {
  // jQuery is loaded
  // Load ionicons
  $.getScript('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js', function () {
    // ionicons ES module is loaded
    // Check if the browser supports ES modules
    if (typeof importModule !== 'undefined' && importModule instanceof Function) {
      // Load ionicons ES module
      importModule('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js');
    } else {
      // Load ionicons non-ES module (for older browsers)
      $.getScript('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js', function () {
        // ionicons non-ES module is loaded
        // Load AOS
        $.getScript('https://unpkg.com/aos@next/dist/aos.js', function () {
          // AOS is loaded
          AOS.init();
        });
      });
    }
  });
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


