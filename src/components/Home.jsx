import React, { useEffect, useState } from 'react';
import Slider from 'react-slick'
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';



const Home = () => {

    const[latestData,setLatestData] = useState();
    const[topData,setTopData] = useState();
    console.log("ee",latestData)
    console.log("zz",topData)
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    backgroundColor: " grey",
                }}
                onClick={onClick}
            />
        );
    };
    
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    background: "grey",
                }}
                onClick={onClick}
            />
        );
    };
    const settings = {
     
       
        infinite: true, // Enable infinite scrolling
        speed: 500, // Transition speed (in milliseconds)
        slidesToShow: 6, // Number of slides to show at once
        slidesToScroll: 2, // Number of slides to scroll at a time  
        prevArrow: <PrevArrow />, // Custom previous arrow
        nextArrow: <NextArrow />, // Custom next arrow
    };
    useEffect(()=>{
        dataHandle();
    },[0])
       const dataHandle =()=>{
        axios.post("http://157.66.191.24:3003/api/get_latest_video").then((res)=>{
            
            setLatestData(res.data.data)
        })
        .catch((error) =>{
            console.log(error)
        })
       }
       useEffect (() =>{
        topDataHandle()
       },[0])
       const topDataHandle = () =>{
        axios.get("http://157.66.191.24:3003/api/get_top_video").then((res)=>{
            console.log(res);
            setTopData(res.data.data)

        })
        .catch((error)=>{
            console.log(error)
        })
       }
    return (
        <>
       
            <div id="page-top">

                <div id="wrapper">
                    <div id="content-wrapper">
                        <div className="container-fluid pb-0">
                            <div className="top-mobile-search">
                                <div className="row">
                                    <div className="col-md-12">
                                        <form className="mobile-search">
                                            <div className="input-group">
                                                <input type="text" placeholder="Search for..." className="form-control" />
                                                <div className="input-group-append">
                                                    <button type="button" className="btn btn-dark"><i className="fas fa-search" /></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="top-category section-padding mb-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title">
                                            <div className="btn-group float-right right-action">
                                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top Rated</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp; Viewed</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp; Close</a>
                                                </div>
                                            </div>
                                            <h6>  Channels Categories</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className=" owl-carousel-category">
                                        <Slider {...settings}>
                                            {latestData?.map((data)=>{
                                                return(
                                                    <div className="item">
                                                    <div className="category-item">
                                                        <a href="#" style={{display:"flex",
                                                                            justifyContent:"center",
                                                                            alignItems:"center",
                                                                            flexDirection:"column"
                                                                            }}>
                                                            {data?.video[1 ]?.filename?( 
                                                             <img className="img-fluid"
                                                                   style={{objectFit:"cover"}}
                                                                 src={`http://157.66.191.24:3003/uploads/` + data?.video[1 ]?.filename} alt />):(
                                                            <img
                                                            className="img-fluid"
                                                            src="img/s5.png"
                                                            alt=""
                                                          />
                                                        )}
                                                          
                                                            <h6>{data?.channel_name}</h6>
                                                            <p>{data?.video_views} Views</p>
                                                        </a>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                            

                                          
                                            </Slider> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="video-block section-padding">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title">
                                            <div className="btn-group float-right right-action">
                                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top Rated</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp; Viewed</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp; Close</a>
                                                </div>
                                            </div>
                                            <h6>Featured Videos</h6>
                                        </div>
                                    </div>
                                    {topData?.map((data)=>{
                                        return(  <div className="col-xl-3 col-sm-6 mb-3">
                                            <div className="video-card">
                                                <div className="video-card-image">
                                                    <Link className="play-icon"
                                                          to='/videopage'
                                                          onClick={()=>{localStorage.setItem("topvideoid",data._id)}}><i className="fas fa-play-circle" /></Link>
                                                        
                                                    <a href="#">
                                                    {data?.video[1 ]?.filename?( 
                                                             <img className="img-fluid"
                                                             style={{maxWidth:"100%",
                                                                     height:"139px",
                                                                     lineHeight:"19.5px",
                                                                     width:"222.083px",
                                                                    boxSizing:"border-box",
                                                                     objectFit:"cover"}}
                                                                 src={`http://157.66.191.24:3003/uploads/` + data?.video[1 ]?.filename} alt />):(
                                                                    <img className="img-fluid" src="img/v1.png" alt />
                                                        )}
                                                    </a>
                                                    <div className="time">3:50</div>
                                                </div>
                                                <div className="video-card-body">
                                                    <div className="video-title">
                                                        <a href="#">{data?.description}</a>
                                                    </div>
                                                    <div className="video-page text-success">
                                                        {data?.channel_name}  <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                                                    </div>
                                                    <div className="video-view">
                                                        {data?.video_views} Views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    })}
                                  
                                    {/* <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="video-card">
                                            <div className="video-card-image">
                                                <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                                                <a href="#"><img className="img-fluid" src="img/v2.png" alt /></a>
                                                <div className="time">3:50</div>
                                            </div>
                                            <div className="video-card-body">
                                                <div className="video-title">
                                                    <a href="#">There are many variations of passages of Lorem</a>
                                                </div>
                                                <div className="video-page text-success">
                                                    Education  <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                                                </div>
                                                <div className="video-view">
                                                    1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="video-card">
                                            <div className="video-card-image">
                                                <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                                                <a href="#"><img className="img-fluid" src="img/v3.png" alt /></a>
                                                <div className="time">3:50</div>
                                            </div>
                                            <div className="video-card-body">
                                                <div className="video-title">
                                                    <a href="#">There are many variations of passages of Lorem</a>
                                                </div>
                                                <div className="video-page text-danger">
                                                    Education  <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></a>
                                                </div>
                                                <div className="video-view">
                                                    1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="video-card">
                                            <div className="video-card-image">
                                                <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                                                <a href="#"><img className="img-fluid" src="img/v4.png" alt /></a>
                                                <div className="time">3:50</div>
                                            </div>
                                            <div className="video-card-body">
                                                <div className="video-title">
                                                    <a href="#">There are many variations of passages of Lorem</a>
                                                </div>
                                                <div className="video-page text-success">
                                                    Education  <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                                                </div>
                                                <div className="video-view">
                                                    1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="video-card">
                                            <div className="video-card-image">
                                                <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
                                                <a href="#"><img className="img-fluid" src="img/v5.png" alt /></a>
                                                <div className="time">3:50</div>
                                            </div>
                                            <div className="video-card-body">
                                                <div className="video-title">
                                                    <a href="#">There are many variations of passages of Lorem</a>
                                                </div>
                                                <div className="video-page text-success">
                                                    Education  <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
                                                </div>
                                                <div className="video-view">
                                                    1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                   
                                   
                                   
                                </div>
                            </div>
                            <hr className="mt-0" />
                            <div className="video-block section-padding">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title">
                                            <div className="btn-group float-right right-action">
                                                <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top Rated</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp; Viewed</a>
                                                    <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" /> &nbsp; Close</a>
                                                </div>
                                            </div>
                                            <h6>Popular Channels</h6>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="channels-card">
                                            <div className="channels-card-image">
                                                <a href="#"><img className="img-fluid" src="img/s1.png" alt /></a>
                                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                                            </div>
                                            <div className="channels-card-body">
                                                <div className="channels-title">
                                                    <a href="#">Channels Name</a>
                                                </div>
                                                <div className="channels-view">
                                                    382,323 subscribers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="channels-card">
                                            <div className="channels-card-image">
                                                <a href="#"><img className="img-fluid" src="img/s2.png" alt /></a>
                                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                                            </div>
                                            <div className="channels-card-body">
                                                <div className="channels-title">
                                                    <a href="#">Channels Name</a>
                                                </div>
                                                <div className="channels-view">
                                                    382,323 subscribers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="channels-card">
                                            <div className="channels-card-image">
                                                <a href="#"><img className="img-fluid" src="img/s3.png" alt /></a>
                                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button></div>
                                            </div>
                                            <div className="channels-card-body">
                                                <div className="channels-title">
                                                    <a href="#">Channels Name <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle" /></span></a>
                                                </div>
                                                <div className="channels-view">
                                                    382,323 subscribers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6 mb-3">
                                        <div className="channels-card">
                                            <div className="channels-card-image">
                                                <a href="#"><img className="img-fluid" src="img/s4.png" alt /></a>
                                                <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                                            </div>
                                            <div className="channels-card-body">
                                                <div className="channels-title">
                                                    <a href="#">Channels Name</a>
                                                </div>
                                                <div className="channels-view">
                                                    382,323 subscribers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                        {/* Sticky Footer */}

                    </div>
                   
                </div>
               
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
               
                <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
          </>  
       
    )
}

export default Home
