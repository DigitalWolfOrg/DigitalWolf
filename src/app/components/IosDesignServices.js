"use client";
import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import AppCard from "./appCard";

const IOSAppDesignServices = ({heading="iOS App Design Services",description="Our iOS app designs blend modern aesthetics with user experience research, delivering outstanding experiences tailored to your brand and industry. Cynergy creates visually engaging, user-friendly designs that drive user engagement, foster customer loyalty, and help you achieve long-term success.",data = [{heading:"Modernized Design Consultancy",description:"Get expert recommendations for your iOS app projects, incorporating modern features, intuitive UX, and appealing UI designs. Cynergy’s consultancy service offers a roadmap for your app’s success, ensuring your design evolves with current trends and engages users effectively to boost business growth."},{heading:"High-End UX/UI Design",description:"Our iOS design team ensures consistency and precision in creating user-friendly interfaces, aligning with Apple’s guidelines. Cynergy develops sleek, intuitive interfaces that captivate users, elevate your brand’s digital presence, and enhance usability for large audiences."},{heading:"Motion Design",description:"Motion design is crucial for engaging users in today’s tech landscape. Cynergy’s iOS app design team uses innovative graphical techniques to create dynamic, captivating visuals, driving higher user engagement and contributing to increased app revenue across global markets."},{heading:"Branding",description:"Our iOS app branding strategies elevate your app’s identity, creating a lasting impact across the Apple platform. With a focus on user-centered design, Cynergy ensures that your app not only meets but exceeds industry expectations, fostering stronger brand recognition and loyalty."}]}) => {
   const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };



  return (
    <div className="container IOS-services appMobilePadding">
      <div className="row">
        <div className="col-md-8">
          {/* <h2 className="mainHeadingMobile">{heading}</h2> */}
          <h2 className="mainHeadingMobile" dangerouslySetInnerHTML={{ __html: heading }} />
        </div>

        <div className="row">
          <div className="col-md-8">
          <p className="paragraphText">
            {description}
          </p>
          </div>
          <div className="col-md-4 d-flex align-items-start justify-content-end gap-2">   
          <button onClick={() => slider?.current?.slickPrev()} className="interactiveBtn" style={{border:'none',background:'white',borderRadius:'80px',padding:'0.1px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'2px 2px 4px 2px rgba(0, 0, 0, 0.25)'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23.4237" cy="23.4237" r="23.4237" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.34082 0.496582)" fill="white"/>
                                        <path d="M12.9177 24.6945C12.4902 24.267 12.4902 23.5739 12.9177 23.1464L19.8842 16.1798C20.3117 15.7523 21.0048 15.7523 21.4323 16.1798C21.8598 16.6073 21.8598 17.3004 21.4323 17.7279L15.2398 23.9204L21.4323 30.1129C21.8598 30.5404 21.8598 31.2335 21.4323 31.661C21.0048 32.0885 20.3117 32.0885 19.8842 31.661L12.9177 24.6945ZM33.8369 25.0151L13.6917 25.0151L13.6917 22.8257L33.8369 22.8257L33.8369 25.0151Z" fill="#2b90c3"/>
                                        </svg>
                            </button>
                            <button onClick={() => slider?.current?.slickNext()}  className="interactiveBtn" style={{border:'none',background:'none'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23.629" cy="23.9203" r="23.4237" transform="rotate(90 23.629 23.9203)" fill="#2b90c3"/>
                                    <path d="M34.4759 24.6945C34.9034 24.267 34.9034 23.5739 34.4759 23.1464L27.5094 16.1798C27.0819 15.7523 26.3887 15.7523 25.9612 16.1798C25.5337 16.6073 25.5337 17.3004 25.9612 17.7279L32.1537 23.9204L25.9612 30.1129C25.5337 30.5404 25.5337 31.2335 25.9612 31.661C26.3887 32.0885 27.0819 32.0885 27.5094 31.661L34.4759 24.6945ZM13.5566 25.0151L33.7018 25.0151L33.7018 22.8257L13.5566 22.8257L13.5566 25.0151Z" fill="white"/>
                                    </svg>
                            </button>
          </div>
        </div>

        <div className="col-md-4">
        </div>

        <div className="col-md-12 mt-5">
          <Slider ref={slider} {...settings}>

            {data.map((item,i)=>(
                <div key={i}>
                  <AppCard isSlider={true} height={255} hoverEffect="effect1" heading={item.heading} description={item.description} />
              </div>
            ))}

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default IOSAppDesignServices;
