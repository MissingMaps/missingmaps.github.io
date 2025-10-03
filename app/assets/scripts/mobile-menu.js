/**
 * Mobile Navigation Menu
 * Handles touch/click events for mobile devices where hover doesn't work properly
 */
(function() {
    'use strict';
    
    function initMobileMenu() {
        // Find the mobile dropdown toggle
        const mobileDropdown = document.querySelector('.resp-nav-dropdown');
        const dropdownContent = document.querySelector('.resp-dropdown-content');
        
        if (!mobileDropdown || !dropdownContent) {
            return;
        }
        
        // Add click event listener to toggle mobile menu
        mobileDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the show class
            dropdownContent.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileDropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
        
        // Close menu when pressing escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdownContent.classList.remove('show');
            }
        });
        
        // Close menu when window is resized to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 650) {
                dropdownContent.classList.remove('show');
            }
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();