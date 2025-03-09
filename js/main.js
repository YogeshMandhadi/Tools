document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('../../header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Initialize search functionality after header is loaded
            initializeSearch();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('../../footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

/**
 * Load HTML component into a placeholder element
 * @param {string} placeholderId - The ID of the placeholder element
 * @param {string} componentUrl - The URL of the component to load
 */
function loadComponent(placeholderId, componentUrl) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;
    
    fetch(componentUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${componentUrl}: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            placeholder.innerHTML = html;
            
            // If it's the header, update the active state
            if (componentUrl === 'header.html') {
                updateActiveNavItem();
            }
        })
        .catch(error => {
            console.error(`Error loading component ${componentUrl}:`, error);
            placeholder.innerHTML = `<div class="alert alert-danger">Failed to load ${componentUrl}</div>`;
        });
}

/**
 * Update the active state of navigation items based on the current page
 */
function updateActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page link
        if (href === currentPage || 
            (currentPage === 'index.html' && href === './') || 
            (href !== './' && href !== 'index.html' && currentPage.includes(href))) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize search functionality
 */
function initializeSearch() {
    const searchInput = document.getElementById('tool-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const toolCards = document.querySelectorAll('.tool-card');

        toolCards.forEach(card => {
            const toolName = card.querySelector('.card-title').textContent.toLowerCase();
            const toolDescription = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolDescription.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

/**
 * Highlight active category in sidebar based on scroll position
 */
function highlightActiveCategory() {
    // Get all category sections
    const sections = document.querySelectorAll('section[id]');
    const categoryLinks = document.querySelectorAll('.category-list .nav-link');
    
    if (sections.length === 0 || categoryLinks.length === 0) return;
    
    // Add scroll listener
    window.addEventListener('scroll', function() {
        let currentSection = '';
        const scrollPosition = window.scrollY + 100; // Add offset for better UX
        
        // Find current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.id;
            }
        });
        
        // Update active link
        categoryLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').replace('#', '');
            if (href === currentSection) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll to section when clicking category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
} 