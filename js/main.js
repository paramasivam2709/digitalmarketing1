/**
 * STACKLY - Digital Marketing Agency
 * Main JavaScript File
 * Features: GSAP Animations, AOS, Text Animations, Auth, Dashboard
 */

// ========================================
// GSAP ANIMATIONS
// ========================================

// Initialize GSAP if available


// Hero Animations
function initHeroAnimations() {
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.hero-badge', { opacity: 0, y: 30, duration: 0.6 })
    .from('.hero-title', { opacity: 0, y: 50, duration: 0.8 }, '-=0.3')
    .from('.hero-description', { opacity: 0, y: 30, duration: 0.6 }, '-=0.4')
    .from('.hero-buttons .btn', { opacity: 0, y: 20, stagger: 0.15, duration: 0.5 }, '-=0.3')
    .from('.hero-stat', { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }, '-=0.2')
    .from('.hero-image-main', { opacity: 0, x: 100, scale: 0.9, duration: 1 }, '-=0.8')
    .from('.hero-image-secondary', { opacity: 0, x: -80, duration: 0.8 }, '-=0.6')
    .from('.hero-floating-card', { opacity: 0, scale: 0.5, duration: 0.6 }, '-=0.4');
}

// Scroll-triggered animations
function initScrollAnimations() {
  // Section headers
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.children, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  // Service cards
  gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 60,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Pricing cards
  gsap.utils.toArray('.pricing-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 80,
      opacity: 0,
      scale: 0.95,
      duration: 0.7,
      delay: i * 0.15,
      ease: 'power3.out'
    });
  });

  // Blog cards
  gsap.utils.toArray('.blog-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 60,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // About section
  gsap.from('.about-images', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.about-content > *', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    x: 60,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    ease: 'power3.out'
  });

  // FAQ items
  gsap.utils.toArray('.faq-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      x: -40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.08,
      ease: 'power3.out'
    });
  });

  // Stats counter animation
  gsap.utils.toArray('.about-stat-number, .hero-stat-number').forEach(stat => {
    const target = parseInt(stat.dataset.count) || parseInt(stat.textContent);
    if (target) {
      gsap.from(stat, {
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          stat.textContent = Math.round(this.targets()[0].textContent) + (stat.dataset.suffix || '+');
        }
      });
    }
  });

  // CTA section
  gsap.from('.cta-content > *', {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 75%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Contact info cards
  gsap.utils.toArray('.contact-info-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  // Dashboard stat cards
  gsap.utils.toArray('.stat-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });
}

// ========================================
// AOS (Animate On Scroll) - Custom Implementation
// ========================================

function initAOS() {
  const aosElements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  aosElements.forEach(el => {
    el.classList.add('aos-init');
    observer.observe(el);
  });
}

// ========================================
// TEXT ANIMATIONS
// ========================================

// Typing Effect
function initTypingEffect() {
  const typingElements = document.querySelectorAll('[data-typing]');
  
  typingElements.forEach(el => {
    const text = el.dataset.typing;
    const speed = parseInt(el.dataset.typingSpeed) || 80;
    let i = 0;
    
    el.textContent = '';
    el.classList.add('typing-text');
    
    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          el.style.borderRight = 'none';
        }, 2000);
      }
    }
    
    // Start typing when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          type();
          observer.unobserve(el);
        }
      });
    });
    
    observer.observe(el);
  });
}

// Text Reveal Animation
function initTextReveal() {
  const revealElements = document.querySelectorAll('[data-text-reveal]');
  
  revealElements.forEach(el => {
    const text = el.textContent;
    el.innerHTML = '';
    el.classList.add('text-reveal');
    
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${i * 0.05}s`;
      el.appendChild(span);
    });
  });
}

// Counter Animation
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.dataset.counter);
        const suffix = counter.dataset.suffix || '';
        const duration = parseInt(counter.dataset.duration) || 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(easeProgress * target);
          
          counter.textContent = current + suffix;
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }
        
        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ========================================
// NAVIGATION
// ========================================

function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  
  // Navbar scroll effect
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      mobileOverlay.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Close mobile menu on link click
  document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// FAQ ACCORDION
// ========================================

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// ========================================
// PRICING TOGGLE
// ========================================

function initPricingToggle() {
  const toggle = document.querySelector('.toggle-switch');
  const monthlyLabel = document.querySelector('.toggle-monthly');
  const yearlyLabel = document.querySelector('.toggle-yearly');
  const monthlyPrices = document.querySelectorAll('.price-monthly');
  const yearlyPrices = document.querySelectorAll('.price-yearly');
  
  if (!toggle) return;
  
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    
    const isYearly = toggle.classList.contains('active');
    
    if (monthlyLabel) monthlyLabel.classList.toggle('active', !isYearly);
    if (yearlyLabel) yearlyLabel.classList.toggle('active', isYearly);
    
    monthlyPrices.forEach(el => {
      el.style.display = isYearly ? 'none' : 'inline';
    });
    
    yearlyPrices.forEach(el => {
      el.style.display = isYearly ? 'inline' : 'none';
    });
  });
}

// ========================================
// AUTHENTICATION
// ========================================

function initAuth() {
  // Role selector
  const roleOptions = document.querySelectorAll('.role-option');
  const roleInput = document.getElementById('role-input');
  
  roleOptions.forEach(option => {
    option.addEventListener('click', () => {
      roleOptions.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      if (roleInput) {
        roleInput.value = option.dataset.role;
      }
    });
  });
  
  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const role = document.getElementById('role-input')?.value || 'user';
      
      // Simple validation
      if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
      
      // Simulate login
      const user = {
        email,
        role,
        name: role === 'admin' ? 'Admin User' : 'John Doe',
        avatar: role === 'admin' ? '👨‍💼' : '👤'
      };
      
      localStorage.setItem('stackly_user', JSON.stringify(user));
      showMessage('Login successful! Redirecting...', 'success');
      
      setTimeout(() => {
        window.location.href = role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
      }, 1500);
    });
  }
  
  // Register form
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      if (!name || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
      }
      
      if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
      }
      
      if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
      }
      
      const user = {
        email,
        name,
        role: 'user',
        avatar: '👤'
      };
      
      localStorage.setItem('stackly_user', JSON.stringify(user));
      showMessage('Registration successful! Redirecting...', 'success');
      
      setTimeout(() => {
        window.location.href = 'user-dashboard.html';
      }, 1500);
    });
  }
  
  // Logout
  
  
  // Check auth state
  checkAuthState();
}

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');

  if (!contactForm || !nameInput || !phoneInput) return;

  nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, '');
  });

  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
  });

  contactForm.addEventListener('submit', (e) => {
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const nameIsValid = /^[A-Za-z ]+$/.test(nameValue);
    const phoneIsValid = phoneValue === '' || /^\d+$/.test(phoneValue);

    if (!nameIsValid) {
      e.preventDefault();
      showMessage('Please enter a valid name using letters only.', 'error');
      nameInput.focus();
      return;
    }

    if (!phoneIsValid) {
      e.preventDefault();
      showMessage('Phone number can only include digits.', 'error');
      phoneInput.focus();
      return;
    }
  });
}

function showMessage(message, type) {
  const messageEl = document.querySelector('.message');
  if (messageEl) {
    messageEl.textContent = message;
    messageEl.className = `message ${type} show`;
    
    setTimeout(() => {
      messageEl.classList.remove('show');
    }, 5000);
  }
}

function checkAuthState() {
  const user = JSON.parse(localStorage.getItem('stackly_user'));
  const currentPage = window.location.pathname;
  
  // Update dashboard user info
  if (user) {
    document.querySelectorAll('.user-name').forEach(el => {
      el.textContent = user.name;
    });
    document.querySelectorAll('.user-role').forEach(el => {
      el.textContent = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    });
    document.querySelectorAll('.user-avatar').forEach(el => {
      el.textContent = user.avatar;
    });
    document.querySelectorAll('.user-email').forEach(el => {
      el.textContent = user.email;
    });
  }
  
  // Protect dashboard routes
  if (currentPage.includes('dashboard') && !user) {
    window.location.href = 'login.html';
  }
  
  // Redirect if wrong role
  if (currentPage.includes('admin-dashboard') && user && user.role !== 'admin') {
    window.location.href = 'user-dashboard.html';
  }
}

// ========================================
// DASHBOARD
// ========================================

function initDashboard() {
  // Initialize chart bars with random heights
  const chartBars = document.querySelectorAll('.chart-bar');
  chartBars.forEach(bar => {
    const height = bar.dataset.height || Math.floor(Math.random() * 60 + 30);
    setTimeout(() => {
      bar.style.height = height + '%';
    }, 300);
  });
  
  // Progress bars
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  progressBars.forEach(bar => {
    const width = bar.dataset.width || '70';
    setTimeout(() => {
      bar.style.width = width + '%';
    }, 500);
  });
  
  // Mobile sidebar toggle
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
}

// ========================================
// PARTICLES
// ========================================

function initParticles() {
  const containers = document.querySelectorAll('.particles');
  
  containers.forEach(container => {
    const count = parseInt(container.dataset.particles) || 20;
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 6 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${Math.random() * 0.3 + 0.1};
      `;
      
      container.appendChild(particle);
    }
  });
}

// ========================================
// PARALLAX EFFECT
// ========================================

function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const yPos = -(scrollY * speed);
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ========================================
// CURSOR EFFECT
// ========================================

function initCursorEffect() {
  // Only on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s, opacity 0.3s;
    mix-blend-mode: difference;
  `;
  
  document.body.appendChild(cursor);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX - 10 + 'px';
    cursor.style.top = cursorY - 10 + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Hover effect on interactive elements
  document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
      cursor.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.opacity = '1';
    });
  });
}

// ========================================
// MAGNETIC BUTTON
// ========================================

function initMagneticButtons() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  
  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ========================================
// MARQUEE SPEED ON SCROLL
// ========================================

function initMarqueeScroll() {
  const marqueeTracks = document.querySelectorAll('.marquee-track');
  let scrollSpeed = 1;
  
  window.addEventListener('scroll', () => {
    const newSpeed = 1 + Math.abs(window.scrollY - (window.lastScrollY || 0)) * 0.05;
    scrollSpeed = Math.min(newSpeed, 3);
    window.lastScrollY = window.scrollY;
    
    marqueeTracks.forEach(track => {
      track.style.animationDuration = (30 / scrollSpeed) + 's';
    });
  });
}

// ========================================


// ========================================
// SCROLL TO TOP
// ========================================

function initScrollToTop() {
  const scrollBtn = document.querySelector('.scroll-top');
  
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ========================================
// INIT ALL
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFAQ();
  initPricingToggle();
  initAuth();
  initDashboard();
  initAOS();
  initTypingEffect();
  initTextReveal();
  initCounters();
  initParticles();
  initParallax();
  initCursorEffect();
  initMagneticButtons();
  initMarqueeScroll();
  initContactForm();
  initScrollToTop();
  
  // GSAP animations (if GSAP is loaded)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    initHeroAnimations();
    initScrollAnimations();
  }
  
  // Page load animation
  document.body.classList.add('loaded');
});

// Preloader
document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500);
    }, 1500);
  }
});
