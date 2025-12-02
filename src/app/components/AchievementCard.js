"use client"
import React,{useState} from 'react'
import CardDetailPopup from './CardDetailPopup'
import { truncateString } from '../utils/common'
import Image from 'next/image'

function AchievementCard({data}) {
   const [selectedCard,setSelectedCard] = useState(null)


  return ( 
    <>
    {selectedCard && <CardDetailPopup item={selectedCard} setSelectedCard={setSelectedCard} />}
    <div className="row">
    {data.map((item,i)=>{
      if(item.showFull){
        return(
          <>
          <div className="row">
          <div className="col-md-6">
            <img
              src={`${item.imageUrl}`}
              alt="image-1"
              className="w-100"

              style={{cursor:"pointer",objectFit:'cover',borderRadius:'10px'}} 
              onClick={() => setSelectedCard(item)}
            />
          {/* <Image src={item.imageUrl} alt={item.heading} style={{cursor:"pointer"}}  onClick={() => setSelectedCard(item)} layout="responsive" width={100} height={100} /> */}

          </div>
          <div className="arrows-div mgTop25 col-md-6 d-flex align-items-start flex-column paddingLeft3">
            <img  style={{cursor:"pointer"}}  src="./images/achievement-page/arrow-1.png" onClick={() => setSelectedCard(item)} alt="arrow-1" />
            <h1 className="heading50 cardHead my-3"  style={{cursor:"pointer"}}  onClick={() => setSelectedCard(item)}>{item.heading}</h1>
            <p className="paragraphText"  style={{cursor:"pointer"}}  onClick={() => setSelectedCard(item)}>
            {truncateString(item.description,450)}
            </p>
            <div className="tags cardTags">
              {item.tags.map((tag,index)=>(<button style={{cursor:'default'}} key={index}>{tag}</button>))}
            </div>
          </div>
        </div>
        <hr className="my-5" />
        </>
        )
      }else{
        return(   
    <div style={{position: "relative"}} className={`col-md-6 my-4 ${i < data.length - 2?'border-bottom pb-5':'' }`} key={i}>
      {/* <Image src={item.imageUrl} alt={item.heading} style={{cursor:"pointer"}}  onClick={() => setSelectedCard(item)} layout="responsive" width={100} height={100} /> */}
   
    <img
      src={`${item.imageUrl}`}
      className="w-100"
      style={{cursor:"pointer",objectFit:'cover',borderRadius:'10px'}} 
      alt="image-2"
      onClick={() => setSelectedCard(item)}
    />
    <div className="arrows-div d-flex align-items-start me-4 justify-content-center flex-column mt-4">
      <img src="./images/achievement-page/arrow-1.png" onClick={() => setSelectedCard(item)} alt="arrow-1" />
      <h2 style={{cursor:"pointer"}} className="heading50 cardHead" onClick={() => setSelectedCard(item)}>{item.heading}</h2>
      <p onClick={() => setSelectedCard(item)} style={{cursor:"pointer"}} className="paragraphText">
        {truncateString(item.description,270)}
      </p>
      <div className="tags cardTags">
        {item.tags.map((tag,index)=>(<button style={{cursor:'default'}} key={index}>{tag}</button>))}
      </div>
    </div>
    </div>
        )
      }
    })}
    </div>
    </>
  )
}

export default AchievementCard