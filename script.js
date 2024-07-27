 // JavaScript to handle navbar hiding/showing on scroll
 let lastScrollTop = 0;
 const navbar = document.getElementById('navbar');

 window.addEventListener('scroll', function() {
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
     if (scrollTop > lastScrollTop) {
         // Scrolling down
         navbar.classList.add('hidden');
     } else {
         // Scrolling up
         navbar.classList.remove('hidden');
     }
     lastScrollTop = scrollTop;
 });