/**
 * ZyroxCSS JavaScript Components
 *
 * (c) 2026 ZyroxCSS Team
 * Released under the MIT License
 * https://opensource.org/licenses/MIT
 */

class ZyroxCSS {
  constructor() {
    this.init();
  }

  init() {
    this.initModals();
    this.initDropdowns();
    this.initCarousels();
    this.initTabs();
    this.initTooltips();
    this.initAlerts();
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
      if (e.target.matches('[data-modal-close]') || e.target.classList.contains('modal')) {
        this.closeModal(e.target.closest('.modal'));
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
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal(modal) {
    if (modal) {
      modal.classList.remove('modal--active');
      document.body.style.overflow = '';
    }
  }

  // Dropdown functionality
  initDropdowns() {
    document.addEventListener('click', (e) => {
      const dropdown = e.target.closest('.dropdown');
      const toggle = e.target.closest('.dropdown-toggle');

      // Close all dropdowns if clicking outside
      if (!dropdown) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
        });
        return;
      }

      // Toggle dropdown
      if (toggle) {
        const menu = dropdown.querySelector('.dropdown-menu');
        const isVisible = menu.style.display === 'block';

        // Close other dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
          if (otherMenu !== menu) {
            otherMenu.style.display = 'none';
            otherMenu.style.opacity = '0';
            otherMenu.style.visibility = 'hidden';
          }
        });

        if (!isVisible) {
          menu.style.display = 'block';
          setTimeout(() => {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
          }, 10);
        } else {
          menu.style.opacity = '0';
          menu.style.visibility = 'hidden';
          setTimeout(() => {
            menu.style.display = 'none';
          }, 300);
        }
      }
    });
  }

  // Carousel functionality
  initCarousels() {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const inner = carousel.querySelector('.carousel-inner');
      const items = carousel.querySelectorAll('.carousel-item');
      const prevBtn = carousel.querySelector('.carousel-control.prev');
      const nextBtn = carousel.querySelector('.carousel-control.next');
      let currentIndex = 0;

      const updateCarousel = () => {
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          updateCarousel();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          updateCarousel();
        });
      }

      // Auto-play (optional)
      if (carousel.hasAttribute('data-autoplay')) {
        const interval = parseInt(carousel.getAttribute('data-autoplay')) || 3000;
        setInterval(() => {
          currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          updateCarousel();
        }, interval);
      }
    });
  }

  // Tabs functionality
  initTabs() {
    document.querySelectorAll('.tabs').forEach(tabs => {
      const tabLinks = tabs.querySelectorAll('.tab-link');
      const tabContents = tabs.querySelectorAll('.tab-content');

      tabLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
          // Remove active class from all links and contents
          tabLinks.forEach(l => l.classList.remove('active'));
          tabContents.forEach(c => c.classList.remove('active'));

          // Add active class to clicked link and corresponding content
          link.classList.add('active');
          if (tabContents[index]) {
            tabContents[index].classList.add('active');
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
            tooltipText.style.visibility = tooltipText.style.visibility === 'visible' ? 'hidden' : 'visible';
            tooltipText.style.opacity = tooltipText.style.opacity === '1' ? '0' : '1';
          }
        } else {
          // Hide all tooltips when clicking outside
          document.querySelectorAll('.tooltip-text').forEach(tt => {
            tt.style.visibility = 'hidden';
            tt.style.opacity = '0';
          });
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
          setTimeout(() => {
            alert.remove();
          }, 300);
        }
      }
    });
  }

  // Toast functionality
  showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-content">
        ${message}
        <button class="btn-close" aria-label="Close">&times;</button>
      </div>
    `;

    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // Auto hide
    const hideToast = () => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 500);
    };

    // Close button
    toast.querySelector('.btn-close').addEventListener('click', hideToast);

    // Auto hide after duration
    if (duration > 0) {
      setTimeout(hideToast, duration);
    }

    return toast;
  }

  // Utility methods
  static init() {
    return new ZyroxCSS();
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    ZyroxCSS.init();
  });
} else {
  ZyroxCSS.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ZyroxCSS;
}
