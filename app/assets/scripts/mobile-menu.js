/**
 * Mobile Navigation Menu
 * Enhanced mobile navigation with improved touch interactions and accessibility
 */
(function () {
  'use strict';

  function initMobileMenu () {
    // Find the mobile dropdown toggle
    const mobileDropdown = document.querySelector('.resp-nav-dropdown');
    const dropdownContent = document.querySelector('.resp-dropdown-content');
    const menuButton = mobileDropdown?.querySelector('p');

    if (!mobileDropdown || !dropdownContent) {
      return;
    }

    // Add ARIA attributes for accessibility
    mobileDropdown.setAttribute('role', 'button');
    mobileDropdown.setAttribute('aria-expanded', 'false');
    mobileDropdown.setAttribute('aria-haspopup', 'true');
    mobileDropdown.setAttribute('tabindex', '0');
    dropdownContent.setAttribute('role', 'menu');

    // Update menu button text and ARIA state
    function updateMenuState (isOpen) {
      const isExpanded = isOpen ? 'true' : 'false';
      mobileDropdown.setAttribute('aria-expanded', isExpanded);

      if (menuButton) {
        menuButton.textContent = isOpen ? 'CLOSE' : 'MENU';
      }
    }

    // Toggle mobile menu
    function toggleMenu (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdownContent.classList.toggle('show');
      updateMenuState(isOpen);

      // Add/remove body scroll lock on mobile
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }

    // Close menu
    function closeMenu () {
      dropdownContent.classList.remove('show');
      updateMenuState(false);
      document.body.style.overflow = '';
    }

    // Enhanced event listeners
    mobileDropdown.addEventListener('click', toggleMenu);
    mobileDropdown.addEventListener('touchstart', (e) => {
      // Prevent double-tap zoom on iOS
      e.preventDefault();
    });

    // Keyboard support
    mobileDropdown.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        toggleMenu(e);
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileDropdown.contains(e.target) && !dropdownContent.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu when pressing escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', () => {
      if (window.innerWidth > 650) {
        closeMenu();
      }
    });

    // Enhanced touch handling for mobile menu items
    const menuItems = dropdownContent.querySelectorAll('.nav-item, .lang');
    menuItems.forEach(item => {
      item.addEventListener('touchstart', function () {
        this.style.backgroundColor = 'rgba(255,255,255,0.1)';
      });

      item.addEventListener('touchend', function () {
        setTimeout(() => {
          this.style.backgroundColor = '';
        }, 150);
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();