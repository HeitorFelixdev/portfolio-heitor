// Dados do currículo. Servem de (1) carga inicial para o Back4App
// (npm run seed) e (2) reserva caso o back-end esteja fora do ar.

export const perfil = {
  nome: "José Heitor Felix Guimarães",
  titulo: "Estudante de Sistemas para Internet",
  localizacao: "Recife, PE",
  resumo:
    "Estudante de Sistemas de Internet com ótimas habilidades de comunicação verbal e escrita, o que facilita a interação com colegas de equipe e clientes. Grande disposição para o desenvolvimento pessoal e profissional, contribuindo de forma positiva para o sucesso da empresa.\n\nProfissional com conhecimento em linguagens de programação e capacidade para realizar testes com usuários finais. Conhecimento em mapeamento de processos e fluxos de trabalho, identificando oportunidades de melhoria.",
  email: "joseheitor1227@gmail.com",
  telefone: "(81) 98753-6049",
  whatsapp: "5581987536049",
  linkedin: "https://www.linkedin.com/in/heitorfelixdev/",
  github: "",
};

export const formacoes = [
  {
    tipo: "Graduação",
    instituicao: "Universidade Católica de Pernambuco",
    curso: "Sistemas para Internet",
    periodo: "2024 – 2027",
    status: "Cursando",
    descricao:
      "O profissional de Sistemas para Internet cria a infraestrutura digital que permite a interação, o comércio, a comunicação e a gestão de informações na web, utilizando as tecnologias mais atuais para resolver problemas e facilitar o dia a dia de pessoas e empresas.",
    ordem: 1,
  },
  {
    tipo: "Curso",
    instituicao: "VMEdu.com",
    curso: "Scrum Fundamentals Certified",
    periodo: "",
    status: "Concluído",
    descricao: "",
    ordem: 2,
  },
  {
    tipo: "Curso",
    instituicao: "Fundação Bradesco",
    curso: "Administrando Banco de Dados",
    periodo: "",
    status: "Concluído",
    descricao: "",
    ordem: 3,
  },
  {
    tipo: "Curso",
    instituicao: "Fundação Bradesco",
    curso: "Modelagem de Dados",
    periodo: "",
    status: "Concluído",
    descricao: "",
    ordem: 4,
  },
];

export const experiencias = [
  {
    cargo: "Assistente Administrativo",
    empresa: "Toyolex – Grupo Parvi",
    setor: "Setor de Venda Direta",
    periodo: "04/2026 – Atual",
    atividades: [
      "Apoio ao Controller na extração, tratamento e consolidação de dados brutos (CSV e relatórios de diversos sistemas), com conciliação de informações entre sistemas.",
      "Gestão e padronização de planilhas em Excel avançado: fórmulas, abas padronizadas, heatmaps e formatação condicional.",
      "Análise de desempenho de vendas e acompanhamento de indicadores, usando portais e planilhas de indicadores Toyota e o DRE Gerencial.",
      "Criação de apresentações executivas em PowerPoint (painéis 1920x1080, KPIs e rankings) e de dashboards visuais para a diretoria.",
      "Operação de sistemas corporativos: CRM Syonet, SVD (Sistema de Venda Direta Toyota) e Dealer (relatórios RVC013 e ROF015).",
      "Faturamento de veículos e lançamento de entrada em estoque.",
      "Elaboração de relatórios técnicos em Word e geração e leitura de documentos em PDF.",
    ],
    ordem: 1,
  },
  {
    cargo: "Monitor de Matemática",
    empresa: "EREM Jornalista Trajano Chacon",
    setor: "",
    periodo: "03/2023 – 11/2023",
    atividades: [
      "Planejamento e elaboração de aulas, visando compartilhar conhecimentos de forma clara e objetiva.",
    ],
    ordem: 2,
  },
];

export const projetos = [
  {
    titulo: "App Portfólio",
    descricao:
      "Este aplicativo: currículo e portfólio em React Native, com navegação por abas, dados vindos do Back4App e botões de contato (WhatsApp, e-mail e LinkedIn).",
    tecnologias: ["React Native", "Expo", "Expo Router", "Back4App"],
    link: "",
    ordem: 1,
  },
  {
    titulo: "Painéis executivos de Venda Direta",
    descricao:
      "Painéis de desempenho de vendas com KPIs e rankings em PowerPoint (1920x1080) e planilhas em Excel avançado, com heatmaps e formatação condicional, para acompanhamento de indicadores pela diretoria.",
    tecnologias: ["Excel", "PowerPoint", "DRE Gerencial", "CSV"],
    link: "",
    ordem: 2,
  },
];

export const habilidades = [
  {
    categoria: "Excel e dados",
    itens: [
      "Excel avançado: fórmulas, abas padronizadas, heatmaps e formatação condicional",
      "Tratamento e consolidação de dados brutos (CSV e relatórios de vários sistemas)",
      "Conciliação de dados entre sistemas",
    ],
    ordem: 1,
  },
  {
    categoria: "Apresentações e painéis",
    itens: [
      "PowerPoint executivo: painéis 1920x1080, KPIs e rankings",
      "Dashboards visuais para diretoria",
    ],
    ordem: 2,
  },
  {
    categoria: "Sistemas corporativos",
    itens: [
      "CRM Syonet",
      "SVD (Sistema de Venda Direta Toyota)",
      "Dealer (relatórios RVC013 e ROF015)",
      "DRE Gerencial",
      "Portais e planilhas de indicadores Toyota",
    ],
    ordem: 3,
  },
  {
    categoria: "Documentos",
    itens: ["Word (relatórios técnicos)", "PDF (geração e leitura)"],
    ordem: 4,
  },
  {
    categoria: "Tecnologia",
    itens: [
      "Bancos de dados SQL e NoSQL, com SQL Server para estruturar dados",
      "Linguagens de programação, incluindo Java e linguagens para web",
      "Segurança da informação e segurança de aplicações web",
      "Sistemas de controle de versão e serviços de hospedagem web",
      "Familiaridade com sistemas operacionais diversos",
      "Metodologias ágeis para projetos",
    ],
    ordem: 5,
  },
  {
    categoria: "Comportamentais",
    itens: [
      "Trabalho em equipe e colaboração",
      "Capacidade analítica para interpretar dados",
      "Curiosidade para aprender e se atualizar",
      "Adaptabilidade a novas tecnologias, processos e tendências",
    ],
    ordem: 6,
  },
];
