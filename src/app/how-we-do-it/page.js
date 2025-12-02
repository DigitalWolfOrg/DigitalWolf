"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { useEffect, useRef } from "react";
import RecentNews from "../components/RecentNews";
import CaseStudy from "../components/CaseStudy";
import CaseStudySlider from "../components/CaseStudySlider";
import {agile,waterfall,hybrid,process} from './data'
import Image from "next/image";

function HowWeDoIt() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-active");
          } else {
            entry.target.classList.remove("is-active");
          }
        });
      },
      { threshold: 0.7 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      {/* Main Banner */}
      <div className="about-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>How We Do It</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 container" style={{ marginTop: "100px" }}>
            <Tabs>
              <TabList>
                <Tab>Our Process</Tab>
                <Tab>Agile</Tab>
                <Tab>Waterfall</Tab>
                <Tab>Hybrid</Tab>
              </TabList>

              <div className="tab-pannell rounded">
              <TabPanel>
                <div className="row">
                {process.map((item,i)=>(
                  <div key={i} className="d-flex pe-5">
                      <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[0] = el)}
                    >
                      <h2>{(i+1 < 10) ? '0' : ''}{i+1}</h2>
                    </div>
                    <div className="col-md-9">
                      {i==0 && <h3>PHASE A - R&D</h3>}
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        {/* <Image src="/images/dotted.png" className="dotted" alt="dotted"  layout="responsive"  width={100} height={100} /> */}
                        
                        <div className="col-md-4">
                          <h4>
                          {item.heading}
                          </h4>
                        </div>
                        <div className="col-md-8 pe-5" style={{fontSize:'18px'}}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}  
                </div>
                 
                </TabPanel>
                <TabPanel>
                <div className="row">
                {agile.map((item,i)=>(
                  <div key={i} className="d-flex pe-5">
                      <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[0] = el)}
                    >
                      <h2>{(i+1 < 10) ? '0' : ''}{i+1}</h2>
                    </div>
                    <div className="col-md-9">
                      {i==0 && <h3>PHASE B - Agile</h3>}
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        {/* <Image src="/images/dotted.png" className="dotted" alt="dotted"  layout="responsive"  width={100} height={100} /> */}

                        <div className="col-md-4">
                          <h4>
                          {item.heading}
                          </h4>
                        </div>
                        <div className="col-md-8 pe-5 " style={{fontSize:'18px'}}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}  
                </div>
                 
                </TabPanel>
                <TabPanel>
                <div className="row">
                {waterfall.map((item,i)=>(
                  <div key={i} className="d-flex pe-5">
                      <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[0] = el)}
                    >
                      <h2>{(i+1 < 10) ? '0' : ''}{i+1}</h2>
                    </div>
                    <div className="col-md-9">
                      {i==0 && <h3>PHASE C - Waterfall</h3>}
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        {/* <Image src="/images/dotted.png" className="dotted" alt="dotted" layout="responsive"  width={100} height={100} /> */}

                        <div className="col-md-4">
                          <h4>
                          {item.heading}
                          </h4>
                        </div>
                        <div className="col-md-8 pe-5" style={{fontSize:'18px'}}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}  
                </div>
                 
                </TabPanel>
                <TabPanel>
                <div className="row">
                {hybrid.map((item,i)=>(
                  <div key={i} className="d-flex pe-5">
                      <div
                      className="col-md-3 sticky-number"
                      ref={(el) => (sectionsRef.current[0] = el)}
                    >
                      <h2>{(i+1 < 10) ? '0' : ''}{i+1}</h2>
                    </div>
                    <div className="col-md-9">
                      {i==0 && <h3>PHASE D - Hybrid</h3>}
                      <div className="row how-steps">
                        <img
                          src="./images/dotted.png"
                          alt="dotted"
                          className="dotted"
                        />
                        {/* <Image src="/images/dotted.png" className="dotted" alt="dotted" layout="responsive"  width={100} height={100} /> */}

                        <div className="col-md-4">
                          <h4>
                          {item.heading}
                          </h4>
                        </div>
                        <div className="col-md-8 pe-5" style={{fontSize:'18px'}}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}  
                </div>
                 
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <CaseStudySlider />
      </div>
      <div className="mt-5">
        <RecentNews />
      </div>
      <Footer />
    </>
  );
}

export default HowWeDoIt;
