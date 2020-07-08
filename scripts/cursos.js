const cursos = [
    {
        "curso": "MS Word 2010 - Básico",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-word-2010-basico?cst=388",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 09 horas"
    },
    {
        "curso": "MS Word 2010 - Intermediário",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-word-2010-intermediario?return=/cursos/informatica/office-2010&cst=389",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 09 horas"
    },
    {
        "curso": "MS Word 2010 - Avançado",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-word-2010-avancado?return=/cursos/informatica/office-2010&cst=391",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 10 horas"
    },
    {
        "curso": "MS Excel 2010 - Básico",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-excel-2010-basico?return=/cursos/informatica/office-2010&cst=355",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 10 horas"
    },
    {
        "curso": "MS Excel 2010 - Intermediário",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-excel-2010-intermediario?cst=325",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 08 horas"
    },
    {
        "curso": "MS Excel 2010 - Avançado",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-excel-2010-avancado?return=/cursos/informatica/office-2010&cst=489",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 08 horas"
    },
    {
        "curso": "MS PowerPoint 2010 - Básico",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-powerpoint-2010-basico?return=/cursos/informatica/office-2010&cst=386",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 11 horas"
    },
    {
        "curso": "MS PowerPoint 2010 - Avançado",
        "link": "https://www.ev.org.br/curso/informatica/office-2010/microsoft-powerpoint-2010-avancado?return=/cursos/informatica/office-2010&cst=387",
        "instituicao": "Fundação Bradesco",
        "categoria": "informatica",
        "carga": " 11 horas"
    },
    {
        "curso": "Introdução à Administração",
        "link": "https://www.ev.org.br/curso/administracao/fundamentos-da-administracao/empreendedorismo-e-inovacao?return=/cursos/administracao&cst=490",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 10 horas"
    },
    {
        "curso": "Empreendedorismo e Inovação",
        "link": "https://www.ev.org.br/curso/administracao/fundamentos-da-administracao/empreendedorismo-e-inovacao?return=/cursos/administracao&cst=490",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 10 horas"
    },
    {
        "curso": "Int. à Gestão de Projetos",
        "link": "https://www.ev.org.br/curso/administracao/gestao-de-projetos/introducao-a-gestao-de-projetos?return=/cursos/administracao&cst=482",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 20 horas"
    },
    {
        "curso": "Empreendedorismo",
        "link": "https://eadsenaies.com.br/cursos-senai/empreendedorismo/",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 20 horas"
    },
    {
        "curso": "Administrando o seu dinheiro",
        "link": "https://eadsenaies.com.br/cursos-sesi/administrando-o-seu-dinheiro/",
        "instituicao": "Fundação Bradesco",
        "categoria": "pessoal",
        "carga": " 11 horas"
    },
    {
        "curso": "Comunicação no Foco Organizacional",
        "link": "https://eadsenaies.com.br/cursos-sesi/comunicacao-no-foco-organizacional/",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 11 horas"
    },
    {
        "curso": "Qualidade no Atendimento",
        "link": "https://eadsenaies.com.br/cursos-sesi/qualidade-no-atendimento-e-postura-profissional/",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 07 horas"
    },
    {
        "curso": "Redação Administrativa",
        "link": "https://eadsenaies.com.br/cursos-sesi/redacao-administrativa/",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 07 horas"
    },
    {
        "curso": "Segurança do Trabalho",
        "link": "https://eadsenaies.com.br/cursos-senai/seguranca-do-trabalho/",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 12 horas"
    },
    {
        "curso": "Segurança do Trabalho",
        "link": "https://eadsenaies.com.br/cursos-senai/seguranca-do-trabalho/",
        "instituicao": "Fundação Bradesco",
        "categoria": "industria",
        "carga": " 12 horas"
    },
    {
        "curso": "Fundamentos de Logística",
        "link": "https://eadsenaies.com.br/cursos-senai/fundamentos-de-logistica/",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 12 horas"
    },
    {
        "curso": "Auxiliar de Escritório: Departamento Administrativo",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/auxiliar-escritorio-ajudando-departamento-administrativo",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 12 horas"
    },
    {
        "curso": "Introdução ao Planejamento Estratégico",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-planejamento-estrategico",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 12 horas"
    },
    {
        "curso": "Administração: Tipo de Liderança",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/administracao-tipo-lideranca",
        "instituicao": "Fundação Bradesco",
        "categoria": "gestao",
        "carga": " 10 horas"
    },
    {
        "curso": "Produtividade: Aprendendo a Administrar o Tempo",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/produtividade-aprendendo-administrar-tempo",
        "instituicao": "Senai",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Auxiliar de Escritório: Ajudando o Financeiro",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/auxiliar-escritorio-ajudando-financeiro",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 14 horas"
    },
    {
        "curso": "Introdução ao Cargo de Auxiliar de Escritório",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-cargo-auxiliar-escritorio",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 14 horas"
    },
    {
        "curso": "Introdução ao Secretariado Executivo",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-secretariado-executivo",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 12 horas"
    },
    {
        "curso": "Introdução à Segurança do Trabalho",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-seguranca-trabalho",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 12 horas"
    },
    {
        "curso": "Introdução à Segurança do Trabalho",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-seguranca-trabalho",
        "instituicao": "Senai",
        "categoria": "industria",
        "carga": " 12 horas"
    },
    {
        "curso": "Introdução à Eficiêcia Operacional",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-eficiencia-operacional",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 20 horas"
    },
    {
        "curso": "Competitividade Empresarial",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/competitividade-empresarial",
        "instituicao": "Senai",
		"categoria": "gestao",
        "carga": " 20 horas"
    },
    {
        "curso": "Estratégia Empresarial",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/estrategia-empresarial",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 10 horas"
    },
    {
        "curso": "Introdução à Gestão do Tempo",
        "link": "https://www.iped.com.br/cursos-gratis/administracao/curso-rapido/introducao-gestao-tempo",
        "instituicao": "Senai",
        "categoria": "gestao",
        "carga": " 10 horas"
    },
    {
        "curso": "HTML Básico",
        "link": "https://www.ev.org.br/curso/informatica/desenvolvimento-web/html-basico?return=/cursos/informatica/desenvolvimento-web&cst=351",
        "instituicao": "Senai",
        "categoria": "tecnologia",
        "carga": " 10 horas"
    },
    {
        "curso": "HTML Avançado",
        "link": "https://www.ev.org.br/curso/informatica/desenvolvimento-web/html-avancado?return=/cursos/informatica/desenvolvimento-web&cst=352",
        "instituicao": "Senai",
        "categoria": "tecnologia",
        "carga": " 10 horas"
    },
    {
        "curso": "HTML e CSS na Prática",
        "link": "https://www.ev.org.br/curso/informatica/desenvolvimento-web/html-e-css-na-pratica?return=/cursos/informatica/desenvolvimento-web&cst=534",
        "instituicao": "Senai",
        "categoria": "tecnologia",
        "carga": " 14 horas"
    },
    {
        "curso": "Introdução ao JavaScript",
        "link": "https://www.ev.org.br/curso/informatica/desenvolvimento-web/introducao-ao-javascript?return=/cursos/informatica/desenvolvimento-web&cst=536",
        "instituicao": "Senai",
        "categoria": "tecnologia",
        "carga": " 14 horas"
    },
    {
        "curso": "Lógica de Programação",
        "link": "https://eadsenaies.com.br/cursos-senai/logica-de-programacao/",
        "instituicao": "Senai",
        "categoria": "tecnologia",
        "carga": " 14 horas"
    },
    {
        "curso": "Atendimento ao Público",
        "link": "https://www.ev.org.br/curso/desenvolvimento-pessoal-e-profissional/atendimento-ao-publico?return=/cursos/desenvolvimento-pessoal-e-profissional&cst=347",
        "instituicao": "IPED",
        "categoria": "gestao",
        "carga": " 14 horas"
    },
    {
        "curso": "Comunicação Empresarial",
        "link": "https://www.ev.org.br/curso/desenvolvimento-pessoal-e-profissional/comunicacao-empresarial?return=/cursos/desenvolvimento-pessoal-e-profissional&cst=412",
        "instituicao": "IPED",
        "categoria": "gestao",
        "carga": " 10 horas"
    },
    {
        "curso": "Organização Pessoal",
        "link": "https://www.ev.org.br/curso/desenvolvimento-pessoal-e-profissional/organizacao-pessoal?return=/cursos/desenvolvimento-pessoal-e-profissional&cst=349",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Finanças Pessoais",
        "link": "https://www.ev.org.br/curso/desenvolvimento-pessoal-e-profissional/financas-pessoais?return=/cursos/desenvolvimento-pessoal-e-profissional&cst=356",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Desenvolvimento Profissional",
        "link": "https://www.ev.org.br/curso/desenvolvimento-pessoal-e-profissional/desenvolvimento-profissional?return=/cursos/desenvolvimento-pessoal-e-profissional&cst=413",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Orçamento Familiar",
        "link": "http://www5.fgv.br/fgvonline/Cursos/Gratuitos/Como-Organizar-O-Orcamento-Familiar/OCWOFEAD-01slsh2011-1/OCWOFEAD_00/SEM_TURNO/354/",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 05 horas"
    },
    {
        "curso": "Como Fazer Investimentos 1",
        "link": "http://www5.fgv.br/fgvonline/Cursos/Gratuitos/Como-Fazer-Investimentos-1/OCWCFI1EAD_00slsh2016-1/OCWCFI1EAD_00/SEM_TURNO/6152/",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 05 horas"
    },
    {
        "curso": "Como Fazer Investimentos 2",
        "link": "http://www5.fgv.br/fgvonline/Cursos/Gratuitos/Como-Fazer-Investimentos-2/OCWCFI2EAD_00slsh2016-1/OCWCFI2EAD_00/SEM_TURNO/6153",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Como Planejar a Aposentadoria",
        "link": "http://www5.fgv.br/fgvonline/Cursos/Gratuitos/Como-Planejar-A-Aposentadoria/OCWCPAEAD-01slsh2012-1/OCWCPAEAD_00/SEM_TURNO/655/",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Como Gastar Conscientemente",
        "link": "http://www5.fgv.br/fgvonline/Cursos/Gratuitos/Como-Gastar-Conscientemente-/OCWCGCEAD-01slsh2011-1/OCWCGCEAD_00/SEM_TURNO/2280",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Comunicação Efetiva",
        "link": "https://eadsenaies.com.br/cursos-sesi/comunicacao-efetiva/",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Consumo Consciente de Energia",
        "link": "https://eadsenaies.com.br/cursos-senai/consumo-consciente-de-energia/",
        "instituicao": "IPED",
        "categoria": "pessoal",
        "carga": " 10 horas"
    },
    {
        "curso": "Técnicas de Redação",
        "link": "https://www.ev.org.br/curso/educacao-basica-e-pedagogia/apoio-a-estudantes/tecnicas-de-redacao?return=/cursos/educacao-basica-e-pedagogia&cst=345",
        "instituicao": "IPED",
        "categoria": "educacao",
        "carga": " 10 horas"
    },
    {
        "curso": "Comunicação Escrita",
        "link": "https://www.ev.org.br/curso/educacao-basica-e-pedagogia/apoio-a-estudantes/comunicacao-escrita?return=/cursos/educacao-basica-e-pedagogia&cst=509",
        "instituicao": "IPED",
        "categoria": "educacao",
        "carga": " 10 horas"
    },
    {
        "curso": "Oficina de Língua Portuguesa",
        "link": "https://www.ev.org.br/curso/educacao-basica-e-pedagogia/apoio-a-estudantes/oficina-de-lingua-portuguesa-gramatica?return=/cursos/educacao-basica-e-pedagogia&cst=341",
        "instituicao": "IPED",
        "categoria": "educacao",
        "carga": " 10 horas"
    },
    {
        "curso": "Matemática Básica e Inclusão Digital",
        "link": "https://eadsenaies.com.br/cursos-sesi/matematica-basica/",
        "instituicao": "IPED",
        "categoria": "educacao",
        "carga": " 02 horas"
    },
    {
        "curso": "Desvendando a Indústria 4.0",
        "link": "https://eadsenaies.com.br/cursos-senai/desvendando-a-industria-4-0/",
        "instituicao": "IPED",
        "categoria": "industria",
        "carga": " 02 horas"
    },
    {
        "curso": "Noções Básicas de Mecânica Automotiva",
        "link": "https://eadsenaies.com.br/cursos-senai/nocoes-basicas-de-mecanica-automotiva/",
        "instituicao": "IPED",
        "categoria": "industria",
        "carga": " 10 horas"
    }
]