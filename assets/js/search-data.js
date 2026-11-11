// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-i-recieved-the-caltech-dale-and-suzanne-burger-summer-undergraduate-research-fellowship",
          title: 'I recieved the Caltech Dale and Suzanne Burger Summer Undergraduate Research Fellowship!',
          description: "",
          section: "News",},{id: "news-our-work-on-sparse-autoencoder-neural-operators-was-accepted-as-an-oral-presentation-at-the-neurips-2025-unireps-workshop",
          title: 'Our work on Sparse Autoencoder Neural Operators was accepted as an oral presentation...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-eth-zurich-student-summer-research-fellowship-and-i-will-be-joining-ryco-lab-for-the-summer",
          title: 'I was awarded the ETH Zurich Student Summer Research Fellowship, and I will...',
          description: "",
          section: "News",},{id: "news-i-m-very-honored-to-receive-the-mellon-mays-undergraduate-fellowship-for-my-research-at-caltech",
          title: 'I’m very honored to receive the Mellon Mays Undergraduate Fellowship for my research...',
          description: "",
          section: "News",},{id: "news-our-paper-mechanistic-interpretability-with-sparse-autoencoder-neural-operators-has-been-accepted-to-neurips-2026",
          title: 'Our paper Mechanistic Interpretability with Sparse Autoencoder Neural Operators has been accepted to...',
          description: "",
          section: "News",},{id: "teachings-ph-1a-classical-mechanics-and-electromagnetism",
          title: 'Ph 1a — Classical Mechanics and Electromagnetism',
          description: "Grading TA",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/classical-mechanics-ph1a.html";
            },},{id: "teachings-cs-21-decidability-and-tractability",
          title: 'CS 21 — Decidability and Tractability',
          description: "TA",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/decidability-tractability-cs21.html";
            },},{id: "teachings-acm-ee-ids-116-probability-models",
          title: 'ACM/EE/IDS 116 — Probability Models',
          description: "TA",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/probability-models-ids-116.html";
            },},{id: "teachings-ids-acm-cs-157-statistical-inference",
          title: 'IDS/ACM/CS 157 — Statistical Inference',
          description: "Head TA",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/statistical-inference-cs157-head-ta.html";
            },},{id: "teachings-ids-acm-cs-157-statistical-inference",
          title: 'IDS/ACM/CS 157 — Statistical Inference',
          description: "TA",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/statistical-inference-cs157.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%68%65%6E@%63%61%6C%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ailsa-shen", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ailsa-shen", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ailsaxshen", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jdSUDAkAAAAJ", "_blank");
        },
      },];
