import { v4 as uuidv4 } from 'uuid'
import ProjectImg from '../images/projectImg.png'
import UTrackerImg from '../images/utracker.jpg'
import GreenCtgImg from '../images/greenctg.jpg'
import CoinTrackerImg from '../images/cointracker.jpg'
import CavinImg from '../images/cavinimg.jpg'
import TwvwImg from '../images/twvw.png'

const projects = [
  {
    id: uuidv4(),
    name: 'TWVW',
    desc: '•	Clients JJ and Melissa Tindall needed a website that captured their beautiful rental properties, scenic surroundings and the exhilarating ATV/UTV trail systems of West Virginia. This application allows users to view rooms, check availability, book reservations and make payment for their rental. Technologies used in this application include Wordpress, HTML, CSS, Elementor ',
    img: TwvwImg,
    url: 'https://thewestvirginiaway.com/',
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc: 'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc: 'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: 'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc: 'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
]

export default projects
