import reactImg from '../../assets/img/logos/skills/react.png'
import tsImg from '../../assets/img/logos/skills/typescript.svg'
import htmlImg from '../../assets/img/logos/skills/html5.svg'
import axiosImg from '../../assets/img/logos/skills/axios.png'
import reduxImg from '../../assets/img/logos/skills/redux.svg'
import materialImg from '../../assets/img/logos/skills/materialUI.svg'
import jestImg from '../../assets/img/logos/skills/jest.png'
import softSkillsImg from '../../assets/img/logos/skills/softSkills.png'
import jsImg from '../../assets/img/logos/skills/javascript.png'
import cssImg from '../../assets/img/logos/skills/css.png'
import sassImg from '../../assets/img/logos/skills/sass.png'
import restApiImg from '../../assets/img/logos/skills/restApi.png'
import postmanImg from '../../assets/img/logos/skills/postman.svg'
import gitImg from '../../assets/img/logos/skills/git.svg'
import styledComponentsImg from '../../assets/img/logos/skills/styledComponents.svg'
import reactHookFormImg from '../../assets/img/logos/skills/reactHookForm.png'
import formikImg from '../../assets/img/logos/skills/formik.png'

export type SkillDescription = {
  title: string
  icon: string
  description: string
}

export const skillsDB: SkillDescription[] = [
  { title: 'React', icon: reactImg, description: 'JavaScript-based UI development library.' },
  { title: 'Redux/Redux-Toolkit', icon: reduxImg, description: 'JavaScript library for managing and centralizing application state.' },
  { title: 'JavaScript', icon: jsImg, description: 'The Programming Language for the Web that conforms to the ECMAScript specification.' },
  { title: 'TypeScript', icon: tsImg, description: 'A syntactic superset of JavaScript which adds static typing.' },
  { title: 'Axios', icon: axiosImg, description: 'Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests.' },
  { title: 'REST API', icon: restApiImg, description: 'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.' },
  { title: 'Postman', icon: postmanImg, description: 'API platform for building and using APIs' },
  { title: 'Jest', icon: jestImg, description: 'JavaScript library for creating, running, and structuring tests.' },
  { title: 'React Hook Form', icon: reactHookFormImg, description: 'A library for handling form input elements in React.' },
  { title: 'Formik', icon: formikImg, description: 'Small group of React components and hooks for building forms in React and React Native.' },
  { title: 'HTML', icon: htmlImg, description: 'Hypertext Markup Language for describing the contents and appearance of Web pages.' },
  { title: 'CSS', icon: cssImg, description: 'Stylesheet language used to describe the presentation of a document written in HTML.' },
  { title: 'Sass', icon: sassImg, description: 'CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.' },
  { title: 'Styled Components', icon: styledComponentsImg, description: 'Library for styling React applications. It allows you to create custom components by writing the CSS itself in JavaScript.' },
  { title: 'Material UI', icon: materialImg, description: 'Library that allows import and use different components to create a user interface in React applications.' },
  { title: 'GIT', icon: gitImg, description: 'DevOps tool used for source code management.' },
  { title: 'Soft skills', icon: softSkillsImg, description: 'Good communication skills, flexibility, resilience to stress, fast learning, dedicated, open-minded, constantly developing' },
]
