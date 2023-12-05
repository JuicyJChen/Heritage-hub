import React from "react";
import style from "./partone.module.css";
import { Link } from "react-router-dom";
import friends from "./friendspic.jpg";
import culture from "./culturalpic.jpg";
import zoompic from "./zoomlady.jpg";


const Partone = () => {
  return (
    <div>
      <div className={style.main1}>
        <div className={style.main1_1}>
          <div className={style.main1_2}>
            <div className={style.main1_3}>
              <h1 className={style.main1_3_h}>
                Find Your Heritage, Discover Your Commmunity
              </h1>
              <p style={{ marginTop: "32px" }}>
              Connect with a community of people who share similar heritages.
              By joining a group, you can forge new friendships, access support networks, foster business growth, and delve into your passions. 
              With thousands of events taking place daily, both in-person and online, there are countless opportunities for engagement.
              </p>
            </div>
            <div className={style.main1_4}>
              <div className={style.main1_5}>
             
              </div>
            </div>
          </div>
        </div>
        <div className={style.main2}>
          <div className={style.main2_1}>
            <div className={style.main2_2}>
              <div className={style.main2_3}>
                <Link to="/groupAndEvnet" style={{ textDecoration: "none" }}>
                  <div className={style.main2_4}>
                    <div className={style.main2_5}>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "10rem",
                          width: "auto",
                        }}
                        src="https://media.wnyc.org/i/800/0/c/85/1/shutterstock_172218053.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style.main2_6}>
                    Discover new friends
                    <div className={style.main2_7}>
                      <div className={style.main2_8}>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.main2_2}>
              <div className={style.main2_3}>
                <Link to="/groupAndEvnet" style={{ textDecoration: "none" }}>
                  <div className={style.main2_4}>
                    <div className={style.main2_5}>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "10rem",
                          width: "auto",
                        }}
                        src="https://www.peoplenewspapers.com/wp-content/uploads/2019/03/Festival-of-Joy.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style.main2_6}>
                    Immerse in your culture
                    <div className={style.main2_7}>
                      <div className={style.main2_8}>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.main2_2}>
              <div className={style.main2_3}>
                <Link to="/groupAndEvnet" style={{ textDecoration: "none" }}>
                  <div className={style.main2_4}>
                    <div className={style.main2_5}>
                      <img
                        style={{
                          objectFit: "cover",
                          height: "10rem",
                          width: "auto",
                        }}
                        src="https://www.highspeedinternet.com/app/uploads/2021/02/lady-talking-on-zoom-1.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className={style.main2_6}>
                    Meet in person or online
                    <div className={style.main2_7}>
                      <div className={style.main2_8}>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partone;
