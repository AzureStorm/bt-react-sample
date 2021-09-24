import React from "react";

const Profile = () => {
  const progress = [
    { quarter: "1st" },
    { quarter: "2nd" },
    { quarter: "3rd" },
    { quarter: "4th" },
  ];

  const renderedCards = progress.map((item, index) => {
    return (
      <div class="col-6 mt-4">
        <div class="card mb-4 p-3">
          <div
            class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
            style={{ backgroundImage: `url('/img/${index + 1}qbg.png')` }}
          >
            <div class="card-body p-3 text-white">
              <div class="row">
                <h5 class="mb-1 text-white">{`Progress Report for ${item.quarter} Quarter`}</h5>
                <div class="col-xl-6 col-md-6 mb-xl-0 mb-4">
                  <div>
                    <div class="card-body px-1 pb-0">
                      <p class="mb-4 text-sm">Total number of attempts:</p>
                      <p class="mb-4 text-sm">Highest score (Easy):</p>
                      <p class="mb-4 text-sm">Highest score (Medium):</p>
                      <p class="mb-4 text-sm">Highest score (Hard):</p>
                      <p class="mb-4 text-sm">Remarks:</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-md-6 mb-xl-0 mb-4">
                  <div>
                    <div class="card-body px-1 pb-0">
                      percentage here (sum of all scores from each attempt
                      (easy, medium & hard) divided by no. of items of each
                      attempt) x 100
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div class="container-fluid">
        <div
          class="page-header min-height-300 border-radius-xl mt-4"
          style={{
            backgroundImage: "url('/img/curved-images/curved0.jpg')",
            backgroundPositionY: "50%",
          }}
        >
          <span class="mask bg-gradient-primary opacity-6"></span>
        </div>
        <div class="card card-body blur shadow-blur mx-4 mt-n6 overflow-hidden">
          <div class="row gx-4">
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1">account name here</h5>
                <p class="mb-0 font-weight-bold text-sm">email address here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid py-4">
        <div class="row">
          {renderedCards}
          <div class="col-12 mt-4">
            <div class="card mb-4 p-3">
              <div
                class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
                style={{
                  backgroundImage:
                    "url('/img/curved-images/white-curved.jpeg')",
                }}
              >
                <div class="card-body p-3 text-white">
                  <div class="row">
                    <h6 class="mb-1 text-white">Achievements</h6>
                    <p class="text-sm">
                      Medals acquired from practice assessments will be shown
                      here.
                    </p>
                    <ul class="list-inline-group">
                      <li class="list-inline-item">getAllMedals()</li>
                      <li class="list-inline-item">getAllMedals()</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;