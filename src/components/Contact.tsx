import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import './Contact.css';

export default function Contact() {


  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Contato</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Vamos trabalhar juntos?</h2>
        <p style={{ textAlign: 'center', marginBottom: '48px' }}>
          Estou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Entre em contato!
        </p>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <div className="contact-cards">
              <a
                href={`mailto:${portfolioData.email}`}
                id="contact-email"
                className="contact-card glass"
              >
                <div className="cc-icon"><Mail size={20} /></div>
                <div>
                  <p className="cc-label">Email</p>
                  <p className="cc-value">{portfolioData.email}</p>
                </div>
              </a>

              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github"
                className="contact-card glass"
              >
                <div className="cc-icon"><GithubIcon size={20} /></div>
                <div>
                  <p className="cc-label">GitHub</p>
                  <p className="cc-value">github.com/milysj</p>
                </div>
              </a>

              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                className="contact-card glass"
              >
                <div className="cc-icon cc-icon-blue"><LinkedinIcon size={20} /></div>
                <div>
                  <p className="cc-label">LinkedIn</p>
                  <p className="cc-value">linkedin.com/in/joaomilone</p>
                </div>
              </a>

              <div className="contact-card glass contact-card-static">
                <div className="cc-icon cc-icon-green"><MapPin size={20} /></div>
                <div>
                  <p className="cc-label">Localização</p>
                  <p className="cc-value">{portfolioData.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
