class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(15, 23, 42, 0.8);
          color: white;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-links a {
          color: #8b5cf6;
          text-decoration: none;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-links a:hover {
          color: #ec4899;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        .social-links a {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .social-links a:hover {
          background: #8b5cf6;
          transform: translateY(-3px);
        }
        .copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="/"><i data-feather="home"></i> Home</a>
            <a href="apod.html"><i data-feather="image"></i> APOD</a>
            <a href="iss.html"><i data-feather="map"></i> ISS Tracker</a>
            <a href="about.html"><i data-feather="info"></i> About</a>
            <a href="contact.html"><i data-feather="phone"></i> Contact</a>
            <a href="clients.html"><i data-feather="users"></i> Clients</a>
</div>
          <div class="social-links">
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
            <a href="#"><i data-feather="instagram"></i></a>
          </div>
          <p class="copyright">&copy; 2024 Cosmic Quasar Explorer. All rights reserved. Made with <i data-feather="heart" class="text-red-500"></i> for space enthusiasts.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
