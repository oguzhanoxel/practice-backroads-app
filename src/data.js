import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const  pageLinks = [
    { id: 1, url: '#home', text: 'home' },
    { id: 2, url: '#about', text: 'about' },
    { id: 3, url: '#services', text: 'services' },
    { id: 4, url: '#tours', text: 'tours' },
];

export const socialLinks = [
    { id: 1, url: 'https://www.twitter.com', text: 'twitter', icon: 'fab fa-twitter' },
    { id: 2, url: 'https://www.twitter.com', text: 'twitter', icon: 'fab fa-facebook' },
    { id: 3, url: 'https://github.com/oguzhanoxel', text: 'twitter', icon: 'fab fa-github' },
]

export const services = [
    { id: 1, icon:'fas fa-wallet fa-fw', title:'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    { id: 2, icon:'fas fa-tree fa-fw', title:'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    { id: 3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
    {
        id: 1,
        img: tour1,
        title: 'Tibet Adventure',
        text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'august 26th, 2020',
        country: 'china',
        duration: 6,
        price:2100
    },
    {
        id: 2,
        img: tour2,
        title: 'best of java',
        text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'october 1th, 2020',
        country: 'indonesia',
        duration: 11,
        price:1400
    },
    {
        id: 3,
        img: tour3,
        title: 'explore hong kong',
        text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'september 15th, 2020',
        country: 'hong kong',
        duration: 8,
        price:5000
    },
    {
        id: 4,
        img: tour4,
        title: 'kenya highlights',
        text: 'orem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'december 5th, 2019',
        country: 'kenya',
        duration: 20,
        price:3300
    },
]