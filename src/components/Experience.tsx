import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Experiência</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Trajetória Profissional
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '48px' }}>
          Atuações práticas em projetos reais e acadêmicos, unindo resolução de problemas e entrega de valor.
        </p>

        <div className="exp-timeline">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.id}
              id={`exp-${exp.id}`}
              className={`exp-item ${index % 2 === 0 ? 'exp-left' : 'exp-right'}`}
            >
              <div className="exp-card glass">
                <div className="exp-header">
                  <div className="exp-icon">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-meta">
                      <span className="exp-company">
                        <Building2 size={14} />
                        {exp.company}
                      </span>
                      {exp.location && (
                        <span className="exp-location">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      )}
                      <span className="exp-period font-mono">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="exp-desc">
                  {Array.isArray(exp.description) ? (
                    exp.description.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>

                {exp.skills && exp.skills.length > 0 && (
                  <div className="exp-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="exp-node" />
            </div>
          ))}
          <div className="exp-line" />
        </div>
      </div>
    </section>
  );
}
