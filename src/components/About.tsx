import { MapPin, Coffee, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import './About.css';

const stats = [
  { value: '2+', label: 'Anos de experiência' },
  { value: '5+', label: 'Projetos entregues' },
  { value: '8+', label: 'Tecnologias dominadas' },
  { value: '∞', label: 'Café consumido' },
];

const traits = [
  { icon: <Heart size={18} />, text: 'Apaixonado por Desenvolvimento' },
  { icon: <Coffee size={18} />, text: 'Orientado a café' },
  { icon: <MapPin size={18} />, text: portfolioData.location },
];

export default function About() {
  return (
    <section id="about">
      <div className="container about-inner">
        {/* Card visual */}
        <div className="about-card glass">
          <div className="about-card-top">
            <div className="about-avatar">
              {portfolioData.avatar ? (
                <img
                  src={portfolioData.avatar}
                  alt={portfolioData.name}
                  className="about-avatar-img"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const svg = e.currentTarget.nextElementSibling as HTMLElement;
                    if (svg) svg.style.display = 'block';
                  }}
                />
              ) : null}
              <svg
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: portfolioData.avatar ? 'none' : 'block' }}
              >
                <defs>
                  <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
                <circle cx="60" cy="60" r="60" fill="#1c1c2e" />
                <circle cx="60" cy="48" r="22" fill="url(#aboutGrad)" opacity="0.9" />
                <ellipse cx="60" cy="96" rx="34" ry="25" fill="url(#aboutGrad)" opacity="0.85" />
              </svg>
            </div>
            <div className="about-name-block">
              <h3>{portfolioData.name}</h3>
              <p className="font-mono">{portfolioData.role}</p>
              <span className={`status-dot ${portfolioData.available ? 'available' : 'busy'}`}>
                <span className="dot-ring" />
                {portfolioData.available ? 'Disponível' : 'Ocupado'}
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Traits */}
          <div className="about-traits">
            {traits.map((t) => (
              <div key={t.text} className="trait">
                <span className="trait-icon">{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="about-content">
          <p className="section-label">Sobre mim</p>
          <h2 className="section-title">
            Quem é João Milone?
          </h2>

          <div className="about-bio">
            <p>
              {portfolioData.bio}
            </p>
            <p>
              {portfolioData.bio2}
            </p>
            <p>
              {portfolioData.bio3}
            </p>
            <p>
              {portfolioData.bio4}
            </p>
          </div>

          <div className="about-actions">
            <a
              href="#contact"
              id="about-cta"
              className="btn btn-primary"
            >
              Vamos conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
