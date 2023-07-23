import React from "react";
import "./nightlife.css";
import Collection from "../common/collections";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";
import { nightLife } from "../../data/nightlife";


const collectionList=[
    {
      id:1,
      title:"22 Finest Microbreweries",
      cover:"https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg",
      places:"21 Places",
    },
    {
      id:2,
      title:"19 Best Bars & Pubs",
      cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg",
      places:"20 Places",
    },
     
];


const nightFilters=[
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

const nightlifeList=nightLife;

const Nightlife = () =>{
	return  (
	<div>
       <Collection list={collectionList}/>
       <div className="max-width">
       <Filters filterList={nightFilters} />
       </div>
       <ExploreSection list={nightlifeList} collectionName="Nightlife Restaurants in Bengalore"/>
	</div>

);

};

export default Nightlife;