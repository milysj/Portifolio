export const portfolioData = {
  name: 'João Milone',
  avatar: './avatar.jpg',
  role: 'Desenvolvedor Full Stack',
  roles: ['Desenvolvedor Full Stack', 'Desenvolvedor Frontend', 'Desenvolvedor Backend'],
  tagline: 'Criando soluções web modernas, gamificadas e escaláveis com React, Next.js e TypeScript',
  bio: 'Desenvolvedor Full Stack apaixonado por criar interfaces modernas, sistemas gamificados e APIs RESTful de alta performance. Com domínio de TypeScript, React, Next.js, Node.js e MongoDB, construo aplicações completas com foco em acessibilidade (WCAG), testes automatizados e integração com Inteligência Artificial.',
  bio2: 'Tenho sólida vivência no ecossistema JavaScript e TypeScript, atuando tanto no frontend com React e Next.js, quanto no backend com Node.js e MongoDB. Minha prioridade no desenvolvimento vai além de fazer o código funcionar: prezo fortemente por boas práticas como Clean Code, acessibilidade na web (diretrizes WCAG), arquiteturas escaláveis e cobertura de testes automatizados.',
  bio3: 'Tenho especial interesse em projetos que unem inovação e engajamento, como aplicações gamificadas e integração com modelos de Inteligência Artificial generativa (Google Gemini e técnicas de RAG). Acredito que a tecnologia deve ser acessível e engajadora para todos.',
  bio4: 'Atualmente curso Desenvolvimento de Software Multiplataforma na FATEC Votorantim, onde aprofundo constantemente meus conhecimentos em engenharia de software, DevOps e metodologias ágeis. Estou em busca de novas oportunidades e desafios profissionais onde eu possa colaborar ativamente em equipe e gerar impacto real.',
  email: 'joaogmilone@gmail.com',
  github: 'https://github.com/milysj',
  linkedin: 'https://www.linkedin.com/in/joaomilone',
  location: 'Votorantim, SP - Brasil',
  available: true,

  experience: [
    {
      id: 1,
      role: 'Estagiário de TI (Help Desk & Infraestrutura)',
      company: 'Prefeitura Municipal de Votorantim',
      period: 'Abr. de 2026 - Presente',
      location: 'Votorantim, SP (Presencial)',
      description: [
        'Atuação no suporte técnico e help desk aos usuários da administração pública municipal, prestando atendimento presencial e remoto para diagnóstico ágil e resolução de incidentes em sistemas corporativos, softwares e estações de trabalho.',
        'Execução de manutenção preventiva e corretiva de computadores e periféricos, realizando formatação, montagem de máquinas, instalação de sistemas operacionais e configuração de ferramentas essenciais para os servidores públicos.',
        'Suporte direto à infraestrutura de redes locais (LAN) e conectividade à internet, atuando na montagem e crimpagem de cabeamento estruturado, testes de conexão e configuração de roteadores e switches para assegurar estabilidade na rede.',
      ],
      skills: ['Help Desk', 'Hardware & Manutenção', 'Redes de Computadores', 'Sistemas Operacionais', 'Suporte ao Usuário', 'Infraestrutura de TI'],
    },
    {
      id: 2,
      role: 'Atendente Operacional',
      company: 'Bravo Serviços e Construções',
      period: 'Dez. de 2023 - Mar. de 2024',
      location: 'Votorantim, SP',
      description: [
        'Atendimento e orientação telefônica aos munícipes para acionamento de ambulâncias públicas de Votorantim, gerenciando situações de urgência com agilidade, calma e precisão na coleta de informações.',
        'Controle e vigilância noturna de atendimentos, registrando ocorrências e repassando chamados com rapidez para a equipe de socorristas, garantindo eficácia no fluxo de resposta.',
        'Aprimoramento de soft skills fundamentais, como comunicação assertiva sob pressão, empatia no atendimento humanizado, trabalho em equipe e disciplina operacional.',
      ],
      skills: ['Atendimento ao Público', 'Comunicação Assertiva', 'Gestão de Ocorrências', 'Trabalho sob Pressão', 'Organização'],
    },
  ],

  education: [
    {
      id: 1,
      degree: 'Desenvolvimento de Software Multiplataforma',
      institution: 'FATEC Votorantim',
      period: 'Em andamento',
      description: [
        'Graduação superior com foco no ciclo completo de desenvolvimento de software moderno, abrangendo desde o planejamento e arquitetura de sistemas até a entrega contínua para plataformas Web, Mobile e Cloud.',
        'Durante a graduação, aplico metodologias ágeis (Scrum/Kanban) em projetos interdisciplinares, explorando conteinerização com Docker, pipelines de CI/CD via GitHub Actions, segurança da informação e integração de Inteligência Artificial aplicada a problemas reais.',
      ]
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

