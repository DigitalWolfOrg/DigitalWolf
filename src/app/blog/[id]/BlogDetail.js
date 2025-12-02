"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MainBanner from "@/app/components/MainBanner";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import { data } from "./data";

const BlogDetail = ({id}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [content, setContent] = useState(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    if (id) {
      const filterData = data.find((item) => item.id.toString() === id);
      console.log(filterData);
      setContent(filterData);
    }
  }, [id]);

  return (
    <>
      <Header />
      <MainBanner MainBannerHeading="Blogs Details" />
      {isPopupVisible && <Popup togglePopup={togglePopup} />}

      <div style={{ backgroundColor: "#FEF4ED" }}>
        <div className="container app-testing blogSection1 appMobilePadding">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start justify-content-center flex-column blogSection1Text">
              <p style={{ color: "#696969", fontSize: "16px" }}>
                {content?.section1?.date}
              </p>
              <h2 className="blogHeading">{content?.section1?.heading}</h2>
              <p
                className="paragraphText"
                style={{ color: "#696969", marginTop: "20px" }}
              >
                {content?.section1?.description}
              </p>

              <div className="mt-2 d-flex gap-3" style={{ flexWrap: "wrap" }}>
                {content?.section1?.hashtag?.length > 0 &&
                  content?.section1?.hashtag?.map((item, i) => (
                    <div className="tagBtn" key={i}>
                      #{item}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-md-6 blogSection1Img">
              <img
                src={content?.section1?.imgUrl}
                alt={content?.section1?.heading}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="blogSection2 row">
        <div className="col-md-10">
          <h1
            className="blogHeading"
            style={{ fontWeight: "bold", fontSize: "55px" }}
          >
            {content?.section2?.heading}
          </h1>
          <p className="my-4 paragraphText" style={{ color: "#696969" }}>
            {content?.section2?.description}
          </p>

          {content?.section2?.blogList?.length > 0 &&
            content?.section2?.blogList?.map((item, index) => (
              <div key={index} className="my-4">
                <h1
                  className="blogHeadingSub"
                  style={{ fontWeight: "bold", fontSize: "45px" }}
                >
                  {item.heading}
                </h1>
                <p className="mt-3 paragraphText">{item.description}</p>
                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="d-flex align-items-start my-2 ps-4 gap-3"
                  >
                    <div className="smallCircle mt-2" />
                    <div className="paragraphText">{point}</div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="blogSection3" style={{ backgroundColor: "#FEF4ED" }}>
        <div className="row blogSection3Row">
          <div className="col-md-7 blogSection1">
            <h1
              className="blogHeading"
              style={{
                fontWeight: "bold",
                fontSize: "55px",
                marginBottom: "2rem",
              }}
            >
              {content?.section3?.heading}
            </h1>
            {content?.section3?.benefits?.length > 0 &&
              content?.section3?.benefits?.map((item, index) => (
                <div key={index}>
                  <h2
                    className="subHeading"
                    style={{
                      fontSize: "26px",
                      fontWeight: 600,
                      color: "#0D0D0D",
                    }}
                  >
                    {item.heading}
                  </h2>
                  <p className="paragraphText">{item.description}</p>
                </div>
              ))}
          </div>
          <div
            className="col-md-5 pe-5 d-flex align-items-center"
            style={{ marginTop: "", marginBottom: "" }}
          >
            <img
              src={content?.section3?.imgUrl}
              alt={content?.section3?.heading}
              style={{ width: "" }}
            />
          </div>
        </div>
      </div>

      <div className="blogLastSection mt-5">
        <p
          className="text-center mobSmallHeading"
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Have More Questions Or Ready To{" "}
          <span style={{ color: "#2b90c3" }}>Start Building</span> <br /> Your
          Dream product?
        </p>
        <div
          className="row d-flex align-items-center justify-content-center"
          style={{ marginTop: "-2rem" }}
        >
          <div className={`contactusBtnArea`}>
            <div className="buttons" onClick={togglePopup}>
              <button className="second-btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetail;
