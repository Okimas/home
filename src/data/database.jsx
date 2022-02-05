const { setStoragedData } = require("./localStorage");

const staticData = [
  {
    theme: "light",
    language: {
      name: "portugês",
      code: "pt-BR",
    },
    profile: {
      name: "Okimas#br",
      role: "Desenvolvedor Autônomo",
      image:
        "https://github.com/Okimas/home/blob/master/src/assets/images/user.png?raw=true",
    },
    script: [
      {
        number: 1,
        label: "Olá",
        title: "Boas-Vindas",
        texts: [
          {
            image: {
              url: "https://github.com/Okimas/home/blob/master/src/assets/images/user.png?raw=true",
              class: "rounded",
              alt: "welcome",
            },
            text: `Olá! Meu nome é Ricardo. Seja muito bem-vinda(o)!<br/>Espero que encontre aqui as informações que procura.`,
          },
          {
            text: `Acredito que já temos uma ótima razão para criar uma conexão ativa no LinkedIn! <a href="https://br.linkedin.com/in/ricardo-okimoto" target="_blank">Envie um convite</a>.<br/><br/>`,
          },
          {
            title: "Mais do que interesse profissional",
            text: '<a class="popup" href="https://www.google.com/search?q=agricultura+técnicas+tecnologias" target="_blank"><span>#agricultura</span><div class="tip">Tecnologias<br/>Técnicas<br/>Estilo de vida</div></a> <a class="popup" href="https://www.google.com.br/search?q=agua+reuso+tratamento+captação" target="_blank"><span>#água</span><div class="tip">Reuso<br/>Tratamento<br/>Captação</div></a> <a class="popup" href="https://www.google.com/search?q=energia+renov%C3%A1vel+novas+tecnologias" target="_blank"><span>#energia renovável</span><div class="tip">Novas Tecnologias</div></a> <a class="popup" href="https://www.google.com/search?q=%22lixo+urbano%22+problemas+solu%C3%A7%C3%B5es" target="_blank"><span>#lixo urbano</span><div class="tip">Problemas<br/>Soluções</div></a> <a class="popup" href="https://www.google.com/search?q=%22produ%C3%A7%C3%A3o+de+alimentos%22+problemas+solu%C3%A7%C3%B5es" target="_blank"><span>#produção de alimentos</span><div class="tip">Problemas<br/>Soluções</div></a>',
          },
        ],
      },
      {
        number: 2,
        label: "Atualmente",
        title: "Desenvolvimento autônomo",
        texts: [
          {
            // image: {
            //   url: "https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
            //   class: "rounded",
            //   alt: "Welcome",
            // },
            title: "Peqquenas e média empresas",
            text: `<strong>Sistemas customizados para automatização de processos</strong>. Diferente das <a href="https://pt.wikipedia.org/wiki/Sistema_integrado_de_gest%C3%A3o_empresarial" target="_blank">ERPs</a> (mudanças dramáticas nos processos da empresa) e das <a href="https://pt.wikipedia.org/wiki/Business_Process_Management_Suite" target="_blank">BMPSs</a>/<a href="https://pt.wikipedia.org/wiki/Business_Process_Model_and_Notation" target="_blank">BMPNs</a> (genéricas e complicadas), uma solução customizada é a tradução dos processos existentes e das possíveis melhorias na tela dos computadores e celulares da empresa, automatizando o que era feito manualmente. Outra diferença importante é que esta solução customizada não é um serviço, é um desenvolvimento, as empresas não pagarão mensalidades para utilização.<br/><strong>Sistemas de monitoramento e análise dados de campo</strong>. De forma bastante resumida: Medições de campo (remotas) enviadas através da internet para um servidor que disponibiliza aos usuários estes dados da forma que a aplicação requer.`,
          },
          {
            title: "Projetos & Lojas de Aplicativos",
            text: `Como desenvolvedor Android, tenho planos para este ano: ter <i>apps</i> na loja e vender nas plataformas de <i>freelancers</i>, o que nunca fiz. Pretendo participar de projetos de terceiros remotamente também, mas antes preciso criar repositórios públicos no <strong>GitHub</strong> com alguns projetos. Minhas escolhas, hoje, para desenvolvimento: <a class="popup" href="https://github.com/Okimas/media-learning-center-public" target="_blank"><span>Electron/React</span><div class="tip">finalizando</div></a>, <a class="popup" href="https://github.com/Okimas/player-client-android" target="_blank"><span>Android</span><div class="tip">criando <i>mockup</i></div></a>, <a class="popup" href="https://github.com/Okimas/player-client-react-native" target="_blank"><span>React Native</span><div class="tip">criando <i>mockup</i></div></a> e <a class="popup"href="https://github.com/Okimas/fullstack-mern" target="_blank"><span>MongoDB/Express/React/NodeJS</span><div class="tip">completo</div></a>. Acompanhe os desenvolvimentos através dos links e das imagens abaixo.`,
          },
        ],
        images: {
          title: "telas/mockups",
          list: [
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen1.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen2.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen3.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen4.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen5.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen6.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen7.png",
              alt: "",
            },
          ],
        },
        // links: [
        //   { name: "Reminder App", url: "" },
        //   { name: "MERN template", url: "" },
        //   { name: "WinPlayer Server-Client", url: "" },
        //   { name: "WinPlayer Client", url: "" },
        // ],
      },
      {
        number: 3,
        label: "formação",
        title: "conhecimento",
        texts: [
          {
            // image: {
            //   url: "https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
            //   class: "rounded",
            //   alt: "Welcome",
            // },
            title: "Formação Acadêmica",
            text: 'Sou formado em engenharia mecânica pela <a href="https://ufu.br" target="_blank">UFU (Universidade Federal de Uberlândia-MG)</a>. Durante dois anos fui aluno bolsista de IC (iniciação científica) desenvolvendo softwares nas linguagens <i>Pascal</i> e <i>C</i> específicos à engenharia (simuladores para a área térmica). Este foi o meu início na programação.<br/>Tenho pós-graduação em Administração de Empresas pela <a href="https://www.faap.br" target="_blank">FAAP (Fundação Armando Alvares Penteado)</a> e em Gestão de Projetos e Tecnologias pelo <a href="https://www.ipt.br" target="_blank">IPT (Instituto de Pesquisas Tecnológicas)</a>.',
          },
          {
            title: "Sem diploma, mas Mestre",
            text: 'Em média, faço três cursos por mês. Na maioria, cursos em vídeo como os da <a href="https://www.udemy.com" target="_blank">Udemy</a>.<br/>Temas recorrentes: linguagens de programação, <i>frameworks</i>, plataformas... tecnologias, agricultura, física, história... inglês*, japonês...<br/>* <span style="font-size:smaller">Todos os cursos estão na língua inglesa. Sou fluente? Não. Inglês, entendo quase tudo o que leio e escuto, mas não tenho prática na conversação.</span>',
          },
        ],
      },
      {
        number: 4,
        label: "Carreira",
        title: "Histórico",
        texts: [
          {
            // image: {
            //   url: "https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
            //   class: "rounded",
            //   alt: "welcome",
            // },
            title: "Engenheiro",
            text: 'Formado, fui trabalhar com ar-condicionado central (projeto e instalação) na empresa <a href="https://riberar.com.br" target="_blank">Riberar</a> em Ribeirão Preto - SP.<br/>Menos de um ano depois, surgiu a oportunidade de trabalhar em uma empresa maior, fabricante de medidores de água e gás, a <a href="http://laoindustria.com.br" target="_blank">LAO Indústria</a>, que atuava em uma área que eu já tinha algum interesse, o saneamento. Na empresa, pouco tempo depois, a área de tecnologia que, até então, era focada apenas nos projetos dos medidores, passou a se chamar "Sistemas de Medição", desenvolvendo eletrônicas (centrais de medição, <i>dataloggers</i> e <i>IOT</i>s) e softwares. Desenvolvi de simples interfaces usuários/dispositivos, até plataformas para análise e gestão de dados coletados remotamente em tempo real. Trabalhei como engenheiro de aplicação, gerenciando projetos e desenvolvendo soluções variadas em softwares por mais de 12 anos.',
          },
          {
            title: "Autônomo",
            text: "Ainda como CLT, estudava e trabalhava quase todas as noites, pensando em ter a minha empresa e, em algum momento, solicitações de projetos em softwares e sistemas começaram surgir. Mais do que eu podia atender, trabalhando em uma empresa. Naquele momento, qualquer problema, de qualquer tipo, parecia requerer uma solução em software ou plataforma. Minha autonomia começou em 2012. Esta alta demanda de soluções em softwares/plataformas, não poderia ter consequências diferentes. Muitas empresas entraram nesse mercado e uma explosão de desenvolvedores autônomos. A concorrência não afetou significativamente o meu negócio. Eu tinha vários projetos ativos realizados, uma boa rede de contatos e meus clientes não eram grandes.",
          },
          {
            title: "Crise & Oportunidades",
            text: 'Em 2015, os desenvolvimentos entraram em declínio rapidamente, não só para mim. Resolvi reviver antigos interesses que posso resumir em uma única expressão: "Tecnologia Ambiental". E, não por acaso, surgiu uma oportunidade de participar de um projeto FAPESP, <a href="https://bv.fapesp.br/pt/pesquisador/693827/ricardo-augusto-okimoto" target="_blank">Geradores eólicos de baixo custo monitorados remotamente</a>. Uma crise, uma cidade mais tranquila e novos conhecimentos. Fui trabalhar neste projeto em São José dos Campos - SP. Tecnicamente, nada novo neste projeto, mas o conhecimento e a imersão na nova área, foram valiosos!<br/>A demanda por novos projetos continuava baixa e veio a pandemia! Decidi dar um foco maior ao desenvolvimento <i>mobile</i>. E depois de muito estudo e pesquisa, o planejamento e a execução: novas oportunidades pare este ano.',
          },
        ],
      },
      {
        number: 5,
        label: "Contato",
        title: "primeiro contato",
        texts: [
          {
            image: {
              url: "https://github.com/Okimas/home/blob/master/src/assets/images/user.png?raw=true",
              class: "rounded columm",
              alt: "contact",
            },
            text: 'Caso tenha alguma dúvida sobre mim ou meu trabalho ou apenas atua na mesma área e quer entrar em contato, sinta-se à vontade.<br/><br/><strong style="font-size:smaller">E-mail: </strong><a href="mailto:okimas.br@gmail.com" target="_blank">okimas.br@gmail.com</a><br/><strong style="font-size:smaller">Skype: </strong><a href="https://join.skype.com/invite/o8wMlbaSiIuv" target="_blank">okimas_br</a>',
          },
        ],
      },
    ],
  },
  {
    theme: "light",
    language: {
      name: "english",
      code: "en",
    },
    profile: {
      name: "Okimas#br",
      role: "Freelance Developer",
      image:
        "https://github.com/Okimas/home/blob/master/src/assets/images/user.png?raw=true",
    },
    script: [
      {
        number: 1,
        label: "welcome",
        title: "welcome",
        texts: [
          {
            image: {
              url: "https://github.com/Okimas/home/blob/master/src/assets/images/user.png?raw=true",
              class: "rounded",
              alt: "welcome",
            },
            text: `Hi, my name is Ricardo and you are very welcome!<br/>I hope you get the information you are looking for and more.`,
          },
          {
            text: `Since you're here I believe we could keep in touch! <a href="https://br.linkedin.com/in/ricardo-okimoto" target="_blank">Send me a invite</a>.<br/><br/>`,
          },
          {
            title: "I want to be part of the solution",
            text: '<a class="popup" href="https://www.google.com/search?q=agriculture+techniques+technologies" target="_blank"><span>#agriculture</span><div class="tip">Technologies<br/>Techniques<br/>Life style</div></a> <a class="popup" href="https://www.google.com.br/search?q=water+reuse+treatment+catchment" target="_blank"><span>#water</span><div class="tip">Reuse<br/>Treatment<br/>Catchment</div></a> <a class="popup" href="https://www.google.com/search?q=renewable+energy+new+technologies" target="_blank"><span>#renewable energy</span><div class="tip">New Technologies</div></a> <a class="popup" href="https://www.google.com/search?q=urban+waste+problems+solutions" target="_blank"><span>#urban waste</span><div class="tip">Problems<br/>Solutions</div></a> <a class="popup" href="https://www.google.com/search?q=%22food+production%22+problems+and+solutions" target="_blank"><span>#food production</span><div class="tip">Problems<br/>Solutions</div></a>',
          },
        ],
      },
      {
        number: 2,
        label: "currently",
        title: "Development",
        texts: [
          {
            // image: {
            //   url: "https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
            //   class: "rounded",
            //   alt: "welcome",
            // },
            title: "Small and medium-sized enterprises",
            text: `<strong>Customized systems for process automation</strong>. Unlike ERP (dramatic changes in company's processes) or BMPS/BMPN (generic and complicated), a customized solution is the translation of processes and possible improvements on users' screens (computers and mobiles), automating what was previously done manually. Another important difference is that this customized solution is not a service, it is a development, companies will not pay monthly fees to use it.<br/><strong>Field data analysis and monitoring systems</strong>. In a very summarized way: The server receives data from the field, remotely via the Internet and makes it available to users as required by each application.`,
          },
          {
            title: "Third-party Projects & App Stores",
            text: `As an Android developer, I have plans for this year: to have apps in the store and sell on freelancer platforms, which I've never done. I plan to participate in 3rd party projects as well, but first I need to create public repositories on <strong>GitHub</strong> with real projects. <a class="popup" href="https://github.com/Okimas/media-learning-center-public" target="_blank"><span>Electron/React</span><div class="tip">finishing</div></a>, <a class="popup" href="https://github.com/Okimas/player-client-android" target="_blank"><span>Android</span><div class="tip">creating mockup</div></a>, <a class="popup" href="https://github.com/Okimas/player-client-react-native" target="_blank"><span>React Native</span><div class="tip">creating mockup</div></a> e <a class="popup"href="https://github.com/Okimas/fullstack-mern" target="_blank"><span>MongoDB/Express/React/NodeJS</span><div class="tip">complete</div></a>. Follow these developments through the links and images below.`,
          },
        ],
        images: {
          title: "screens/mockups",
          list: [
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen1.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen2.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen3.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen4.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen5.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen6.png",
              alt: "",
            },
            {
              url: "https://github.com/Okimas/home/raw/master/src/assets/images/screen7.png",
              alt: "",
            },
          ],
        },
        // links: [
        //   { name: "Reminder App", url: "" },
        //   { name: "MERN template", url: "" },
        //   { name: "WinPlayer Server-Client", url: "" },
        //   { name: "WinPlayer Client", url: "" },
        // ],
      },
      {
        number: 3,
        label: "education",
        title: "knowledge",
        texts: [
          {
            // image: {
            //   url: "https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
            //   class: "rounded",
            //   alt: "welcome",
            // },
            title: "academic background",
            text: `I am a Mechanical Engineer from the <a href="https://ufu.br" target="_blank"><i>Universidade Federal de Uberlândia - MG.</i></a>. For two years I was a scholarship student developing software in the languages <i>Pascal</i> and <i>C</i> specific to engineering. Was my beginning in programming.<br/>I have a postgraduate degree in Business Management from <a href="https://www.faap.br" target="_blank"><i>FAAP (Fundação Armando Alvares Penteado)</i></a> and in Project and Technology Management from <a href="https://www.ipt.br" target="_blank"><i>IPT (Instituto de Pesquisas Tecnológicas)</i></a>.`,
          },
          {
            title: "no diploma",
            text: `On average, I take three courses a month. For the most part, video courses like those from <a href="https://www.udemy.com" target="_blank">Udemy</a><br/>Recurring themes are programming languages, frameworks, platforms... technologies, agriculture, physics, history... English*, Japanese...<br/>* <span style="font-size:smaller">All courses are in English but I'm not fluent. I understand almost everything I read and hear, but I'm not good at conversation.</span>`,
          },
        ],
      },
      {
        number: 4,
        label: "Career",
        title: "since beginning",
        texts: [
          {
            // image: {
            //   url: "https://imagens.brasil.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
            //   class: "rounded",
            //   alt: "welcome",
            // },
            title: "professional engineer",
            text: `After graduation, I worked with central air conditioning (design and installation) at <a href="https://riberar.com.br" target="_blank">Riberar</a> in <i>Ribeirão Preto - SP</i>.<br>Less than a year later, I had an opportunity to work in a larger company, manufacturer of water and gas meters, <a href="http://laoindustria.com.br" target="_blank">LAO Indústria</a> which operated in an area that I already had some interest in, water supply and sanitation. Working in the company, shortly afterwards, the technology area that, until then, was focused only on meter projects, was renamed "Measurement Systems", developing electronics (centralized metering, data loggers and IOTs) and software. I developed from simple user/device interfaces to platforms for analysis and management of data collected remotely in real time. I worked as an application engineer, managing projects and developing various software solutions for over 12 years.`,
          },
          {
            title: "self-employed",
            text: `Still an employee, I studied and worked almost every night, thinking about having my own company and at some point requests for projects in software and systems started to appear, more than I could handle, working in a company. At the time, any problem, of any kind, seemed to require a solution in software or a platform. I started as a self-employed worker in 2012. This high demand for solutions in software/platforms could not have different consequences. Many companies have entered this market and an explosion of freelance developers. The competition has not significantly affected my business. I had several finished projects in use, a good network of contacts and my clients weren't big.`,
          },
          {
            title: "crisis & opportunities",
            text: `In 2015, developments went into rapid decline but not just for me. I decided to revive old interests that I can summarize in a single expression: "Environmental Technologies". And not by chance, an opportunity arose to participate in a <a href="https://fapesp.br" target="_blank">FAPESP</a> project, <a href="https://bv.fapesp.br/pt/pesquisador/693827/ricardo-augusto-okimoto" target="_blank">Low cost wind generators remotely monitored</a>. I went to work on this project in <i>São José dos Campos - SP</i>. Technically nothing new in this project, but knowledge and immersion in the new area were valuable.<br/>The demand for new projects was still low and the pandemic came! I decided to focus more on mobile development. And after a lot of study and research I started planning and soon it will be time for action.`,
          },
        ],
      },
      {
        number: 5,
        label: "Contact",
        title: "first contact",
        texts: [
          {
            image: {
              url: "https://github.com/Okimas/home/blob/master/src/assets/images/user.png?raw=true",
              class: "rounded columm",
              alt: "welcome",
            },
            text: 'If you have any questions about me or my work or just work in the same field and want to get in touch, feel free to contact me.<br/><br/><strong style="font-size:smaller">E-mail: </strong><a href="mailto:okimas.br@gmail.com" target="_blank">okimas.br@gmail.com</a><br/><strong style="font-size:smaller">Skype: </strong><a href="https://join.skype.com/invite/o8wMlbaSiIuv" target="_blank">okimas_br</a>',
          },
        ],
      },
    ],
  },
];

export const getData = () => {
  return new Promise((resolve, reject) => {
    /* 
    just a async task simulation
    this code will serve to a MERN project
    */
    setTimeout(() => {
      setStoragedData(staticData);
      resolve(staticData);
    }, 1300);
  });
};
