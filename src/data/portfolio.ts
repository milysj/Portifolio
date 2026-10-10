export const portfolioData = {
  name: 'João Milone',
  avatar: './avatar.jpg',
  role: 'Desenvolvedor Full Stack',
  roles: ['Desenvolvedor Full Stack', 'Desenvolvedor Frontend', 'Desenvolvedor Backend'],
  tagline: 'Criando soluções web modernas, gamificadas e escaláveis com React, Next.js e TypeScript',
  bio: 'Desenvolvedor Full Stack apaixonado por criar interfaces modernas, sistemas gamificados e APIs RESTful de alta performance. Com domínio de TypeScript, React, Next.js, Node.js e MongoDB, construo aplicações completas com foco em acessibilidade (WCAG), testes automatizados e integração com Inteligência Artificial.',
  email: 'joaogmilone@gmail.com',
  github: 'https://github.com/milysj',
  linkedin: 'https://www.linkedin.com/in/joaomilone',
  location: 'Votorantim, SP - Brasil',
  available: true,

  education: [
    {
      id: 1,
      degree: 'Desenvolvimento de Software Multiplataforma',
      institution: 'FATEC Votorantim',
      period: 'Em andamento',
      description: 'Formação superior focada na construção de soluções para Web, Mobile e Desktop. Abrange metodologias ágeis, DevOps, Inteligência Artificial, segurança da informação e análise de dados para o desenvolvimento de sistemas escaláveis.',
    }
  ],


  skills: {
    frontend: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js 15', level: 88 },
      { name: 'Tailwind CSS v4', level: 85 },
      { name: 'HTML5 & CSS3', level: 95 },
    ],
    backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Google Gemini AI / RAG', level: 78 },
    ],
    tools: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker & Compose', level: 80 },
      { name: 'Jest / Vitest', level: 82 },
      { name: 'GitHub Actions (CI/CD)', level: 78 },
      { name: 'Vercel Deploy', level: 88 },
    ],
    other: ['Gamificação', 'RAG / IA Integrada', '2FA Autenticação', 'WCAG Acessibilidade', 'Clean Code', 'SonarCloud', 'Better Stack Observability'],
  },

  techIcons: ['⚛️', '📘', '⚡', '🍃', '🐳', '🚀'],

  projects: [
    {
      id: 1,
      title: 'EstudeMy — Front-End',
      description: 'Plataforma de estudos gamificada e interativa construída com Next.js 15 e Tailwind CSS v4. Inclui trilhas de conhecimento, sistema de conquistas, chuva de moedas animada (CoinRain), ranking dinâmico de alunos e total acessibilidade (WCAG).',
      tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Jest', 'WCAG'],
      github: 'https://github.com/milysj/Front-End-TS',
      live: 'https://front-end-ts-tau.vercel.app',
      featured: true,
      color: '#8b5cf6',
    },
    {
      id: 2,
      title: 'EstudeMy — Back-End',
      description: 'API RESTful de alta performance desenvolvida em Node.js com Express e TypeScript. Conta com inteligência artificial via Google Gemini (RAG), autenticação com duplo fator (2FA), banco de dados MongoDB, observabilidade Better Stack e pipeline CI/CD.',
      tags: ['Node.js', 'TypeScript', 'Express', 'MongoDB', 'Gemini AI', 'Jest'],
      github: 'https://github.com/milysj/Back-End-TS',
      live: 'https://github.com/milysj/Back-End-TS',
      featured: true,
      color: '#22d3ee',
    },
    {
      id: 3,
      title: 'Full Stack Estude.my',
      description: 'Versão monorepo integrando o ecossistema completo do EstudeMy (frontend + backend) em uma solução coesa e implantada na Vercel.',
      tags: ['React', 'Node.js', 'JavaScript', 'Vercel', 'Full Stack'],
      github: 'https://github.com/milysj/Full-Stack-Estude.my',
      live: 'https://full-stack-estude-my.vercel.app',
      featured: true,
      color: '#34d399',
    },
    {
      id: 4,
      title: 'Atv DevOps 1 — CI/CD',
      description: 'Projeto prático de Integração e Entrega Contínua para FATEC, utilizando GitHub Actions para testes automatizados, verificação de qualidade de código e empacotamento com Docker.',
      tags: ['DevOps', 'GitHub Actions', 'Docker', 'CI/CD', 'Quality Gate'],
      github: 'https://github.com/milysj/Atv-devops1',
      live: 'https://github.com/milysj/Atv-devops1',
      featured: false,
      color: '#f472b6',
    },
  ],
};

