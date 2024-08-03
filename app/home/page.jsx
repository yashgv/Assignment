'use client'


import "@public/styles/explore.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import React from "react";

import { filters, populars, recommended } from "@utils/data";

import PopularCard from "@components/PopularCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import '@node_modules/swiper/swiper-bundle.min.css';
import RecommendedCard from "@components/RecommendedCard";

import Nav from "@components/Nav";


const page = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value)
  
  return (
    <>
        <section>
            <div className="header">
                <div className="sub_header">
                    <p className="explore">Explore</p>
                    <p> <span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" fillRule="evenodd" clipRule="evenodd" d="M8 14C10.9455 12.6667 13.3333 10.2789 13.3333 7.33333C13.3333 4.38781 10.9455 2 8 2C5.05448 2 2.66667 4.38781 2.66667 7.33333C2.66667 10.2789 5.05448 12.6667 8 14ZM8 9.33333C9.10457 9.33333 10 8.4379 10 7.33333C10 6.22876 9.10457 5.33333 8 5.33333C6.89543 5.33333 6 6.22876 6 7.33333C6 8.4379 6.89543 9.33333 8 9.33333Z" fill="url(#paint0_linear_0_78)"/>
<path d="M13.3333 7.33333C13.3333 10.2789 10.9455 12.6667 8 14C5.05448 12.6667 2.66667 10.2789 2.66667 7.33333C2.66667 4.38781 5.05448 2 8 2C10.9455 2 13.3333 4.38781 13.3333 7.33333Z" fill="url(#paint1_linear_0_78)"/>
<path d="M10 7.33333C10 8.4379 9.10457 9.33333 8 9.33333C6.89543 9.33333 6 8.4379 6 7.33333C6 6.22876 6.89543 5.33333 8 5.33333C9.10457 5.33333 10 6.22876 10 7.33333Z" fill="url(#paint2_linear_0_78)"/>
<circle cx="8" cy="8" r="2" fill="white"/>
<defs>
<linearGradient id="paint0_linear_0_78" x1="13.1961" y1="10.6538" x2="2.27194" y2="10.523" gradientUnits="userSpaceOnUse">
<stop stopColor="#176FF2"/>
<stop offset="1" stopColor="#196EEE"/>
</linearGradient>
<linearGradient id="paint1_linear_0_78" x1="13.1961" y1="10.6538" x2="2.27194" y2="10.523" gradientUnits="userSpaceOnUse">
<stop stopColor="#176FF2"/>
<stop offset="1" stopColor="#196EEE"/>
</linearGradient>
<linearGradient id="paint2_linear_0_78" x1="13.1961" y1="10.6538" x2="2.27194" y2="10.523" gradientUnits="userSpaceOnUse">
<stop stopColor="#176FF2"/>
<stop offset="1" stopColor="#196EEE"/>
</linearGradient>
</defs>
                      </svg>
                        </span> location </p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.97977 5.3131C3.15729 5.13559 3.43506 5.11945 3.6308 5.26469L3.68688 5.3131L8 9.62599L12.3131 5.3131C12.4906 5.13559 12.7684 5.11945 12.9641 5.26469L13.0202 5.3131C13.1977 5.49061 13.2139 5.76839 13.0686 5.96413L13.0202 6.02021L8.35355 10.6869C8.17604 10.8644 7.89826 10.8805 7.70252 10.7353L7.64644 10.6869L2.97977 6.02021C2.78451 5.82495 2.78451 5.50837 2.97977 5.3131Z" fill="url(#paint0_linear_0_83)"/>
                        <defs>
                        <linearGradient id="paint0_linear_0_83" x1="13.0338" y1="9.25319" x2="2.4558" y2="8.99334" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#176FF2"/>
                        <stop offset="1" stopColor="#196EEE"/>
                        </linearGradient>
                        </defs>
                        </svg>

                </div>
                <h1 className="aspen">Aspen</h1>
            </div>
            <div className="search_bar">
              <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_0_91" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="1" y="1" width="17" height="17">
                <path fillRule="evenodd" clipRule ="evenodd" d="M1.66667 1.66666H17.8973V17.8975H1.66667V1.66666Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_0_91)">
                <path fillRule="evenodd" clipRule ="evenodd" d="M9.78234 2.91666C5.9965 2.91666 2.9165 5.99582 2.9165 9.78166C2.9165 13.5675 5.9965 16.6475 9.78234 16.6475C13.5673 16.6475 16.6473 13.5675 16.6473 9.78166C16.6473 5.99582 13.5673 2.91666 9.78234 2.91666ZM9.78234 17.8975C5.30734 17.8975 1.6665 14.2567 1.6665 9.78166C1.6665 5.30666 5.30734 1.66666 9.78234 1.66666C14.2573 1.66666 17.8973 5.30666 17.8973 9.78166C17.8973 14.2567 14.2573 17.8975 9.78234 17.8975Z" fill="#B8B8B8"/>
                </g>
                <mask id="mask1_0_91" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="14" y="14" width="5" height="5">
                <path fillRule="evenodd" clipRule ="evenodd" d="M14.3666 14.7558H18.5533V18.9347H14.3666V14.7558Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_0_91)">
                <path fillRule="evenodd" clipRule ="evenodd" d="M17.9285 18.9347C17.7693 18.9347 17.6093 18.8739 17.4868 18.7522L14.5502 15.8239C14.306 15.5797 14.3052 15.1839 14.5493 14.9397C14.7927 14.6939 15.1885 14.6956 15.4335 14.9381L18.3702 17.8672C18.6143 18.1114 18.6152 18.5064 18.371 18.7506C18.2493 18.8739 18.0885 18.9347 17.9285 18.9347Z" fill="#B8B8B8"/>
                </g>
                </svg>

              
              </span>

                <input type="text" placeholder="Find things to do" />
                
            </div>
            <div className="filters">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              className="tabs"
              key={1}
              sx={{

                '& .MuiTabs-indicator': {
                 display:"none" // Change indicator color
                },
                '& .MuiTab-root': {
                  color: "#B8B8B8",
                  textTransform: 'none',
                  minWidth: 80,
                  fontSize: '1rem',
                  WebkitTapHighlightColor: 'transparent'
                },
              }}
            >
              {filters.map((filter,i) => (
                <Tab label={filter} key={i} />
              ))}
              
            </Tabs>
            </div>

          <div className="popular_container">
            <div className="popular_header">
              <p className="popular">Popular</p>
              <a href="" className="see_all">See all</a>
            </div>
            
            <Swiper
                spaceBetween={3}
                slidesPerView={1.8}
                className="popular_swiper"
              >
                {populars.map((popular, i) => (
                  <SwiperSlide key={i}>
                    <a href="staticpage">
                      <PopularCard 
                        placeImg={popular.placeImg}
                        placeName={popular.placeName}
                        rating={popular.rating}
                      />

                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            
          </div>

          
          <div className="popular_container">
            <div className="popular_header">
              <p className="popular">Recommended</p>
              <a href="" className="see_all">See all</a>
            </div>
            
            <Swiper
                spaceBetween={1}
                slidesPerView={1.8}
                className="popular_swiper"
              >
                {recommended.map((x, i) => (
                  <SwiperSlide key={i}>
                    <a href="/staticpage">
                      <RecommendedCard 
                        placeImg={x.placeImg}
                        placeName={x.placeName}
                        time={x.time}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            
          </div>

        </section>
        <Nav></Nav>
    </>    
  )
}

export default page