import { RiTimeLine } from 'react-icons/ri';
import { BsTwitter, BsGithub, BsInstagram } from 'react-icons/bs';
import projectImg from './images/project1.jpg';
import projectImg2 from './images/project2.jpg';
import projectImg3 from './images/project3.jpg';
import projectImg4 from './images/project4.jpg';
import projectImg5 from './images/project5.jpg';
import projectImg6 from './images/project6.jpg';

export const jobList = [
  {
    id: 1,
    icon: <RiTimeLine />,
    title: 'Full stack developer',
    years: '2021 - current',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque veniam laudantium quas architecto fugit, quae cum labore sint autem tenetur, ut numquam corrupti vel!',
  },
  {
    id: 2,
    icon: <RiTimeLine />,
    title: 'front end developer',
    years: '2019 - 2021',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque veniam laudantium quas architecto fugit, quae cum labore sint autem tenetur, ut numquam corrupti vel!',
  },
  {
    id: 3,
    icon: <RiTimeLine />,
    title: 'Back end developer',
    years: '2010 - 2018',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque veniam laudantium quas architecto fugit, quae cum labore sint autem tenetur, ut numquam corrupti vel!',
  },
  {
    id: 4,
    icon: <RiTimeLine />,
    title: 'front end developer',
    years: '2001 - 2008',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur eaque veniam laudantium quas architecto fugit, quae cum labore sint autem tenetur, ut numquam corrupti vel!',
  },
];

export const socialList = [
  { id: 1, icon: <BsTwitter />, href: 'https://twitter.com/home' },
  { id: 2, icon: <BsInstagram />, href: 'https://twitter.com/home' },
  { id: 3, icon: <BsGithub />, href: 'https://twitter.com/home' },
];

export const projectList = [
  {
    id: 1,
    title: 'sample 1',
    lang: 'javascript',
    duration: '2 days',
    img: projectImg,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, praesentium, nostrum ut nihil, officiis quo placeat perspiciatis non minima odit nemo nesciunt laboriosam voluptatum! Quia quaerat minus possimus iure adipisci.',
  },
  {
    id: 2,
    title: 'sample 2',
    lang: 'react',
    duration: '7 days',
    img: projectImg2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, praesentium, nostrum ut nihil, officiis quo placeat perspiciatis non minima odit nemo nesciunt laboriosam voluptatum! Quia quaerat minus possimus iure adipisci.',
  },
  {
    id: 3,
    title: 'sample 3',
    lang: 'php',
    duration: '3 days',
    img: projectImg3,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, praesentium, nostrum ut nihil, officiis quo placeat perspiciatis non minima odit nemo nesciunt laboriosam voluptatum! Quia quaerat minus possimus iure adipisci.',
  },
  {
    id: 4,
    title: 'sample 4',
    lang: 'react',
    duration: '5 days',
    img: projectImg4,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, praesentium, nostrum ut nihil, officiis quo placeat perspiciatis non minima odit nemo nesciunt laboriosam voluptatum! Quia quaerat minus possimus iure adipisci.',
  },
  {
    id: 5,
    title: 'sample 5',
    lang: 'javascript',
    duration: '7 days',
    img: projectImg5,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, praesentium, nostrum ut nihil, officiis quo placeat perspiciatis non minima odit nemo nesciunt laboriosam voluptatum! Quia quaerat minus possimus iure adipisci.',
  },
  {
    id: 6,
    title: 'sample 6',
    lang: 'react',
    duration: '1 days',
    img: projectImg6,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, praesentium, nostrum ut nihil, officiis quo placeat perspiciatis non minima odit nemo nesciunt laboriosam voluptatum! Quia quaerat minus possimus iure adipisci.',
  },
];
