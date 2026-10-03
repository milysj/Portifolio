import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio';
import './Skills.css';

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Ferramentas',
};

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Meu stack tecnológico</h2>
        <p style={{ textAlign: 'center', marginBottom: '48px' }}>
          Tecnologias e ferramentas que uso diariamente para construir produtos digitais incríveis.
        </p>

        <div className="skills-grid">
          {(['frontend', 'backend', 'tools'] as const).map((cat) => (
            <div key={cat} className="skill-category glass">
              <h3 className="skill-cat-title">
                <span className="cat-dot" />
                {categoryLabels[cat]}
              </h3>
              <div className="skill-bars">
                {portfolioData.skills[cat].map((skill, i) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct font-mono">{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          '--progress-width': `${skill.level}%`,
                          width: visible ? `${skill.level}%` : '0%',
                          transitionDelay: `${i * 0.1}s`,
                        } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other skills */}
        <div className="other-skills">
          <h3 className="other-title font-mono">// Também trabalho com</h3>
          <div className="tags-cloud">
            {portfolioData.skills.other.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
