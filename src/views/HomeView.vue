<template>
  <main class="home-view">
    <!-- Hero Section -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <h1 id="hero-title">Transporte Ganadero con Bienestar Animal</h1>
        <p class="hero-subtitle">
          Ofrecemos soluciones seguras, humanas y eficientes para el transporte de tu ganado.
        </p>
        <button class="btn btn-large btn-primary" aria-label="Solicitar cotización">
          Solicitar cotización
        </button>
      </div>
    </section>

    <!-- Beneficios -->
    <section class="section" aria-labelledby="benefits-title">
      <div class="container">
        <h2 id="benefits-title">Beneficios de Nuestro Servicio</h2>
        <div class="cards-grid">
          <div class="card" role="region" aria-labelledby="card1-title">
            <h3 id="card1-title">Bienestar Animal Garantizado</h3>
            <p>Camiones con ventilación, piso antideslizante y zonas de descanso para reducir el estrés.</p>
          </div>
          <div class="card" role="region" aria-labelledby="card2-title">
            <h3 id="card2-title">Monitoreo en Tiempo Real</h3>
            <p>Seguimiento GPS y sensores de temperatura para mayor control y tranquilidad.</p>
          </div>
          <div class="card" role="region" aria-labelledby="card3-title">
            <h3 id="card3-title">Cumplimiento Normativo</h3>
            <p>Operamos bajo las normas internacionales de transporte ganadero (OIE, SENASA, etc.).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section class="section bg-light" aria-labelledby="services-title">
      <div class="container">
        <h2 id="services-title">Nuestros Servicios</h2>
        <ul class="services-list">
          <li>Transporte nacional e internacional de ganado bovino, porcino y ovino</li>
          <li>Logística especializada para ferias, exportación y traslados de emergencia</li>
          <li>Asesoría técnica en manejo pre y post transporte</li>
        </ul>
      </div>
    </section>

    <!-- Galería (visual) -->
    <section class="section" aria-labelledby="gallery-title">
      <div class="container">
        <h2 id="gallery-title">Nuestros Vehículos</h2>
        <div class="gallery">
          <img 
            src="https://via.placeholder.com/400x250/e0f7fa/006064?text=Camión+Ganadero+1" 
            alt="Camión ganadero con sistema de ventilación y rampa de carga segura"
          />
          <img 
            src="https://via.placeholder.com/400x250/e8f5e9/2e7d32?text=Interior+Camión" 
            alt="Interior de camión con piso antideslizante y separadores para animales"
          />
        </div>
      </div>
    </section>

    <!-- Contacto (visual) -->
    <section class="section bg-light" aria-labelledby="contact-title">
      <div class="container">
        <h2 id="contact-title">Contáctanos</h2>
        <p>¿Listo para garantizar el bienestar de tu ganado en tránsito?</p>
        <button class="btn btn-primary" aria-label="Ir a la página de contacto">
          Ir a contacto
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
// Prototipo visual: sin lógica funcional
</script>

<style scoped>
.home-view {
  width: 100%;
}

/* Hero */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://via.placeholder.com/1600x600/e0f7fa/006064?text=Transporte+Ganadero') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 5rem 1rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
}

/* Secciones generales */
.section {
  padding: 4rem 1rem;
}

.bg-light {
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  color: #2e7d32;
}

/* Tarjetas de beneficios */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card h3 {
  color: #1b5e20;
  margin-top: 0;
}

/* Lista de servicios */
.services-list {
  max-width: 700px;
  margin: 2rem auto;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Galería */
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.gallery img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Botones */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary {
  background-color: #2e7d32;
  color: white;
}

.btn-primary:hover {
  background-color: #1b5e20;
}

.btn-large {
  font-size: 1.1rem;
  padding: 1rem 2rem;
}

/* Responsive básico */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.7rem;
  }
}
</style>