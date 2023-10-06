import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Ghat",
    city: "karad",
    distance: 300,
    address:"Somewhere",
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "divya",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Sadashivgad",
    city: "Karad",
    distance: 400,
    address:"Somewhere",
    price: 149,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "tanmay",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Pavkeshwar",
    city: "Karad",
    distance: 49,
    address:"Somewhere",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "amey",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Kathi",
    address:"Somewhere",
    city: "Patan",
    distance: 60,
    price: 249,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "prasad",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Dhareshwar",
    city: "Patan",
    distance: 500,
    price: 299,
    address:"Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "dhanraj",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Dategad",
    city: "Patan",
    distance: 500,
    address:"Somewhere",
    price: 299,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Vasantgad",
    city: "Karad",
    distance: 500,
    price: 199,
    address:"Somewhere",
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Sadawaghapur",
    city: "Patan",
    address:"Somewhere",
    distance: 500,
    price: 249,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
