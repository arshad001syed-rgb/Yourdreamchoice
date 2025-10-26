class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }
        a:hover {
          color: #8b5cf6;
          background: rgba(255, 255, 255, 0.05);
        }
        .active {
          color: #8b5cf6;
          background: rgba(139, 92, 246, 0.1);
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          .nav-links {
            flex-direction: column;
            width: 100%;
          }
          a {
            width: 100%;
            justify-content: center;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="compass"></i>
          Cosmic Quasar
        </a>
        <ul class="nav-links">
          <li><a href="/"><i data-feather="home"></i> Home</a></li>
          <li><a href="apod.html"><i data-feather="image"></i> APOD</a></li>
          <li><a href="iss.html"><i data-feather="map"></i> ISS Tracker</a></li>
          <li><a href="about.html"><i data-feather="info"></i> About</a></li>
          <li><a href="contact.html"><i data-feather="phone"></i> Contact</a></li>
          <li><a href="clients.html"><i data-feather="users"></i> Clients</a></li>
</ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
