
(function ($) {
  $.fn.parallax = function (options) {
    var windowHeight = $(window).height()

         // Establish default settings
    var settings = $.extend({
      speed: 0.15
    }, options)

         // Iterate over each object in collection
    return this.each(function () {
           // Save a reference to the element
      var $this = $(this)

           // Set up Scroll Handler
      $(document).scroll(function () {
        var scrollTop = $(window).scrollTop()
        var offset = $this.offset().top
        var height = $this.outerHeight()

         // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return
        }

        var yBgPosition = Math.round((offset - scrollTop) * settings.speed)

                  // Apply the Y Background Position to Set the Parallax Effect
        $this.css('background-position', 'center ' + yBgPosition + 'px')
      })
    })
  }
}(jQuery))

$('.bg-1,.bg-3').parallax({
  speed: 0.15
})

$('.bg-2').parallax({
  speed: 0.25
})

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
    location.hostname === this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault()
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target)
        $target.focus()
        if ($target.is(':focus')) { // Checking if the target was focused
          return false
        } else {
          $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
          $target.focus() // Set focus again
        };
      })
    }
  }
})

$('.demo').hover(function () {
  $(this).popover('toggle')
})

$('.demo').click(function () {
  $(this).popover('toggle')
})
