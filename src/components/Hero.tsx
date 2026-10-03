import { useEffect, useState } from 'react';
import { ArrowDown, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = portfolioData.roles;
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      {/* Background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Stars */}
      <div className="stars-field" aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      <div className="container hero-inner">
        {/* Avatar / Illustration */}
        <div className="hero-visual animate-float">
          <div className="avatar-orbit-wrapper animate-pulse-glow">
            <div className="avatar-ring" />
            <div className="avatar-core">
              {portfolioData.avatar ? (
                <img
                  src={portfolioData.avatar}
                  alt={portfolioData.name}
                  className="avatar-img"
                  onError={(e) => {
                    // Fallback se a imagem não existir ainda
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const svg = e.currentTarget.nextElementSibling as HTMLElement;
                    if (svg) svg.style.display = 'block';
                  }}
                />
              ) : null}
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="avatar-svg"
                style={{ display: portfolioData.avatar ? 'none' : 'block' }}
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#22d3ee" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                {/* Body */}
                <circle cx="100" cy="100" r="100" fill="#13131e" />
                <circle cx="100" cy="80" r="36" fill="url(#grad2)" opacity="0.9" />
                <ellipse cx="100" cy="160" rx="55" ry="40" fill="url(#grad1)" opacity="0.85" />
                {/* Highlights */}
                <circle cx="88" cy="74" r="5" fill="white" opacity="0.4" />
                <circle cx="100" cy="100" r="100" fill="url(#grad1)" opacity="0.05" />
              </svg>
            </div>
            {/* Orbiting icons */}
            <div className="orbit-item orbit-1">
              <span>⚛️</span>
            </div>
            <div className="orbit-item orbit-2">
              <span>📘</span>
            </div>
            <div className="orbit-item orbit-3">
              <span>🎨</span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={13} />
            <span>{portfolioData.available ? 'Disponível para oportunidades' : 'Ocupado no momento'}</span>
          </div>

          <h1 className="hero-title">
            Olá, eu sou <br />
            <span className="gradient-text">{portfolioData.name}</span>
          </h1>

          <div className="hero-role">
            <span className="font-mono role-prefix">&gt; </span>
            <span className="role-text font-mono">{displayed}</span>
            <span className="cursor font-mono" aria-hidden="true">|</span>
          </div>

          <p className="hero-tagline">{portfolioData.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" id="hero-cta-projects" className="btn btn-primary">
              Ver Projetos
              <ArrowDown size={16} />
            </a>
            <a href="#contact" id="hero-cta-contact" className="btn btn-outline">
              Falar comigo
            </a>
          </div>

          <div className="hero-socials">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" id="hero-github" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" id="hero-linkedin" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${portfolioData.email}`} id="hero-email" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
