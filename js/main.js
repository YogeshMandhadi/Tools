document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
    
    // Initialize search functionality
    initSearch();
    
    // Highlight active category in sidebar
    highlightActiveCategory();
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
function initSearch() {
    const searchInput = document.getElementById('search-tools');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        filterTools(query);
    });
    
    // Also initialize search in header if available
    document.addEventListener('headerLoaded', function() {
        const headerSearchInput = document.querySelector('header .form-control[type="search"]');
        const headerSearchBtn = document.querySelector('header .btn[type="submit"]');
        
        if (headerSearchInput && headerSearchBtn) {
            headerSearchInput.addEventListener('input', function() {
                searchInput.value = this.value;
                filterTools(this.value.toLowerCase().trim());
            });
            
            headerSearchBtn.addEventListener('click', function() {
                filterTools(headerSearchInput.value.toLowerCase().trim());
            });
        }
    });
}

/**
 * Filter tools based on search query
 * @param {string} query - The search query
 */
function filterTools(query) {
    // Get all tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    if (toolCards.length === 0) return;
    
    // Track if there are visible tools in each category
    const categories = {};
    
    toolCards.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        const cardDesc = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
        const categorySection = card.closest('section');
        const categoryId = categorySection ? categorySection.id : null;
        
        if (!categories[categoryId]) {
            categories[categoryId] = false;
        }
        
        // Show/hide based on search match
        if (query === '' || cardTitle.includes(query) || cardDesc.includes(query)) {
            card.parentElement.style.display = '';
            categories[categoryId] = true;
        } else {
            card.parentElement.style.display = 'none';
        }
    });
    
    // Show/hide category sections based on whether they have visible tools
    for (const categoryId in categories) {
        const section = document.getElementById(categoryId);
        if (section) {
            section.style.display = categories[categoryId] ? '' : 'none';
        }
    }
    
    // Show a message if no tools match
    const noResultsElement = document.getElementById('no-results');
    if (query !== '' && Object.values(categories).every(visible => !visible)) {
        if (!noResultsElement) {
            const message = document.createElement('div');
            message.id = 'no-results';
            message.className = 'col-12 text-center my-5';
            message.innerHTML = `
                <div class="alert alert-info">
                    <h4>No tools match your search: "${query}"</h4>
                    <p>Try a different search term or browse categories.</p>
                </div>
            `;
            document.querySelector('#all-tools').appendChild(message);
        }
    } else if (noResultsElement) {
        noResultsElement.remove();
    }
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