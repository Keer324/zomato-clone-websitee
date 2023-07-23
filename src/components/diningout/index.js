import React from "react";
import "./diningOut.css";
import Collection from "../common/collections";
import { dinigOut } from "../../data/diningOut";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";


const collectionList=[
    {
      id:1,
      title:"23 Serene Rooftop Places",
      cover:"https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674825836.jpg",
      places:"24 Places",
    },
    {
      id:2,
      title:"21 Newly Opened Restaurents",
      cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674825385.jpg",
      places:"12 Places",
    },
    {
      id:3,
      title:"10 Trending Restaurents",
      cover:"https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247364.jpg",
      places:"9 Places",
    },
    {
      id:4,
      title:"11 Picturesque Cafes",
      cover: "https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674826835.jpg",
      places:"10 Places",
    },
    {
      id:5,
      title:"13 Romantic Dining Places",
      cover:"https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674825932.jpg",
      places:"14 Places",
    },
    {
      id:6,
      title:"11 Must-visit Legendary Places",
      cover:"https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675078571.jpg",
      places:"11 Places",
    },
];


const diningFilters=[
    {
      id:1,
      icon:<i className='fi fi-rr-settings-sliders absolute-center'></i>,
      title:"Filters",
    },
    {
      id:2,
      title:"Rating:4.0+",
    },
    {
      id:3,
      title:"Safe and Hygenic",
    },
    {
      id:4,
      title:"Pure Veg",
    },
    {
      id:5,
      title:"Delivery Time",
      icon:<i className='fi fi-rr-apps-sort absolute-center'></i>,
    },
    {
      id:6,
      title:"Great Offers",
    },
];


const diningList=dinigOut;

const DiningOut = () =>{
	return (
	 <div>
       <Collection list={collectionList}/>
       <div className="max-width">
      <Filters filterList={diningFilters} />
       </div>
       <ExploreSection list={diningList} collectionName="Trending dining restaurants in Bengalore"/>
	</div>

);

};

export default DiningOut;