"use client";
import React,{useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeCommitSlider = () => {
    const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container IOS-services weCommitboxNavs appMobilePaddingSmall">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <h2 className="mainHeadingMobile">We Commit To Deliver</h2>
          <p className="paragraphText">
          As a leader in web and mobile app development, we deliver unparalleled solutions that elevate Android and iOS platforms globally. From ideation to launch, our team refines every aspect of app design and performance to ensure exceptional results. Cynergy’s commitment to quality drives us to create applications that meet and exceed the expectations of our clients.
          </p>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-end gap-2">
                            <button className="interactiveBtn"  onClick={() => slider?.current?.slickPrev()} style={{border:'none',background:'white',borderRadius:'80px',padding:'0.1px',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'2px 2px 4px 2px rgba(0, 0, 0, 0.25)'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="23.4237" cy="23.4237" r="23.4237" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0.34082 0.496582)" fill="white"/>
                                        <path d="M12.9177 24.6945C12.4902 24.267 12.4902 23.5739 12.9177 23.1464L19.8842 16.1798C20.3117 15.7523 21.0048 15.7523 21.4323 16.1798C21.8598 16.6073 21.8598 17.3004 21.4323 17.7279L15.2398 23.9204L21.4323 30.1129C21.8598 30.5404 21.8598 31.2335 21.4323 31.661C21.0048 32.0885 20.3117 32.0885 19.8842 31.661L12.9177 24.6945ZM33.8369 25.0151L13.6917 25.0151L13.6917 22.8257L33.8369 22.8257L33.8369 25.0151Z" fill="#2b90c3"/>
                                        </svg>
                            </button>
                            <button className="interactiveBtn" onClick={() => slider?.current?.slickNext()} style={{border:'none',background:'none'}}>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23.629" cy="23.9203" r="23.4237" transform="rotate(90 23.629 23.9203)" fill="#2b90c3"/>
                                    <path d="M34.4759 24.6945C34.9034 24.267 34.9034 23.5739 34.4759 23.1464L27.5094 16.1798C27.0819 15.7523 26.3887 15.7523 25.9612 16.1798C25.5337 16.6073 25.5337 17.3004 25.9612 17.7279L32.1537 23.9204L25.9612 30.1129C25.5337 30.5404 25.5337 31.2335 25.9612 31.661C26.3887 32.0885 27.0819 32.0885 27.5094 31.661L34.4759 24.6945ZM13.5566 25.0151L33.7018 25.0151L33.7018 22.8257L13.5566 22.8257L13.5566 25.0151Z" fill="white"/>
                                    </svg>
                            </button>
          </div>

        <div className="col-md-12 mt-5">
          <Slider ref={slider} {...settings}>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group1231.png"
                  alt="group1231"
                  className="w-100"
                />
                <h4>Full Stack Native App Development Services</h4>
                <p style={{height:'140px',overflowY:'auto',fontSize:'16px'}} className="hide-scrollbar">
                With extensive experience and a proven track record, Cynergy partners with top industries to implement strategies that drive growth and success. Cynergy’s full-stack native app development services are tailored to create platform-specific apps with cutting-edge features, intuitive designs, and seamless functionality. By leveraging innovative tools and technologies, Cynergy crafts iOS and Android applications that enhance your digital presence and position your business for success.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4523.png"
                  alt="group4523"
                  className="w-100"
                />
                <h4>Tablet App Development Services</h4>
                <p style={{height:'140px',overflowY:'auto',fontSize:'18px'}} className="hide-scrollbar">
                The demand for tablet apps continues to grow in today’s tech-driven world. Cynergy’s expertise extends to developing native apps for Apple tablets and iPads, delivering intuitive solutions that cater to various industries—from startups to established enterprises. Cynergy designs apps that offer robust performance and a user-friendly experience across tablet devices, helping businesses scale effectively.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group2352.png"
                  alt="group2352"
                  className="w-100"
                />
                <h4>Android App Development Services</h4>
                <p style={{height:'140px',overflowY:'auto',fontSize:'18px'}} className="hide-scrollbar">
                Our Android app development services offer a streamlined process for creating native apps optimized for both mobile and desktop platforms. Using advanced tools like Kotlin, Java, and Android Jetpack, Cynergy delivers customized solutions that stand out in the competitive marketplace. From design to deployment on the Google Play Store, our expert developers focus on building applications that drive engagement and results.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4232.png"
                  alt="group4232"
                  className="w-100"
                />
                <h4>IPad App Development Services</h4>
                <p style={{height:'140px',overflowY:'auto',fontSize:'18px'}} className="hide-scrollbar">
                Building apps for iPads offers unique opportunities for creating immersive and complex solutions. Cynergy’s team leverages split-screen functionality and large canvas designs to develop apps that perform seamlessly on both iPhones and iPads. With years of expertise in native app development, Cynergy delivers reliable, high-quality apps that empower businesses worldwide.
                </p>
              </div>
            </div>
            <div>
              <div className="weCommitbox">
                <img
                  src="./images/group4232.png"
                  alt="group4232"
                  className="w-100"
                />
                <h4>iOS App Development</h4>
                <p style={{height:'140px',overflowY:'auto',fontSize:'18px'}} className="hide-scrollbar">
                The Apple ecosystem powers a vast global network of users, and Cynergy specializes in creating high-performance native apps for iOS devices. By utilizing the latest Apple programming languages, we build robust architectures that deliver superior functionality and multitasking capabilities. Cynergy’s experienced developers craft seamless, error-free iOS applications tailored to your specific needs, ensuring a flawless user experience.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeCommitSlider;
