import travelImage from '../assets/travel.png'
import movieImage from '../assets/movie.png'
import birrWatchImage from '../assets/birr-watch.png'
import appleImage from '../assets/apple.png'


export const projects = [
  {
    id: 1,

    title: 'Birr Watch',

    description:
      'An ETB exchange-rate application that allows users to convert currencies and track rates.',

    technologies: [
      'JavaScript',
      'API',
      'localStorage'
    ],

    category: 'JavaScript',

    image: birrWatchImage,

    link: 'https://github.com/lulitay1/codeops/tree/main/module-02-html-css-javascript/days/day22/mini-project/Birr%20Watch'
  },


  {
    id: 2,

    title: 'Apple Website Clone',

    description:
      'A responsive recreation of the Apple website layout built to practice modern web design.',

    technologies: [
      'HTML5',
      'CSS3'
    ],

    category: 'HTML/CSS',

    image: appleImage,

    link: 'https://github.com/lulitay1/codeops/tree/main/module-02-html-css-javascript/apple-clone'
  } ,
    
  
  {
    id: 3,

    title: 'Travel and Tour Website',

    description:
      'A travel and tour website focused on helping people explore destinations in Ethiopia.',

    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP'
    ],

    category: 'JavaScript',

    image: travelImage,

    link: 'https://github.com/lulitay1/Travel-and-Tour-Website'
  },

  {
    id: 4,

    title: 'Movie Search Website',

    description:
      'A movie search application for discovering movies and viewing information about them.',

    technologies: [
      'JavaScript',
      'React',
      'API'
    ],

    category: 'React',

    image: movieImage,

    link: '#'
  }

]