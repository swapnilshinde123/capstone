import React, { useState } from 'react'
import "./Job_Profile_create.css";
import $ from 'jquery';
import axios from "../axios";
function Job_Profile_create() {



  $(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          next_fs.css({ 'opacity': opacity });
        },
        duration: 500
      });
      setProgressBar(++current);
    });

    $(".previous").click(function () {

      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();

      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate({ opacity: 0 }, {
        step: function (now) {
          // for making fielset appear animation
          opacity = 1 - now;

          current_fs.css({
            'display': 'none',
            'position': 'relative'
          });
          previous_fs.css({ 'opacity': opacity });
        },
        duration: 500
      });
      setProgressBar(--current);
    });

    function setProgressBar(curStep) {
      var percent = parseFloat(100 / steps) * curStep;
      percent = percent.toFixed();
      $(".progress-bar")
        .css("width", percent + "%")
    }

    $(".submit").click(function () {
      return false;
    })

  });
  // const [data, setData] = useState();

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // var [file, setFile] = useState(null);

  // async function onImageChange(event) {
  //   try {
  //     console.log(event.target.files[0]);
  //     setFile(event.target.files[0]);
  //   } catch (error) {
  //     return null;
  //   }
  // }

  // console.log(file);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data1 = file;
  //   console.log(data1);
  //   const data4 = new FormData();
  //   data4.append("image", file);
  //   // data1.append("file", file);
  //   let token = localStorage.getItem("token");
  //   if (!token) alert("You are not authorized");
  //   setData((prevState) => ({
  //     ...prevState,
  //     image: data4,
  //   }));
  //   axios
  //     .post("/class/prat/uppload", data4, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // };
  // console.log(data);
  return (
    <div>

      <div className="container-fluid mt-100">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-12 col-md-12 col-lg-12 col-xl-9 text-center p-0 mt-3 mb-2">
            <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
              <h2 id="heading"> Job_Profile_create </h2>
              <p>Fill all form field to go to next step</p>
              <form id="msform">
                {/* progressbar */}
                <ul id="progressbar">
                  <li className="active" id="personal"><strong>Personal</strong></li>
                  <li id="personal"><strong>Job Information</strong></li>
                  <li id="payment"><strong>Image</strong></li>
                  <li id="confirm"><strong>Finish</strong></li>
                </ul>
                {/* <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin={0} aria-valuemax={100} />
                </div> */}
                <br /> {/* fieldsets */}
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title"> Personal Information:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 1 - 4</h2>
                      </div>
                    </div>{" "}
                    <label className="fieldlabels">First Name: *</label>{" "}
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    // onChange={handleChange}
                    />{" "}
                    <label className="fieldlabels">Last Name: *</label>{" "}
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    // onChange={handleChange}
                    />
                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Next"
                  />
                </fieldset>
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Job Information:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 2 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">Job Category: *</label>
                    <select class="custom-select select mb-3"
                      name="Job Category"
                    // onChange={handleChange} 
                    >
                      <option selected> Select Category </option>
                      <option value="Sport">Sport</option>
                      <option value="Programing">Programing</option>
                      <option value="Technical">Technical</option>
                      <option value="Cenimatics">Cenimatics</option>
                      <option value="Hospital">Hospital</option>
                      <option value="Cooking">Cooking</option>
                      <option value="Performance">Performance</option>
                    </select  >

                    <label className="fieldlabels"> Vacancy: *</label>
                    <select class="custom-select select mb-3"
                      name="vacancy"
                    // onChange={handleChange}
                    >
                      <option selected> Select</option>
                      <option value="1">1 </option>
                      <option value="2">2 </option>
                      <option value="3">3 </option>
                      <option value="4">4 </option>
                      <option value="5">5 </option>
                      <option value="6">6 </option>
                      <option value="7">7 </option>
                      <option value="8">8 </option>
                      <option value="9">9 </option>
                      <option value="10">10 </option>

                    </select  >
                    <label className="fieldlabels">Company Name: *</label>
                    <input
                      type="text"
                      name="companyname"
                      placeholder="Class Name"
                    // onChange={handleChange} 
                    />
                    <label className="fieldlabels">Address: *</label>
                    <input
                      type="text"
                      name="Address"
                      placeholder="Address"
                    // onChange={handleChange}
                    />
                    <label className="fieldlabels">Cities: *</label>
                    <select class="custom-select select mb-3"
                      name="city"
                    // onChange={handleChange}
                    >
                      <option selected> Select Cities</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Hyberabad">Hyberabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Delhi">Delhi</option>
                      <option value="kolkata">kolkata</option>
                      <option value="Ahmednagar">Ahmednagar</option>
                    </select  >
                    <label className="fieldlabels">Job Type: *</label>
                    <select class="custom-select select mb-3"
                      name="jobtype"
                    // onChange={handleChange}
                    >
                      <option selected> Select Type</option>
                      <option value="Fulltime">Full Time</option>
                      <option value="Parttime">Part Time</option>
                      <option value="Remote">Remote</option>

                    </select  >
                    <label className="fieldlabels"
                    // onChange={handleChange}
                    >Salary: *</label>

                    <input
                      type="number"
                      name="salary"
                      placeholder="Salary"
                      // onChange={handleChange}
                      id="msg"

                    />

                    <div class="row">
                      <div class="col-sm-12 form-group">


                        <label className="fieldlabels" > Job Description:*</label>
                        <textarea class="form-control" type="textarea" name="skills"
                          // onChange={handleChange} 
                          id="message" maxlength="6000" rows="2"></textarea>
                      </div>
                    </div> <div class="row">
                      <div class="col-sm-12 form-group">

                        <label className="fieldlabels"
                        //  onChange={handleChange}
                        > Required Knowledge, Skills, and Abilities: *</label>
                        <textarea class="form-control" type="textarea" name="skills"
                          //  onChange={handleChange} 
                          id="message" maxlength="6000" rows="5"></textarea>
                      </div>
                    </div>


                  </div> <input type="button" name="next" className="next action-button" defaultValue="Next" /> <input type="button" name="previous" className="previous action-button-previous" defaultValue="Previous" />
                </fieldset>
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Image Upload:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 3 - 4</h2>
                      </div>
                    </div>
                    <label className="fieldlabels">Upload Your Photo:</label>
                    <input type="file" name="image"
                    //  onChange={onImageChange} 
                    />

                  </div>{" "}
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    defaultValue="Submit"
                  // onClick={handleSubmit}
                  />{" "}
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    defaultValue="Previous"
                  />
                </fieldset>
                <fieldset>
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="fs-title">Finish:</h2>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Step 4 - 4</h2>
                      </div>
                    </div> <br /><br />
                    <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                    <div className="row justify-content-center">
                      <div className="col-3"> <img src="https://i.imgur.com/GwStPmg.png" className="fit-image" /> </div>
                    </div> <br /><br />
                    <div className="row justify-content-center">
                      <div className="col-7 text-center">
                        <h5 className="purple-text text-center">You Have Successfully Profile</h5>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Job_Profile_create
