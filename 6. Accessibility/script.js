document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown, .sub-dropdown');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('keydown', function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
          const isExpanded = this.getAttribute('aria-expanded') === 'true';
          const content = this.querySelector('.dropdown-content, .sub-dropdown-content');
          this.setAttribute('aria-expanded', !isExpanded);
          content.setAttribute('aria-hidden', isExpanded);
          content.style.display = isExpanded ? 'none' : 'block';
        } else if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
          const content = this.querySelector('.dropdown-content, .sub-dropdown-content');
          if (content) {
            content.firstElementChild.focus();
          }
        } else if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
          const parent = this.closest('.dropdown, .sub-dropdown');
          if (parent) {
            parent.querySelector('a').focus();
          }
        }
      });
    });
  });
  