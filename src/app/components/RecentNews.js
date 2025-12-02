import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function RecentNews() {
  return (
    <section className='recent_news appMobilePaddingSmall'>
        <div className='container'>
            <div className='recent_news_head'>
                <h2 className='mainHeadingMobile'>Recent News & Tech Insights</h2>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                    <Link href="/blog/1">
                        
                        {/* <Image src="/images/recent2.png" alt="Blog 01" layout="responsive"  width={100} height={100} /> */}
                        
                        <img src='/images/recent2.png' alt='Blog 01' className='img-fluid'/>
                        </Link>
                        <span className='date'>28 / Aug / 2024</span>
                        <Link href="/blog/1">
                            <h4 className='subHeading blogcardHeading'>How To Develop an App For Apple Vision Pro</h4>
                        </Link>
                        <p>Delve into the Apple Vision Pro app development with us and unleash...</p>
                        <button type='button' className='blog-btn'>#softwaredevelopment</button>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <div className='blog_col'>
                    <Link href="/blog/2">
                    {/* <Image src="/images/recentOne.png" alt="Blog 02" layout="responsive"  width={100} height={100} /> */}
                            <img src='/images/recentOne.png' alt='Blog 02' className='img-fluid'/>
                        </Link>
                            <span className='date'>28 / Aug / 2024</span>
                                <Link href="/blog/2">
                           
                            <h4 className='subHeading blogcardHeading'>AI Technology In Education Industry: Detailed Article</h4>
                            </Link>
                            <p>Forget outdated classrooms! AI is revolutionizing education, creati...</p>
                            <button type='button' className='blog-btn'>#softwaredevelopment</button>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='blog_col'>
                        <div className='blog_col'>
                    <Link href="/blog/3">
                            <img src='/images/recent3.png' alt='Blog 03' className='img-fluid'/>
                            {/* <Image src="/images/recent3.png" alt="Blog 03" layout="responsive"  width={100} height={100} /> */}

                    </Link>
                                <span className='date'>28 / Aug / 2024</span>
                        <Link href="/blog/3">
                            
                            <h4 className='subHeading blogcardHeading'>How to Integrate ChatGPT into Your Existing Software</h4>
                            </Link>
                            <p>Discover the process of incorporating ChatGPT into your current sof...</p>
                            <button type='button' className='blog-btn'>#softwarechat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RecentNews
