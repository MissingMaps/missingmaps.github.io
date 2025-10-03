/*
Populates contribution statistics on landing page using
the root Missing Maps API endpoint.
*/

const API_URL = 'https://stats.now.ohsome.org/api/stats/missingmaps';

/**
 * Fetches and updates Missing Maps statistics
 */
async function fetchAndUpdateStats () {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    updateStatistics(data);
  } catch (error) {
    console.error('Failed to fetch Missing Maps statistics:', error);
    // Fallback to show placeholder or cached data
    showFallbackStats();
  }
}

/**
 * Updates the statistics display on the page
 * @param {Object} stats - The statistics data from the API
 */
function updateStatistics (stats) {
  const categories = ['users', 'edits', 'buildings', 'roads'];

  categories.forEach(category => {
    const element = document.getElementById(`stats-${category}Count`);
    if (element && stats.result?.[category]) {
      element.innerHTML = Math.round(stats.result[category]).toLocaleString();
    }
  });
}

/**
 * Shows fallback statistics when API fails
 */
function showFallbackStats () {
  const fallbackStats = {
    users: 300000,
    edits: 50000000,
    buildings: 40000000,
    roads: 2000000
  };

  Object.entries(fallbackStats).forEach(([category, value]) => {
    const element = document.getElementById(`stats-${category}Count`);
    if (element) {
      element.innerHTML = `${value.toLocaleString()}+`;
    }
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    fetchAndUpdateStats();
    initMobileMenu();
  });
} else {
  fetchAndUpdateStats();
  initMobileMenu();
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
  const mobileMenuButton = document.querySelector('.resp-nav-dropdown');
  const mobileMenuContent = document.querySelector('.resp-dropdown-content');
  
  if (mobileMenuButton && mobileMenuContent) {
    // Toggle menu on click/touch
    mobileMenuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle the mobile menu
      if (mobileMenuContent.classList.contains('show')) {
        mobileMenuContent.classList.remove('show');
      } else {
        mobileMenuContent.classList.add('show');
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenuButton.contains(e.target)) {
        mobileMenuContent.classList.remove('show');
      }
    });
    
    // Close menu when clicking on a menu item
    const menuLinks = mobileMenuContent.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuContent.classList.remove('show');
      });
    });
  }
}
