import { Mail, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <Code2 size={18} />
          <span className="font-mono">Portfolio</span>
        </div>

        <p className="footer-text">
          Feito com <Heart size={13} className="heart-icon" /> por {portfolioData.name} &bull; {year}
        </p>

        <div className="footer-socials">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" id="footer-github" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" id="footer-linkedin" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${portfolioData.email}`} id="footer-email" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
