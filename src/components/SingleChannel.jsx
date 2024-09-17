import React from 'react'

const SingleChannel = () => {
  return (
   <>
   <body id="page-top">
     
      <div id="wrapper">
        
         <div class="single-channel-page" id="content-wrapper">
            <div className="single-channel-image">
               <img class="img-fluid" alt="" src="img/channel-banner.png"/>
               <div className="channel-profile">
                  <img class="channel-profile-img" alt="" src="img/s2.png"/>
                  <div className="social hidden-xs">
                     Social &nbsp;
                     <a class="fb" href="#">Facebook</a>
                     <a class="tw" href="#">Twitter</a>
                     <a class="gp" href="#">Google</a>
                  </div>
               </div>
            </div>
            <div className="single-channel-nav">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="channel-brand" href="#">Osahan Channel <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fas fa-check-circle text-success"></i></span></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <a className="nav-link" href="#">Videos <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                           <a class="nav-link" href="#">Playlist</a>
                        </li>
                        <li className="nav-item">
                           <a class="nav-link" href="#">Channels</a>
                        </li>
                        <li className="nav-item">
                           <a class="nav-link" href="#">Discussion</a>
                        </li>
                        <li className="nav-item">
                           <a class="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Donate
                           </a>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Something else here</a>
                           </div>
                        </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                        <input class="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search"/><button class="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button> &nbsp;&nbsp;&nbsp; <button class="btn btn-outline-danger btn-sm" type="button">Subscribe <strong>1.4M</strong></button>
                     </form>
                  </div>
               </nav>
            </div>
            <div className="container-fluid">
               <div className="video-block section-padding">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="main-title">
                           <div className="btn-group float-right right-action">
                              <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#"><i class="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                 <a className="dropdown-item" href="#"><i class="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                 <a className="dropdown-item" href="#"><i class="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                              </div>
                           </div>
                           <h6>Videos</h6>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v1.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v2.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v3.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v4.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v5.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v6.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v7.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v8.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v1.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v2.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v3.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i class="fas fa-play-circle"></i></a>
                              <a href="#"><img class="img-fluid" src="img/v4.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <nav aria-label="Page navigation example">
                     <ul className="pagination justify-content-center pagination-sm mb-0">
                        <li className="page-item disabled">
                           <a tabindex="-1" href="#" className="page-link">Previous</a>
                        </li>
                        <li className="page-item active"><a href="#" class="page-link">1</a></li>
                        <li className="page-item"><a href="#" class="page-link">2</a></li>
                        <li className="page-item"><a href="#" class="page-link">3</a></li>
                        <li className="page-item">
                           <a href="#" className="page-link">Next</a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
          
           
         </div>
        
      </div>
      <a class="scroll-to-top rounded" href="#page-top">
      <i className="fas fa-angle-up"></i>
      </a>
      <div class="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
               </div>
               <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
               <div className="modal-footer">
                  <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <a class="btn btn-primary" href="login.html">Logout</a>
               </div>
            </div>
         </div>
      </div>
      
      
   </body>

   </>
  )
}

export default SingleChannel
