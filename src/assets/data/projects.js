import { v4 as uuidv4 } from 'uuid'
import CavinImg from '../images/cavinimg.jpg'
import TwvwImg from '../images/twvw.png'
import MernCartImg from '../images/mern-cartImg.png'
import CBOImgImg from '../images/cold-beer-openImg.png'
import BudgetTrackerImg from '../images/budget-trackerImg.png'

const projects = [
  {
    id: uuidv4(),
    name: 'The West Virginia Way',
    desc: 'Clients JJ and Melissa Tindall needed a website that captured their beautiful rental properties, scenic surroundings and the exhilarating ATV/UTV trail systems of West Virginia. This application allows users to view rooms, check availability, book reservations and make payment for their rental. Technologies used in this application include Wordpress, HTML, CSS, Elementor',
    img: TwvwImg,
    deployedLink: 'http://thewestvirginiaway.com/',
  },
  {
    id: uuidv4(),
    name: 'Cold Beer Open',
    desc: 'Clients Terry and Earl host the Cold Beer Open annual golf tournament. With nearly 100 participates each year they needed a website rich in tradition and energy while modernizing the processes and communications. •	Technologies used in this application are React.js, Reactstrap, MySql, Passport, Express, Axios, Animate.css',
    img: CBOImgImg,
    deployedLink: 'https://coldbeeropen.herokuapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Full Stack eCommerce Cart',
    desc: 'This application incudes setting up the backend API to styling the components using pure css to create a fully responsive eCommerce Cart. Technologies used in this application are React.js, Redux, Node, MongoDB',
    img: MernCartImg,
    deployedLink: 'https://www.mojowebdesignanddevelopment.com/',
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
    deployedLink: 'https://www.mojowebdesignanddevelopment.com/',
  },
  {
    id: uuidv4(),
    name: 'Budget Tracker',
    desc: 'A web application designed to help users keep track of all finances. It allows users to create their own categories for saving or spending to keep their financial future on track. Technologies used in this application are Node.js, Express, Handlebars, MySql, Sequelize, Passport, ESLint, TravisCI',
    img: BudgetTrackerImg,
    deployedLink: 'https://budget-tracker-project.herokuapp.com/overview',
  },
]

export default projects
