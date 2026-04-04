// Translation system
  const translations = {
    pt: {
      'hero-title': 'Sempre criando, jogando, programando, trabalhando e estudando!!',
      'hero-subtitle': 'Engenharia não é apenas sobre cálculos; é sobre transformar desafios em soluções viáveis',
      'btn-projects': './projetos',
      'btn-about': './sobre',
      'btn-resume': './curriculo',
      'about-title': '[ SOBRE ]',
      'about-text': 'Me chamo Carol, tenho 19 anos, atuo como Designer na PazLandim e sou estudante do 3º período de Engenharia da Computação na UNIFEV.\n\nMinha atuação combina visão criativa e raciocínio técnico: transformo ideias em experiências visuais funcionais e também em soluções de desenvolvimento com foco em resultado real.\n\nTenho experiência com Python, JavaScript, C/C++, HTML/CSS, automação e APIs, sempre buscando unir estética, usabilidade e performance em cada projeto.\n\nSou movida por aprendizado constante, inovação e execução com qualidade. Atualmente, busco oportunidades de estágio e projetos em que eu possa evoluir rápido, contribuir com impacto e construir soluções que façam diferença.',
      'card-projects': 'Projetos',
      'card-experience': 'Experiência',
      'featured-title': '[ PROJETO DESTAQUE ]',
      'featured-subtitle': 'Um exemplo de como transformo problema real em solução prática com foco em experiência e resultado.',
      'featured-problem-title': 'Problema',
      'featured-problem-text': 'Dificuldade para organizar atendimentos no Discord com demora para responder e pouca visibilidade dos pedidos.',
      'featured-solution-title': 'Solução',
      'featured-solution-text': 'Criei um bot com sistema de tickets, comandos simples e fluxo de atendimento mais claro para equipe e usuário.',
      'featured-impact-title': 'Impacto',
      'featured-impact-text': 'Atendimento mais rápido, melhor organização e experiência mais confiável para quem precisa de suporte.',
      'projects-title': '[ PROJETOS ]',
      'projects-intro': 'Explore por categoria para ver o tipo de solução que eu construo.',
      'filter-all': 'Todos',
      'filter-bot': 'Bots',
      'filter-web': 'Web',
      'filter-game': 'Jogos',
      'project1-title': 'Bot de Suporte para o Discord',
      'project1-desc': 'Sistema de atendimento automatizado com ticketing.',
      'project2-title': 'Site de animes',
      'project2-desc': 'Site para mostrar informações sobre animes.',
      'project3-title': 'Criação e recriação de jogos',
      'project3-desc': 'Desenvolvimento de jogos utilizando engines como Construct.',
      'quick-title': 'Vamos conversar?',
      'quick-desc': 'Se você busca alguém com energia para aprender rápido e executar com qualidade, eu topo conversar sobre estágio, projeto ou parceria.',
      'highlights-title': '[ DIFERENCIAIS ]',
      'highlight1-title': 'Mentalidade de produto',
      'highlight1-desc': 'Não foco só no código: penso em usabilidade, impacto real e evolução contínua.',
      'highlight2-title': 'Execução com consistência',
      'highlight2-desc': 'Transformo ideias em entregas práticas, com organização e atenção aos detalhes.',
      'highlight3-title': 'Aprendizado acelerado',
      'highlight3-desc': 'Aprendo rápido, testo hipóteses e evoluo solução com base em feedback.',
      'skills-title': '[ STACK ]',
      'terminal-header': 'Terminal - Iniciar Projeto',
      'terminal-welcome': 'Bem-vindo ao terminal de projetos!',
      'terminal-help': 'Digite \'help\' para ver opções ou \'iniciar\' para começar.'
    },
    en: {
      'hero-title': 'Always creating, playing, programming, working and studying!!',
      'hero-subtitle': 'Engineering is not just about calculations; it\'s about turning challenges into viable solutions',
      'btn-projects': './projects',
      'btn-about': './about',
      'btn-resume': './resume',
      'about-title': '[ ABOUT ]',
      'about-text': 'I\'m Carol Paz Landim, I work as a Designer at PazLandim, and I\'m currently in the 3rd semester of Computer Engineering at UNIFEV.\n\nMy work combines creative vision with technical thinking: I turn ideas into functional visual experiences and development solutions focused on real outcomes.\n\nI have experience with Python, JavaScript, C/C++, HTML/CSS, automation, and APIs, always aiming to balance aesthetics, usability, and performance in every project.\n\nI\'m driven by continuous learning, innovation, and high-quality execution. Right now, I\'m looking for internship opportunities and projects where I can grow fast, contribute with impact, and build solutions that make a difference.',
      'card-projects': 'Projects',
      'card-experience': 'Experience',
      'featured-title': '[ FEATURED PROJECT ]',
      'featured-subtitle': 'An example of how I turn a real problem into a practical solution focused on experience and outcomes.',
      'featured-problem-title': 'Problem',
      'featured-problem-text': 'Support requests on Discord were hard to organize, causing slower responses and low request visibility.',
      'featured-solution-title': 'Solution',
      'featured-solution-text': 'I built a support bot with a ticket system, simple commands, and a clearer service flow for team and users.',
      'featured-impact-title': 'Impact',
      'featured-impact-text': 'Faster responses, better organization, and a more reliable support experience.',
      'projects-title': '[ PROJECTS ]',
      'projects-intro': 'Explore by category to quickly see the kind of solutions I build.',
      'filter-all': 'All',
      'filter-bot': 'Bots',
      'filter-web': 'Web',
      'filter-game': 'Games',
      'project1-title': 'Discord Support Bot',
      'project1-desc': 'Automated support system with ticketing.',
      'project2-title': 'Anime Website',
      'project2-desc': 'Website to display information about animes.',
      'project3-title': 'Game Creation and Recreation',
      'project3-desc': 'Game development using engines like Construct.',
      'quick-title': 'Let us talk?',
      'quick-desc': 'If you are looking for someone with energy to learn fast and deliver quality work, I am open to internships, projects, and partnerships.',
      'highlights-title': '[ HIGHLIGHTS ]',
      'highlight1-title': 'Product mindset',
      'highlight1-desc': 'I focus beyond code by thinking about usability, real impact, and continuous improvement.',
      'highlight2-title': 'Consistent execution',
      'highlight2-desc': 'I turn ideas into practical deliverables with organization and attention to detail.',
      'highlight3-title': 'Fast learning',
      'highlight3-desc': 'I learn quickly, test hypotheses, and improve solutions based on feedback.',
      'skills-title': '[ STACK ]',
      'terminal-header': 'Terminal - Start Project',
      'terminal-welcome': 'Welcome to the project terminal!',
      'terminal-help': 'Type \'help\' to see options or \'start\' to begin.'
    }
  };

  let currentLanguage = localStorage.getItem('language') || 'pt';

  function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        if (element.tagName === 'BUTTON' || element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') {
          element.textContent = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Update language toggle button
    const langToggle = document.getElementById('language-toggle');
    if (lang === 'pt') {
      langToggle.innerHTML = '<span class="lang-current">PT</span><span style="opacity: 0.5;">|</span><span class="lang-other" style="opacity: 0.6;">EN</span>';
    } else {
      langToggle.innerHTML = '<span class="lang-other" style="opacity: 0.6;">PT</span><span style="opacity: 0.5;">|</span><span class="lang-current">EN</span>';
    }

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      if (lang === 'pt') {
        themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Escuro' : 'Claro';
      } else {
        themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Dark' : 'Light';
      }
    }

    // Update terminal text if visible
    updateTerminalText();
  }

  function updateTerminalText() {
    const isBR = currentLanguage === 'pt';
    const welcome = isBR ? 'Bem-vindo ao terminal de projetos!' : 'Welcome to the project terminal!';
    const help = isBR ? 'Digite \'help\' para ver opções ou \'iniciar\' para começar.' : 'Type \'help\' to see options or \'start\' to begin.';
    
    const terminalBody = document.getElementById('terminal-body');
    if (terminalBody && (terminalBody.innerHTML.includes('Bem-vindo') || terminalBody.innerHTML.includes('Welcome'))) {
      terminalBody.innerHTML = `> ${welcome}<br>> ${help}<br>>`;
    }
  }

  // Language toggle
  const languageToggle = document.getElementById('language-toggle');
  languageToggle.addEventListener('click', () => {
    setLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
  });

  // Initialize with saved language
  setLanguage(currentLanguage);

  const text = "Carol Paz Landim";
  let i = 0;

  function typing() {
    if (i < text.length) {
      document.getElementById("name").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (currentLanguage === 'pt') {
      themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Escuro' : 'Claro';
    } else {
      themeToggle.textContent = document.body.classList.contains('light-mode') ? 'Dark' : 'Light';
    }
  });

  // Skills Chart
  const ctx = document.getElementById('skillsChart').getContext('2d');
  const skillDetail = document.getElementById('skillDetail');
  const skillName = document.getElementById('skillName');
  const skillDescription = document.getElementById('skillDescription');
  const skillProjects = document.getElementById('skillProjects');
  const skillMetadata = {
    'Python': {
      pt: { desc: 'Automação, lógica e prototipação rápida de soluções.', projects: 'Projetos: bots, scripts e automações.' },
      en: { desc: 'Automation, logic, and rapid solution prototyping.', projects: 'Projects: bots, scripts, and automations.' }
    },
    'JavaScript': {
      pt: { desc: 'Interfaces web dinâmicas e experiências interativas.', projects: 'Projetos: sites e interações front-end.' },
      en: { desc: 'Dynamic web interfaces and interactive experiences.', projects: 'Projects: websites and front-end interactions.' }
    },
    'HTML/CSS': {
      pt: { desc: 'Estrutura e estilo com foco em estética e responsividade.', projects: 'Projetos: landing pages e portfólio.' },
      en: { desc: 'Structure and styling focused on aesthetics and responsiveness.', projects: 'Projects: landing pages and portfolio.' }
    },
    'C': {
      pt: { desc: 'Base sólida para desempenho e lógica de baixo nível.', projects: 'Projetos: exercícios e fundamentos de computação.' },
      en: { desc: 'Strong foundation for performance and low-level logic.', projects: 'Projects: exercises and computer science fundamentals.' }
    },
    'API': {
      pt: { desc: 'Integração de serviços e comunicação entre sistemas.', projects: 'Projetos: consumo de APIs e automações.' },
      en: { desc: 'Service integration and communication between systems.', projects: 'Projects: API consumption and automations.' }
    },
    'Design': {
      pt: { desc: 'Criação de interfaces visuais atraentes e funcionais.', projects: 'Projetos: interfaces de sites e protótipos.' },
      en: { desc: 'Creation of attractive and functional visual interfaces.', projects: 'Projects: website UI and prototypes.' }
    },
    'IA': {
      pt: { desc: 'Uso de ferramentas de IA para produtividade e inovação.', projects: 'Projetos: experimentos e apoio ao desenvolvimento.' },
      en: { desc: 'Use of AI tools for productivity and innovation.', projects: 'Projects: experiments and development support.' }
    },
    'Modelagem 3D': {
      pt: { desc: 'Construção de elementos visuais para aplicações criativas.', projects: 'Projetos: estudos visuais e assets.' },
      en: { desc: 'Building visual elements for creative applications.', projects: 'Projects: visual studies and assets.' }
    },
    'Hardware': {
      pt: { desc: 'Compreensão de componentes e integração físico-digital.', projects: 'Projetos: práticas acadêmicas e protótipos.' },
      en: { desc: 'Understanding components and physical-digital integration.', projects: 'Projects: academic practices and prototypes.' }
    },
    'Desenvolvimento de Games': {
      pt: { desc: 'Lógica de jogos, mecânicas e experiência do jogador.', projects: 'Projetos: criação e recriação de jogos.' },
      en: { desc: 'Game logic, mechanics, and player experience.', projects: 'Projects: game creation and recreation.' }
    }
  };
  
  const isDarkMode = !document.body.classList.contains('light-mode');
  
  const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Python', 'JavaScript', 'HTML/CSS', 'C', 'API', 'Design', 'IA', 'Modelagem 3D', 'Hardware', 'Desenvolvimento de Games'],
      datasets: [{
        label: 'Nível de Proficiência',
        data: [9, 8, 9, 7, 8, 8, 6, 5, 6, 7],
        backgroundColor: [
          'rgba(41, 92, 173, 0.8)',
          'rgba(72, 120, 196, 0.8)',
          'rgba(54, 100, 184, 0.8)',
          'rgba(48, 108, 190, 0.8)',
          'rgba(64, 126, 204, 0.8)',
          'rgba(0, 170, 210, 0.8)',
          'rgba(40, 88, 164, 0.8)',
          'rgba(41, 92, 173, 0.6)',
          'rgba(0, 150, 220, 0.8)',
          'rgba(56, 118, 196, 0.8)'
        ],
        borderColor: [
          'rgba(41, 92, 173, 1)',
          'rgba(72, 120, 196, 1)',
          'rgba(54, 100, 184, 1)',
          'rgba(48, 108, 190, 1)',
          'rgba(64, 126, 204, 1)',
          'rgba(0, 170, 210, 1)',
          'rgba(40, 88, 164, 1)',
          'rgba(41, 92, 173, 1)',
          'rgba(0, 150, 220, 1)',
          'rgba(56, 118, 196, 1)'
        ],
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#2b5da5',
          bodyColor: '#2b5da5',
          borderColor: '#2b5da5',
          borderWidth: 1,
          padding: 10,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return 'Proficiência: ' + context.parsed.x + '/10';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 10,
          ticks: {
            color: isDarkMode ? '#2b5da5' : '#004466',
            font: {
              family: "'Courier New', monospace"
            }
          },
          grid: {
            color: isDarkMode ? 'rgba(41, 92, 173, 0.1)' : 'rgba(0, 68, 102, 0.1)',
            drawBorder: true,
            drawTicks: true
          }
        },
        y: {
          ticks: {
            color: isDarkMode ? '#2b5da5' : '#004466',
            font: {
              family: "'Courier New', monospace",
              size: 12
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });

  document.getElementById('skillsChart').addEventListener('click', (event) => {
    const points = skillsChart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (!points.length) {
      return;
    }

    const index = points[0].index;
    const label = skillsChart.data.labels[index];
    const info = skillMetadata[label];

    if (!info) {
      return;
    }

    const lang = currentLanguage === 'pt' ? 'pt' : 'en';
    skillName.textContent = label;
    skillDescription.textContent = info[lang].desc;
    skillProjects.textContent = info[lang].projects;
    skillDetail.style.display = 'block';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const filterButtons = document.querySelectorAll('#project-filters .filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.getAttribute('data-filter');

      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const shouldShow = selected === 'all' || selected === category;
        card.style.display = shouldShow ? '' : 'none';
      });
    });
  });

  // Terminal command handler
  let terminalSubject = '';
  let terminalBody = '';
  function handleCommand(e) {
    if (e.key === 'Enter') {
      const input = e.target.value;
      const cmd = input.toLowerCase();
      const body = document.getElementById('terminal-body');
      const isBR = currentLanguage === 'pt';
      
      body.innerHTML += '> ' + input + '\n';
      
      if (cmd.startsWith('set subject:') || cmd.startsWith('set assunto:')) {
        terminalSubject = input.substring(cmd.startsWith('set subject:') ? 12 : 11).trim();
        const msg = isBR ? 'Assunto definido: ' : 'Subject defined: ';
        body.innerHTML += msg + terminalSubject + '\n> ';
      } else if (cmd.startsWith('set body:') || cmd.startsWith('set corpo:')) {
        terminalBody = input.substring(cmd.startsWith('set body:') ? 9 : 9).trim();
        const msg = isBR ? 'Corpo definido: ' : 'Body defined: ';
        body.innerHTML += msg + terminalBody + '\n> ';
      } else if (cmd === 'send') {
        if (terminalSubject && terminalBody) {
          const mailto = 'mailto:carol@gmail.com?subject=' + encodeURIComponent(terminalSubject) + '&body=' + encodeURIComponent(terminalBody);
          window.location.href = mailto;
          const msg = isBR ? 'Abrindo cliente de email com mensagem...' : 'Opening email client with message...';
          body.innerHTML += msg + '\n> ';
          terminalSubject = '';
          terminalBody = '';
        } else {
          const msg = isBR ? 'Defina assunto e corpo primeiro com "set subject:" e "set body:".' : 'Define subject and body first with "set subject:" and "set body:".';
          body.innerHTML += msg + '\n> ';
        }
      } else if (cmd === 'help') {
        if (isBR) {
          body.innerHTML += 'Opções disponíveis:\n  - iniciar: Iniciar um novo projeto\n  - contato: Entrar em contato\n  - projetos: Ver projetos\n  - set subject: [texto]: Definir assunto do email\n  - set body: [texto]: Definir corpo do email\n  - send: Enviar email\n  - sair: Sair do terminal\n> ';
        } else {
          body.innerHTML += 'Available options:\n  - start: Start a new project\n  - contact: Get in contact\n  - projects: View projects\n  - set subject: [text]: Set email subject\n  - set body: [text]: Set email body\n  - send: Send email\n  - exit: Exit terminal\n> ';
        }
      } else if (cmd === 'iniciar' || cmd === 'start') {
        const msg = isBR ? 'Iniciando processo de projeto...\nUse "set subject:" e "set body:" para compor mensagem, depois "send".' : 'Starting project process...\nUse "set subject:" and "set body:" to compose a message, then "send".';
        body.innerHTML += msg + '\n> ';
        document.getElementById('send-btn').style.display = 'block';
      } else if (cmd === 'contato' || cmd === 'contact') {
        const msg = isBR ? 'Abrindo cliente de email...' : 'Opening email client...';
        body.innerHTML += msg + '\n> ';
        window.location.href = 'mailto:carol@gmail.com';
      } else if (cmd === 'projetos' || cmd === 'projects') {
        const msg = isBR ? 'Redirecionando para seção de projetos...' : 'Redirecting to projects section...';
        body.innerHTML += msg + '\n> ';
        document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
      } else if (cmd === 'sair' || cmd === 'exit') {
        const msg = isBR ? 'Saindo do terminal...' : 'Exiting terminal...';
        body.innerHTML += msg + '\n> ';
      } else {
        const msg = isBR ? 'Comando não reconhecido. Digite "help" para ver opções.' : 'Command not recognized. Type "help" to see options.';
        body.innerHTML += msg + '\n> ';
      }
      e.target.value = '';
      body.scrollTop = body.scrollHeight;
    }
  }
