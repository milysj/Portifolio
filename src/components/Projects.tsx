import { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolio';
import './Projects.css';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.featured);

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projetos</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>O que eu construí</h2>
        <p style={{ textAlign: 'center', marginBottom: '48px' }}>
          Uma seleção dos projetos que mais me orgulho. Cada um representa um desafio único e aprendizados valiosos.
        </p>

        <div className="projects-grid">
          {displayed.map((project, i) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="project-card glass"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card top bar */}
              <div
                className="project-accent-bar"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              {/* Mock browser preview */}
              <div className="project-preview">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <div className="browser-url font-mono">localhost:3000</div>
                </div>
                <div
                  className="preview-content"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}22, var(--bg-card))`,
                  }}
                >
                  <div className="preview-grid">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <div
                        key={n}
                        className="preview-block"
                        style={{
                          opacity: n % 3 === 0 ? 0.3 : n % 2 === 0 ? 0.6 : 1,
                          background: `${project.color}${n % 2 === 0 ? '33' : '22'}`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="preview-title-bar">
                    <span className="font-mono" style={{ color: project.color, fontSize: '0.7rem' }}>
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-link" id={`proj-github-${project.id}`}>
                    <GithubIcon size={16} />
                    Código
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-link proj-link-primary" id={`proj-live-${project.id}`}>
                    <ExternalLink size={16} />
                    Ver ao vivo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && portfolioData.projects.length > displayed.length && (
          <div className="projects-more">
            <button
              id="show-all-projects"
              className="btn btn-outline"
              onClick={() => setShowAll(true)}
            >
              Ver todos os projetos
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
