import React from "react";

// import DriverLogo from "../assets/images/olovola-logo.svg";
import DriverImg1 from "../assets/images/Frame 16134.jpg";
import DriverImg2 from "../assets/images/Rectangle 6349.jpg";
import IconContainer from "../assets/images/Icon Container.svg";
import IconContainer1 from "../assets/images/Icon Container1.svg";
import IconContainer2 from "../assets/images/Icon Container2.svg";
import IconContainer3 from "../assets/images/Icon Container3.svg";
import IconContainer4 from "../assets/images/Icon Container4.svg";
import IconContainer5 from "../assets/images/Icon Container5.svg";

function Driver() {
  return (
    <div>
      {/* Section 2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "71px",
        }}
        className="section2"
      >
        <img src={DriverImg1} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          margin: "auto",
          width: "1280px",
          justifyContent: "center",
          marginTop: "71px",
          height: "568px",
          backgroundImage: `url(${DriverImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="section3 px-10 py-5"
      >
        <div
          className="leftSection"
          style={{
            color: "white",
            fontSize: "38px",
            flex: "7",
            marginBottom: "20px",
          }}
        >
          Contact us today and we’ll bring your
          <br /> flexible working vision to life.
        </div>
        <div
          className="rightSection"
          style={{
            flex: "3",
            fontFamily: "Manrope",
            fontSize: "18px",
            padding: "10px",
            textAlign: "center ",
            border: "2px solid #FDD700",
            backgroundColor: "#080C09",
            color: "white",
            borderRadius: "24px",
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
          <h5 style={{ textAlign: "left", margin: "25px 5px -10px 20px" }}>
            Fill out the application and verif your phone number.
          </h5>
          <input
            type="text"
            placeholder="Name"
            style={{
              background: "transparent",
              border: "1px solid #FDD700",
              borderRadius: "5px",
              color: "white",
              marginBottom: "0px",
            }}
          />
          <input
            type="text"
            placeholder="Phone Number"
            style={{
              background: "transparent",
              border: "1px solid #FDD700",
              borderRadius: "5px",
              color: "white",
              marginBottom: "0px",
            }}
          />
          <input
            type="text"
            placeholder="Email"
            style={{
              background: "transparent",
              border: "1px solid #FDD700",
              borderRadius: "5px",
              color: "white",
              marginBottom: "0px",
            }}
          />
          <input
            type="text"
            placeholder="CNIC*"
            style={{
              background: "transparent",
              border: "1px solid #FDD700",
              borderRadius: "5px",
              color: "white",
              marginBottom: "0px",
            }}
          />
          <button
            style={{
              backgroundColor: "#FDD700",
              color: "#080C09",
              margin: "20px",
              borderRadius: "5px",
              padding: "10px 20px 10px 20px",
              marginBottom: "30px",
              fontSize: "12px",
              fontFamily: "Poppins",
            }}
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div
        style={{
          marginTop: "71px",
          marginBottom: "50px",
        }}
      >
        <div
          className="whyChooseUs"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1 style={{ fontFamily: "Manrope-semibold", fontSize: "38px" }}>
            Why Choose Us
          </h1>
          <p style={{ fontFamily: "Manrope", fontSize: "16px" }}>
            Join the Olovola team to take advantage of additional benefits
            including flexible earnings <br />
            and no surprise fees.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            backgroundColor: "#EFE5FF",
            width: "1280px",
            margin: "auto",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "15px",
            }}
          >
            <div className="additionalIncome">
              <div
                style={{
                  backgroundColor: "#EFE5FF",
                  padding: "40px 40px 40px 30px",
                  borderRadius: "16px",
                  marginTop: "15px",
                  width: "386px",
                  border: "4px solid white",
                }}
              >
                <img src={IconContainer} />
                <h5 className="mt-5 font-bold">Additional Income</h5>
                <p>
                  The more you drive, the more income you will earn - It's as
                  simple as that.
                </p>
              </div>
            </div>
            <div className="flexibleSchedule">
              <div
                style={{
                  backgroundColor: "#EFE5FF",
                  padding: "40px 40px 40px 30px",
                  borderRadius: "16px",
                  marginTop: "15px",
                  width: "386px",
                  border: "4px solid white",
                }}
              >
                <img src={IconContainer3} />
                <h5 className="mt-5 font-bold">Full Support</h5>
                <p>
                  You will receive support from the Olovola team, supporting you
                  with Trip issues etc.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "15px",
            }}
          >
            <div className="fullTransparency">
              <div
                style={{
                  backgroundColor: "#EFE5FF",
                  padding: "40px 40px 40px 30px",
                  borderRadius: "16px",
                  marginTop: "15px",
                  width: "386px",
                  border: "4px solid white",
                }}
              >
                <img src={IconContainer1} />
                <h5 className="mt-5 font-bold">Flexible Schedule</h5>
                <p>
                  Find a job where you have the flexibility to decide what
                  days/times you want to work.
                </p>
              </div>
            </div>
            <div className="fullSupport">
              <div
                style={{
                  backgroundColor: "#EFE5FF",
                  padding: "40px 40px 40px 30px",
                  borderRadius: "16px",
                  marginTop: "15px",
                  width: "386px",
                  border: "4px solid white",
                }}
              >
                <img src={IconContainer4} />
                <h5 className="mt-5 font-bold">Discounts for costs</h5>
                <p>
                  The more you drive, the more income you will earn - It's as
                  simple as that.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="discount">
              <div
                style={{
                  backgroundColor: "#EFE5FF",
                  padding: "40px 40px 40px 30px",
                  borderRadius: "16px",
                  marginTop: "15px",
                  width: "386px",
                  border: "4px solid white",
                }}
              >
                <img src={IconContainer2} />
                <h5 className="mt-5 font-bold">Full Transparency</h5>
                <p>
                  The more you drive, the more income you will earn - It's as
                  simple as that.
                </p>
              </div>
            </div>
            <div className="lessBureaucracy">
              <div
                style={{
                  backgroundColor: "#EFE5FF",
                  padding: "40px 40px 40px 30px",
                  borderRadius: "16px",
                  marginTop: "15px",
                  width: "386px",
                  border: "4px solid white",
                }}
              >
                <img src={IconContainer5} />
                <h5 className="mt-5 font-bold">Less Bureaucracy</h5>
                <p>
                  The more you drive, the more income you will earn - It's as
                  simple as that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Driver;
