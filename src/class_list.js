import React from 'react'
import { Link } from 'react-router-dom'

function class_list() {
    return (
        <div>
        
        <main>
         
          {/* Job List Area Start */}
          <div className="job-listing-area pt-120 pb-120">
            <div className="container">
              <div className="row">
                {/* Left content */}
                <div className="col-xl-3 col-lg-3 col-md-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="small-section-tittle2 mb-45">
                        <div className="ion"> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="12px">
                            <path fillRule="evenodd" fill="rgb(27, 207, 107)" d="M7.778,12.000 L12.222,12.000 L12.222,10.000 L7.778,10.000 L7.778,12.000 ZM-0.000,-0.000 L-0.000,2.000 L20.000,2.000 L20.000,-0.000 L-0.000,-0.000 ZM3.333,7.000 L16.667,7.000 L16.667,5.000 L3.333,5.000 L3.333,7.000 Z" />
                          </svg>
                        </div>
                        <h4>Filter Class</h4>
                      </div>
                    </div>
                  </div>
                  {/* Job Category Listing start */}
                  <div className="job-category-listing mb-50">
                    {/* single one */}
                    <div className="single-listing">
                      <div className="small-section-tittle2">
                        <h4>Class Category</h4>
                      </div>
                      {/* Select job items start */}
                      <div className="select-job-items2">
                      <select name="cars" class="custom-select mb-3">
                      <option selected>Custom Select Menu</option>
                      <option value="volvo">1</option>
                      <option value="fiat">2</option>
                      <option value="audi">3</option>
                    </select>
                      </div>
                      {/*  Select job items End*/}
                      {/* select-Categories start */}
                      <div className="select-Categories pt-80 pb-50">
                        <div className="small-section-tittle2">
                          <h4>Class Type</h4>
                        </div>
                        <label className="container">Full Time
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Part Time
                          <input type="checkbox" defaultChecked="checked active" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Remote
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Freelance
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      {/* select-Categories End */}
                    </div>
                    {/* single two */}
                    <div className="single-listing">
                      <div className="small-section-tittle2">
                        <h4>Class Location</h4>
                      </div>
                      {/* Select job items start */}
                      <div className="select-job-items2">
                      <select name="cars" class="custom-select mb-3">
                      <option selected> Select </option>
                      <option value="volvo">1</option>
                      <option value="fiat">2</option>
                      <option value="audi">3</option>
                    </select>
                      </div>
                      {/*  Select job items End*/}
                      {/* select-Categories start */}
                      <div className="select-Categories pt-80 pb-50">
                        <div className="small-section-tittle2">
                          <h4>Experience</h4>
                        </div>
                        <label className="container">1-2 Years
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">2-3 Years
                          <input type="checkbox" defaultChecked="checked active" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">3-6 Years
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">6-more..
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      {/* select-Categories End */}
                    </div>
                    {/* single three */}
                    <div className="single-listing">
                      {/* select-Categories start */}
                      <div className="select-Categories pb-50">
                        <div className="small-section-tittle2">
                          <h4>Posted Within</h4>
                        </div>
                        <label className="container">Any
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Today
                          <input type="checkbox" defaultChecked="checked active" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Last 2 days
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Last 3 days
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Last 5 days
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                        <label className="container">Last 10 days
                          <input type="checkbox" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      {/* select-Categories End */}
                    </div>
                    <div className="single-listing">
                      {/* Range Slider Start */}
                      <aside className="left_widgets p_filter_widgets price_rangs_aside sidebar_box_shadow">
                        <div className="small-section-tittle2">
                          <h4>Filter Class</h4>
                        </div>
                        <div className="widgets_inner">
                          <div className="range_item">
                            {/* <div id="slider-range"></div> */}
                            <input type="text" className="js-range-slider" defaultValue />
                            <div className="d-flex align-items-center">
                              <div className="price_text">
                                <p>Price :</p>
                              </div>
                              <div className="price_value d-flex justify-content-center">
                                <input type="text" className="js-input-from" id="amount" readOnly />
                                <span>to</span>
                                <input type="text" className="js-input-to" id="amount" readOnly />
                              </div>
                            </div>
                          </div>
                        </div>
                      </aside>
                      {/* Range Slider End */}
                    </div>
                  </div>
                  {/* Job Category Listing End */}
                </div>
                {/* Right content */}
                <div className="col-xl-9 col-lg-9 col-md-8">
                  {/* Featured_job_start */}
                  <section className="featured-job-area">
                    <div className="container">
                      {/* Count of Job list Start */}
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="count-job mb-35">
                            <span>39, 782 Class found</span>
                            {/* Select job items start */}
                            <div className="select-job-items">
                              <span>Sort by</span>
                              <select name="select">
                                <option value>None</option>
                                <option value>job list</option>
                                <option value>job list</option>
                                <option value>job list</option>
                              </select>
                            </div>
                            {/*  Select job items End*/}
                          </div>
                        </div>
                      </div>
                      {/* Count of Job list End */}
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                          </div>
                         <Link to ="/Class_profile">
                         <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                          </Link>
                        </div>
                       
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list2.png" alt="" /></a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list1.png" alt="" /></a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list3.png" alt="" /></a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                      {/* single-job-content */}
                      <div className="single-job-items mb-30">
                        <div className="job-items">
                          <div className="company-img">
                            <a href="#"><img src="assets/img/icon/job-list4.png" alt="" /></a>
                          </div>
                          <div className="job-tittle job-tittle2">
                            <a href="#">
                              <h4>Digital Marketer</h4>
                            </a>
                            <ul>
                              <li>Creative Agency</li>
                              <li><i className="fas fa-map-marker-alt" />Athens, Greece</li>
                              <li>$3500 - $4000</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <a href="job_details.html">Full Time</a>
                          <span>7 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Featured_job_end */}
                </div>
              </div>
            </div>
          </div>
          {/* Job List Area End */}
          {/*Pagination Start  */}
          <div className="pagination-area pb-115 text-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="single-wrap d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item active"><a className="page-link" href="#">01</a></li>
                        <li className="page-item"><a className="page-link" href="#">02</a></li>
                        <li className="page-item"><a className="page-link" href="#">03</a></li>
                        <li className="page-item"><a className="page-link" href="#"><span className="ti-angle-right" /></a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Pagination End  */}
        </main>
      </div>
    )
}

export default class_list
