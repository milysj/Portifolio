import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">Educação</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Formação & Aprendizado</h2>
        <p  style={{ textAlign: 'center', marginBottom: '48px'}}>
          Minha jornada de aprendizado formal e as formações que moldaram minha visão como desenvolvedor.
        </p>

        <div className="edu-timeline">
          {portfolioData.education.map((item, i) => (
            <div
              key={item.id}
              id={`edu-${item.id}`}
              className={`edu-item ${i % 2 === 0 ? 'edu-left' : 'edu-right'}`}
            >
              <div className="edu-card glass">
                <div className="edu-icon">
                  {i === 0 ? <GraduationCap size={20} /> : <BookOpen size={20} />}
                </div>
                <div className="edu-body">
                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-institution">{item.institution}</p>
                  <div className="edu-period">
                    <Calendar size={13} />
                    <span className="font-mono">{item.period}</span>
                  </div>
                  <div className="edu-desc">
                    {Array.isArray(item.description) ? (
                      item.description.map((desc, idx) => (
                        <p key={idx}>{desc}</p>
                      ))
                    ) : (
                      <p>{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="edu-node" />
            </div>
          ))}
          <div className="edu-line" />
        </div>
      </div>
    </section>
  );
}
