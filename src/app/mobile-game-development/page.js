"use client";
import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import OneTestimonial from "../components/OneTestimonial";
import RecentNews from "../components/RecentNews";
import TestimonialTabs from "../components/TestimonialTabs";
import MarqueeSlider from "../components/MarqueeSlider";
import CaseStudy from "../components/CaseStudy";
import HotspotSection from "../components/HotspotSection";
import FaqsSection from "../components/FaqsSection";
import BudgetSection from "../components/BudgetSection";
import AppCta from "../components/AppCta";
import MainBanner from "../components/MainBanner";
import Link from "next/link";
import {topRanked,faqData,benefitsWorking,uptoTime} from './data'
import DropUsALine from "../components/DropUsALine";
import AppCard from "../components/appCard";

function page() {
 
  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Mobile Game Development" />

      {/* Second Section */}

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h2 className="mainHeadingMobile">Discover Our History</h2>
                <p className="paragraphText col-md-11 mt-4">
                With years of experience in the digital landscape, we at Digital Wolf have continuously adapted to the changing needs of mobile and web app development. Digital Wolf’s mission is to design innovative and functional applications for clients globally. 
                <br />
                <br />
                We take pride in crafting unique, customized solutions that meet the ever-evolving needs of businesses, resulting in successful partnerships and impactful projects. Digital Wolf’s dedication to technology, creativity, and client satisfaction has earned us recognition in numerous industry rankings.
                </p>
                <DropUsALine />
              </div>
            </div>
            <div className="col-md-5 py-2 mgTop25 paddingRight3">
              <img
                src="./images/gameImage.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="second-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <div className="col-md-6 paddingRight3 py-2">
              <img
                src="./images/faqs-sec.png"
                alt="faqs-sec"
                className="h-100 w-100"
              />
            </div>
            <div className="col-md-6 mt-5">
              <div className="accordion mt-2" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header w-100">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span className="accordionText">
                        Strategy
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Digital Wolf’s strategy focuses on understanding your business goals, target audience, and market trends to deliver tailored solutions. We craft a roadmap that ensures seamless project execution, maximizes ROI, and positions your brand competitively in the digital landscape, driving growth and long-term success.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span className="accordionText">
                        UI Design
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    At Digital Wolf, we specialize in creating visually captivating UI designs that enhance user interaction. Our designs prioritize clarity, functionality, and accessibility, delivering seamless navigation and engaging interfaces. By blending aesthetics with usability, we ensure your digital products leave a lasting impression on users across all devices.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span className="accordionText">
                        UX Design
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Digital Wolf’s UX design services focus on creating intuitive and meaningful user experiences. By analyzing user behavior and needs, we craft designs that ensure smooth navigation, usability, and engagement. Our user-centered approach ensures your digital products meet customer expectations, driving satisfaction, retention, and business success.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <span className="accordionText">
                        Front-end development
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                    Digital Wolf’s front-end development expertise transforms designs into interactive, high-performing digital experiences. Using the latest technologies and responsive frameworks, we build web and app interfaces that deliver fast, seamless, and engaging user experiences. Our solutions ensure cross-platform compatibility and flawless functionality across all devices and browsers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      
      <CaseStudy />
      
      <div
        className="second-last-section appMobilePaddingSmall"
        style={{ backgroundColor: "#FFFBF8", padding: "30px 0px 60px 0px" }}
      >
        <div className="container ios-android">
          <div className="row">
            <div className="col-md-9 py-5 d-flex align-items-center justify-content-center">
              <div className="text-section">
                <h1 className="mainHeadingMobile">
                  Mobile Game Development Services For <span>IOS & ANDROID</span>
                </h1>
                <p className="paragraphText">
                Digital Wolf follows a detailed and precise software development lifecycle that allows us to craft mobile applications that align with your brand's goals. Our expertise in mobile development ensures that your app is designed to increase user engagement, drive revenue, and gain global visibility. Digital Wolf provides a complete mobile solution tailored to your business, optimizing every aspect of your app’s development.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <img
                src="./images/mobile-app.png"
                alt="faqs-sec"
                className="h-100 w-100 object-fit-cover rounded"
              />
            </div>

            <div className="col-md-7  py-2 mgTop25 paddingLeft3 paddingRight3">
              <div className="text-section">
                <h1 className="title-page-2">
                  <span>Android App Development</span>
                </h1>
                <p className="paragraphText">
                Looking for a trusted partner to create your Android app? Our team brings innovative, high-quality solutions to the table, ensuring your business thrives in the Android ecosystem. Digital Wolf use the latest tools and techniques to develop apps that are reliable, secure, and functional.
                </p>
              </div>
              <div className="text-section">
                <h1 className="title-page-2">
                  <span>iOS App Development</span>
                </h1>
                <p className="paragraphText">
                Transform your ideas into extraordinary iOS applications. From the initial coding phase to the final launch, Digital Wolf’s expert developers work with cutting-edge methodologies to create apps that are optimized, scalable, and high-performing across any iOS device. Digital Wolf’s focus is on delivering results that drive a strong return on investment for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-last-section appMobilePaddingSmall">
        <div className="container">
          <div className="row">
            <h1 className="top-ranked mainHeadingMobile">
              Top Ranked Solutions for
              <br /> Multiple Platforms
            </h1>
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src="./images/line-chart.png"
                alt="faqs-sec"
                className="line-image"
              />
              <div>
                  {topRanked.map((item,i)=>(
                      <div key={i} className="my-4">
                        <AppCard heading={item.heading} height={168} hoverEffect="effect2" description={item.description} />  
                      </div>
                     
                  ))}
              </div>
            </div>
            <div className="col-md-6 py-2 paddingRight3">
              <img
                src="./images/solution.png"
                alt="faqs-sec"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="second-last-section appMobilePaddingSmall"
        style={{ backgroundColor: "#FFFBF8", padding: "30px 0px 60px 0px" }}
      >
        <div className="container benefits-of-working">
          <div className="row">
            <div className="col-md-9 py-5">
              <h2 className="mainHeadingMobile">
                Benefits of working with <br /> Digital Wolf
              </h2>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-end">
           <DropUsALine />
            </div>
          </div>
          <div className="row">
            {benefitsWorking.map((item, i) => (
               <div className="col-md-4 my-2" key={i}>
              <AppCard heading={item.heading} isCenter={true} height={370} hoverEffect="effect2" description={item.description} />
             
             </div>
            ))
            }
          </div>
        </div>
      </div>

     

      <div className="container case-study py-5 my-5 appMobilePaddingSmall">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mainHeadingMobile">up-to-the-minute</h2>
            <p className="paragraphText">
            Digital Wolf leverages the latest technologies to build high-performance mobile applications. Our expertise in cutting-edge tools ensures seamless user experiences, enabling apps to perform efficiently across all platforms. By incorporating innovations such as artificial intelligence, machine learning, and cloud computing, we push the boundaries of mobile development. Our development process prioritizes scalability, security, and real-time functionality, ensuring that your app stays ahead of the curve.
             {/* Whether it's cross-platform development or integrating the newest trends, Digital Wolf empowers businesses with technology solutions that deliver exceptional results and meet evolving industry demands. */}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
          <div className="row">
            {uptoTime.map((item, i) => (
              <div className={`col-md-6 my-2`} key={i}>
              <AppCard heading={item.heading} height={206} hoverEffect="effect1" description={item.description} />
              
            </div>
            ))}
          
    
          </div>
        </div>

      <AppCta CtaHeading="Into an Innovative Mobile App." />

      <div className="mt-5">
        <FaqsSection faqs={faqData} />
        <BudgetSection />
      </div>
      <Footer />
    </>
  );
}

export default page;
