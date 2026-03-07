/**
 * ZyroxCSS JavaScript Components
 *
 * (c) 2026 ZyroxCSS Team
 * Released under the MIT License
 * https://opensource.org/licenses/MIT
 */

class ZyroxCSS {
  constructor() {
    this.carouselIntervals = new Map();
    this.activeDropdown = null;
    this.scrollPosition = 0;
    this.init();
  }

  init() {
    this.initModals();
    this.initDropdowns();
    this.initCarousels();
    this.initCarouselIndicators();
    this.initTabs();
    this.initTooltips();
    this.initAlerts();
    this.initDocumentClick();
  }

  // Handle document click for closing dropdowns and tooltips
  initDocumentClick() {
    document.addEventListener('click', (e) => {
      // Close dropdowns when clicking outside
      if (!e.target.closest('.dropdown')) {
        this.closeAllDropdowns();
      }
      // Hide tooltips when clicking outside
      if (!e.target.closest('.tooltip')) {
        this.hideAllTooltips();
      }
    }, true);
  }

  closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
      menu.style.opacity = '0';
      menu.style.visibility = 'hidden';
    });
    this.activeDropdown = null;
  }

  hideAllTooltips() {
    document.querySelectorAll('.tooltip-text').forEach(tt => {
      tt.style.visibility = 'hidden';
      tt.style.opacity = '0';
    });
  }

  // Modal functionality
  initModals() {
    // Open modal
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-modal-target]')) {
        const target = e.target.getAttribute('data-modal-target');
        this.openModal(target);
      }
    });

    // Close modal
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-modal-close]')) {
        this.closeModal(e.target.closest('.modal'));
      }
      // Close on backdrop click (only if clicking directly on modal background)
      if (e.target.classList.contains('modal') && !e.target.closest('.modal-content')) {
        this.closeModal(e.target);
      }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.modal--active');
        if (activeModal) {
          this.closeModal(activeModal);
        }
      }
    });
  }

  openModal(selector) {
    const modal = document.querySelector(selector);
    if (modal) {
      // Store scroll position
      this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
      
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = this.getScrollbarWidth() + 'px';
      
      // Emit custom event
      modal.dispatchEvent(new CustomEvent('modal:open'));
    }
  }

  closeModal(modal) {
    if (modal) {
      modal.classList.remove('modal--active');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      
      // Restore scroll position
      window.scrollTo(0, this.scrollPosition);
      
      // Emit custom event
      modal.dispatchEvent(new CustomEvent('modal:close'));
    }
  }

  getScrollbarWidth() {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return scrollbarWidth;
  }

  // Dropdown functionality
  initDropdowns() {
    document.addEventListener('click', (e) => {
      const dropdown = e.target.closest('.dropdown');
      const toggle = e.target.closest('.dropdown-toggle');

      // Toggle dropdown
      if (toggle) {
        e.preventDefault();
        const menu = dropdown.querySelector('.dropdown-menu');
        const isVisible = menu.style.display === 'block';

        this.closeAllDropdowns();

        if (!isVisible) {
          menu.style.display = 'block';
          setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateY(0)';
          }, 10);
          this.activeDropdown = menu;
          
          // Focus first item for keyboard navigation
          const firstItem = menu.querySelector('.dropdown-item');
          if (firstItem) {
            firstItem.focus();
          }
        }
      }
    });

    // Keyboard navigation for dropdowns
    document.addEventListener('keydown', (e) => {
      if (!this.activeDropdown) return;

      const items = Array.from(this.activeDropdown.querySelectorAll('.dropdown-item'));
      const activeItem = document.activeElement;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = items.indexOf(activeItem);
        const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        items[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = items.indexOf(activeItem);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        items[prevIndex].focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (items.includes(activeItem)) {
          activeItem.click();
        }
      }
    });
  }

  // Carousel functionality
  initCarousels() {
    document.querySelectorAll('.carousel').forEach((carousel, carouselIndex) => {
      const inner = carousel.querySelector('.carousel-inner');
      const items = carousel.querySelectorAll('.carousel-item');
      const prevBtn = carousel.querySelector('.carousel-control.prev');
      const nextBtn = carousel.querySelector('.carousel-control.next');
      let currentIndex = 0;
      let autoplayInterval = null;

      const updateCarousel = () => {
        if (inner) {
          inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        // Update indicators
        const indicators = carousel.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentIndex);
        });
        
        // Emit custom event
        carousel.dispatchEvent(new CustomEvent('carousel:change', { 
          detail: { index: currentIndex, total: items.length }
        }));
      };

      const nextSlide = () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        updateCarousel();
      };

      const prevSlide = () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        updateCarousel();
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
      }

      // Auto-play (with proper cleanup)
      if (carousel.hasAttribute('data-autoplay')) {
        const interval = parseInt(carousel.getAttribute('data-autoplay')) || 3000;
        autoplayInterval = setInterval(nextSlide, interval);
        
        // Store interval for cleanup
        this.carouselIntervals.set(carouselIndex, autoplayInterval);
        
        // Pause on hover/focus
        carousel.addEventListener('mouseenter', () => {
          if (autoplayInterval) clearInterval(autoplayInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
          autoplayInterval = setInterval(nextSlide, interval);
        });
      }

      // Touch/swipe support
      let touchStartX = 0;
      carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      });

      carousel.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      });

      updateCarousel();
    });
  }

  initCarouselIndicators() {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const items = carousel.querySelectorAll('.carousel-item');
      const indicatorsContainer = carousel.querySelector('.carousel-indicators');
      
      if (indicatorsContainer) {
        // Clear existing indicators
        indicatorsContainer.innerHTML = '';
        
        // Create indicators
        items.forEach((item, index) => {
          const indicator = document.createElement('button');
          indicator.className = 'indicator' + (index === 0 ? ' active' : '');
          indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
          
          indicator.addEventListener('click', () => {
            const inner = carousel.querySelector('.carousel-inner');
            inner.style.transform = `translateX(-${index * 100}%)`;
            
            // Update all indicators
            carousel.querySelectorAll('.indicator').forEach((ind, i) => {
              ind.classList.toggle('active', i === index);
            });
          });
          
          indicatorsContainer.appendChild(indicator);
        });
      }
    });
  }

  // Tabs functionality
  initTabs() {
    document.querySelectorAll('.tabs').forEach(tabs => {
      const tabLinks = tabs.querySelectorAll('.tab-link');
      const tabContents = tabs.querySelectorAll('.tab-content');

      tabLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Remove active class from all links and contents
          tabLinks.forEach(l => l.classList.remove('active'));
          tabContents.forEach(c => c.classList.remove('active'));

          // Add active class to clicked link and corresponding content
          link.classList.add('active');
          if (tabContents[index]) {
            tabContents[index].classList.add('active');
            
            // Smooth scroll into view
            tabContents[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          
          // Emit custom event
          tabs.dispatchEvent(new CustomEvent('tabs:change', { 
            detail: { index, link }
          }));
        });

        // Keyboard navigation
        link.addEventListener('keydown', (e) => {
          let targetIndex = null;
          
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            targetIndex = index < tabLinks.length - 1 ? index + 1 : 0;
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            targetIndex = index > 0 ? index - 1 : tabLinks.length - 1;
          }
          
          if (targetIndex !== null) {
            tabLinks[targetIndex].click();
            tabLinks[targetIndex].focus();
          }
        });
      });
    });
  }

  // Tooltip functionality (enhancement for touch devices)
  initTooltips() {
    if ('ontouchstart' in window) {
      document.addEventListener('click', (e) => {
        const tooltip = e.target.closest('.tooltip');
        if (tooltip) {
          const tooltipText = tooltip.querySelector('.tooltip-text');
          if (tooltipText) {
            const isVisible = tooltipText.style.visibility === 'visible';
            this.hideAllTooltips();
            
            if (!isVisible) {
              tooltipText.style.visibility = 'visible';
              tooltipText.style.opacity = '1';
            }
          }
        }
      });
    }
  }

  // Alert functionality
  initAlerts() {
    document.addEventListener('click', (e) => {
      if (e.target.matches('.alert .btn-close') || e.target.closest('.alert .btn-close')) {
        const alert = e.target.closest('.alert');
        if (alert) {
          alert.style.opacity = '0';
          alert.style.transform = 'translateX(100%)';
          setTimeout(() => {
            alert.remove();
            // Emit custom event
            document.dispatchEvent(new CustomEvent('alert:close', { detail: { alert } }));
          }, 300);
        }
      }
    });
  }

  // Toast functionality
  showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
      <div class="toast-content">
        <span>${message}</span>
        <button class="btn-close" aria-label="Close notification">&times;</button>
      </div>
    `;

    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
      toast.dispatchEvent(new CustomEvent('toast:open'));
    }, 10);

    // Auto hide
    const hideToast = () => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
        toast.dispatchEvent(new CustomEvent('toast:close'));
      }, 300);
    };

    // Close button
    const closeBtn = toast.querySelector('.btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', hideToast);
    }

    // Auto hide after duration
    if (duration > 0) {
      setTimeout(hideToast, duration);
    }

    return toast;
  }

  // Cleanup method
  destroy() {
    // Clear carousel intervals
    this.carouselIntervals.forEach(interval => clearInterval(interval));
    this.carouselIntervals.clear();
    
    // Reset state
    this.activeDropdown = null;
    this.scrollPosition = 0;
  }

  // Utility methods
  static init() {
    return new ZyroxCSS();
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.zyroxCSS = ZyroxCSS.init();
  });
} else {
  window.zyroxCSS = ZyroxCSS.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ZyroxCSS;
}
