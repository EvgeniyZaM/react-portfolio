import socNetImg from '../../assets/img/projectsImg/SocNet.jpg'
import todoImg from '../../assets/img/projectsImg/todoImg.jpg'
import cardsImg from '../../assets/img/projectsImg/cards.jpg'
import pizzasImg from '../../assets/img/projectsImg/pizzas.png'

export type ProjectDescription = {
  title: string
  description: {
    // about: string,
    techsUsed: string[]
  }
  style: { backgroundImage: string },
  refs: { project: string, code: string }
}

export const projects: ProjectDescription[] = [
  {
    title: 'Social network',
    description: {
      // about: 'Social network app with using react hooks, routing, lazy loading, working with REST api, login/logout flow,pagination, form and validation/file uploading using unit tests for code workability check.',
      techsUsed: ['TypeScript;', 'React;', 'Redux-Toolkit;', 'Redux-thunk;', 'React-router-dom v6;', 'Axios;', 'SCSS;', 'React-hook-form;', 'Unit tests;']
    },
    style: { backgroundImage: `url(${socNetImg})` },
    refs: { project: 'https://evgeniyzamatevskiy.github.io/react-social-network', code: 'https://github.com/EvgeniyZamatevskiy/react-social-network' }
  },
  {
    title: 'To do list',
    description: {
      // about: 'To do list app created with react hooks, routing and redirects, material UI, REST api request/response flow, unit-tests and etc.',
      techsUsed: ['TypeScript;', 'React;', 'Redux-Toolkit;', 'Redux-thunk;', 'React-router-dom v6;', 'Axios;', 'Material UI;', 'Formik;', 'Unit tests;']
    },
    style: { backgroundImage: `url(${todoImg})` },
    refs: { project: 'https://evgeniyzamatevskiy.github.io/react-to-do-list', code: 'https://github.com/EvgeniyZamatevskiy/react-to-do-list' }
  },
  {
    title: 'Cards',
    description: {
      // about: 'Creating learning app in team with using git, work with axios (CRUD).',
      techsUsed: ['TypeScript;', 'React;', 'Redux-Toolkit;', 'Redux-thunk;', 'React-router-dom v6;', 'Axios;', 'SCSS;', 'React-hook-form;', 'Unit tests;']
    },
    style: { backgroundImage: `url(${cardsImg})` },
    refs: { project: 'https://evgeniyzamatevskiy.github.io/react-cards', code: 'https://github.com/EvgeniyZamatevskiy/react-cards' }
  },
  {
    title: 'Pizza',
    description: {
      // about: 'Online pizza ordering shop.',
      techsUsed: ['TypeScript;', 'React;', 'Redux-Toolkit;', 'Redux-thunk;', 'React-router-dom v6;', 'Axios;', 'SCSS;', 'Unit tests;']
    },
    style: { backgroundImage: `url(${pizzasImg})` },
    refs: { project: 'https://evgeniyzamatevskiy.github.io/react-pizza', code: 'https://github.com/EvgeniyZamatevskiy/react-pizza' }
  },
]
