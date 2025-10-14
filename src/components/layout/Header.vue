<template>
  <header 
    class="floating-header" 
    :class="{ 'scrolled': isScrolled }"
    role="banner"
    aria-label="Navegación principal"
  >
    <div class="header-container">
      <!-- Logo -->
      <div class="logo-section">
        <router-link to="/" class="logo-link" aria-label="Ir a inicio">
          <div class="logo">
            <div class="logo-icon">
              <img 
                src="Logo-quebracho.png" 
                alt="Quebracho Transportes de ganado - logo de la empresa"
                class="logo-image"
              />
            </div>
            <span class="logo-text">Quebracho Transportes</span>
          </div>
        </router-link>
      </div>

      <!-- Navegación Desktop -->
      <nav class="nav-desktop" aria-label="Navegación principal">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/servicios" class="nav-link">
              Servicios
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link">
              Contacto
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/beneficios" class="nav-link">
              Beneficios
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Botones de Acción Desktop -->
      <div class="actions-desktop">
        <button 
          class="btn-account" 
          @click="handleAccount"
          aria-label="Abrir menú de cuenta"
        >
          <span class="account-icon">👤</span>
          <span class="account-text">Cuenta</span>
        </button>
        
        <button 
          class="btn-quote" 
          @click="handleQuote"
          aria-label="Solicitar cotización"
        >
          Solicitar Cotización
        </button>
      </div>

      <!-- Menú Hamburguesa Mobile -->
      <div class="mobile-menu">
        <button 
          class="hamburger-btn"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Abrir menú de navegación"
          aria-controls="mobile-nav"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Menú Mobile Desplegable -->
    <transition name="slide-down">
      <nav 
        v-if="isMobileMenuOpen" 
        class="nav-mobile"
        id="mobile-nav"
        aria-label="Navegación móvil"
      >
        <ul class="nav-mobile-list">
          <li class="nav-mobile-item">
            <router-link 
              to="/servicios" 
              class="nav-mobile-link"
              @click="closeMobileMenu"
            >
              Servicios
            </router-link>
          </li>
          <li class="nav-mobile-item">
            <router-link 
              to="/contacto" 
              class="nav-mobile-link"
              @click="closeMobileMenu"
            >
              Contacto
            </router-link>
          </li>
          <li class="nav-mobile-item">
            <router-link 
              to="/beneficios" 
              class="nav-mobile-link"
              @click="closeMobileMenu"
            >
              Beneficios
            </router-link>
          </li>
          <li class="nav-mobile-item">
            <button 
              class="nav-mobile-btn"
              @click="handleAccountMobile"
            >
              <span class="mobile-btn-icon">👤</span>
              Mi Cuenta
            </button>
          </li>
          <li class="nav-mobile-item">
            <button 
              class="nav-mobile-btn quote"
              @click="handleQuoteMobile"
            >
              Solicitar Cotización
            </button>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'FloatingHeader',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    
    handleAccount() {
      // Lógica para cuenta/iniciar sesión
      console.log('Abrir modal de cuenta')
      this.$emit('open-account-modal')
    },
    
    handleQuote() {
      // Lógica para solicitar cotización
      console.log('Abrir formulario de cotización')
      this.$emit('open-quote-modal')
    },
    
    handleAccountMobile() {
      this.handleAccount()
      this.closeMobileMenu()
    },
    
    handleQuoteMobile() {
      this.handleQuote()
      this.closeMobileMenu()
    }
  }
}
</script>

<style scoped>
.floating-header {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1200px;
  background: #4A3C30;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.floating-header.scrolled {
  top: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo Styles */
.logo-section {
  flex-shrink: 0;
}

.logo-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  padding: 0.25rem;
  transition: all 0.3s ease;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
}

.logo-text {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.1rem;
  white-space: nowrap;
}

/* Navegación Desktop */
.nav-desktop {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: #E8DECD;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #FFFFFF;
  background: rgba(255, 255, 255, 0.1);
}

/* Botones de Acción Desktop */
.actions-desktop {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn-account {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #E8DECD;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.btn-account:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
}

.btn-quote {
  background: linear-gradient(135deg, #D4A574, #B08D5F);
  color: #4A3C30;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-quote:hover {
  background: linear-gradient(135deg, #E6B98F, #C9A87A);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 165, 116, 0.3);
}

/* Menú Hamburguesa Mobile */
.mobile-menu {
  display: none;
}

.hamburger-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition: all 0.3s ease;
}

.hamburger-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: #E8DECD;
  transition: all 0.3s ease;
}

.hamburger-btn[aria-expanded="true"] .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-btn[aria-expanded="true"] .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn[aria-expanded="true"] .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Menú Mobile Desplegable */
.nav-mobile {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #4A3C30;
  border-radius: 0 0 20px 20px;
  margin-top: 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.nav-mobile-list {
  list-style: none;
  margin: 0;
  padding: 1rem 0;
}

.nav-mobile-item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-mobile-item:last-child {
  border-bottom: none;
}

.nav-mobile-link,
.nav-mobile-btn {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  color: #E8DECD;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-align: left;
}

.nav-mobile-link:hover,
.nav-mobile-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}

.nav-mobile-btn.quote {
  background: linear-gradient(135deg, #D4A574, #B08D5F);
  color: #4A3C30;
  font-weight: 600;
  margin: 0.5rem 1rem;
  border-radius: 25px;
  justify-content: center;
}

.nav-mobile-btn.quote:hover {
  background: linear-gradient(135deg, #E6B98F, #C9A87A);
}

.mobile-btn-icon {
  margin-right: 0.75rem;
  font-size: 1.1rem;
}

/* Transiciones */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 1024px) {
  .floating-header {
    width: 90%;
    padding: 0.75rem 1rem;
  }
  
  .nav-list {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .floating-header {
    width: 95%;
    top: 10px;
    border-radius: 25px;
    padding: 0.5rem 1rem;
  }
  
  .nav-desktop,
  .actions-desktop {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .logo-text {
    font-size: 1rem;
  }
  
  .logo-icon {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .floating-header {
    width: 98%;
    padding: 0.5rem;
  }
  
  .logo-text {
    font-size: 0.9rem;
  }
  
  .logo-icon {
    width: 35px;
    height: 35px;
  }
  
  .nav-mobile-link,
  .nav-mobile-btn {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .floating-header,
  .nav-link,
  .btn-account,
  .btn-quote,
  .hamburger-btn,
  .nav-mobile-link,
  .nav-mobile-btn {
    transition: none;
  }
}

/* Focus styles para accesibilidad */
.nav-link:focus,
.btn-account:focus,
.btn-quote:focus,
.hamburger-btn:focus,
.nav-mobile-link:focus,
.nav-mobile-btn:focus {
  outline: 2px solid #D4A574;
  outline-offset: 2px;
}

/* Focus específico para el logo */
.logo-link:focus {
  outline: 2px solid #D4A574;
  outline-offset: 4px;
  border-radius: 50px;
}
</style>