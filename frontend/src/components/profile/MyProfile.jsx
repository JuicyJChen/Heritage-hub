import React, { useContext, useEffect } from "react";
import styles from "./MyProfile.module.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router";
import Populargroup from "../Mainlanding/carousel/Populargroups";
import Upcomingevents from "../Mainlanding/carousel/Upcomingevents";
import style from "./populargroups.module.css"
import SliderWrapper from "../SliderWrapper/SliderWrapper";
//import EventList from '../Event';
export default function MyProfile() {
  const { user, token , createEventData} = useContext(AuthContext);


  useEffect(() => {
    console.log(user.profile_pic);
  }, []);

  return token === "" ? (
    <Redirect to="/" />
  ) : (
    <div className={styles.profile_root}>
      <div className={styles.mydetails_container}>
        <div className={styles.image_container}>
          <img
            src="https://tauepsilonkappa.com/images/people/NoahIvers.jpeg"
            alt="profileImage"
          ></img>
        </div>
        <div className={styles.my_details}>
          <h1>{user.username}</h1>
          <span>Member since October 2023</span>
          <div className={styles.loc_even}>
            <div>
              <svg
                data-swarm-icon="true"
                height="18"
                width="18"
                viewBox="0 0 18 18"
              >
                <path d="M9 17.5C5 13.5 3 10 3 7a6 6 0 1112 0c0 3-2 6.5-6 10.5zm0-8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
              </svg>{" "}
              <span>{user.location}</span>
            </div>
            <div>
              <svg
                version="1.0"
                width="18px"
                height="18px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="none"
                fill-rule="evenodd"
              >
                <g>
                  <g id="profiles-filled" fill="#000000">
                    <path
                      d="M11.9959 12.5C13.958 12.5 15.7088 13.4923 16.8541 15.0444L17 15.25V15.9286C17 16.174 16.8231 16.3782 16.5899 16.4205L16.5 16.4286H7.5C7.25454 16.4286 7.05039 16.2517 7.00806 16.0184L7 15.9286V15.2381C8.13981 13.5753 9.95339 12.5 11.9959 12.5ZM5.99593 9.5C6.80293 9.5 7.5742 9.66786 8.28228 9.9735C8.59021 10.7549 9.13821 11.4146 9.8347 11.8638C8.8845 12.1899 8.01411 12.7274 7.26414 13.428L1.5 13.4286C1.25454 13.4286 1.05039 13.2517 1.00806 13.0184L1 12.9286V12.2381C2.13981 10.5753 3.95339 9.5 5.99593 9.5ZM12 5.5C13.6569 5.5 15 6.84315 15 8.5C15 10.1569 13.6569 11.5 12 11.5C10.3431 11.5 9 10.1569 9 8.5C9 6.84315 10.3431 5.5 12 5.5ZM6 2.5C7.65685 2.5 9 3.84315 9 5.5C9 5.63011 8.99172 5.75829 8.97565 5.88403C8.54446 6.3802 8.23481 6.98383 8.09069 7.64913C7.55162 8.1761 6.81363 8.5 6 8.5C4.34315 8.5 3 7.15685 3 5.5C3 3.84315 4.34315 2.5 6 2.5Z"
                      fill="#757575"
                    ></path>
                  </g>
                </g>
              </svg>{" "}
              <span>Attended {"0"} events</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bar_container}>
        <div>
          <div>
            <div>
              <div>1</div>
              <span>Groups</span>
            </div>
            <div>
              <div>0</div>
              <span>Interests</span>
            </div>
          </div>
          <div class={styles.button_tag}>
            <button>Edit Profile</button>
          </div>
        </div>
      </div>
      <div className={styles.my_ge_container}>
        <div className={styles.my_groups}>
          <h1>Groups</h1>
          <div>
          <img src = {createEventData.eventImage} width = "100 px" />

            
            <div style={{maxWidth:"1120px",margin:"auto"}}>
            <p className={styles.bold_text}>{createEventData.groupDetail.groupName}</p>
            <p>{createEventData.groupDetail.groupPrivate}</p>
            <p>{createEventData.eventLocationType}</p>
            
            <a className={styles.button_f}>Find Groups</a>
	  </div>
   
            

          </div>
        </div>
        <div className={styles.my_events}>
          <h1>Events</h1>
          <div>
            <svg
              className={styles.svg_container}
              width="144"
              height="112"
              viewBox="0 0 144 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70.488 99.7951C68.3839 101.603 65.9135 102.845 63.3097 103.869C59.5823 105.336 55.8585 106.811 52.0838 108.183C49.6723 109.06 47.2407 109.941 44.6959 110.491C41.2342 111.238 37.6128 111.398 33.8394 110.861C30.3651 110.367 26.967 109.361 23.6319 107.786C20.6501 106.377 17.8782 104.538 15.2486 102.33C12.1704 99.7443 9.53733 96.7736 7.30204 93.4706C5.46576 90.7576 4.02652 87.8335 2.9636 84.804C1.04205 79.3265 0.405936 73.9141 1.15857 68.6635C1.64108 65.3019 2.65001 62.1766 4.25322 59.345C5.64796 56.8819 7.40128 54.7617 9.40891 52.9003C11.0064 51.4187 12.9207 50.3159 14.9147 49.3397C17.2946 48.175 19.8602 47.4511 22.563 47.0922C26.7939 46.5308 31.1395 46.9681 35.5769 48.3462C39.1368 49.4514 42.5265 51.1506 45.8357 53.1021C47.3442 53.9921 48.7381 55.1578 50.183 56.2C52.1974 57.652 54.2211 59.0896 56.2222 60.5644C58.087 61.9382 59.9448 63.3266 61.7749 64.7556C64.0941 66.5673 66.4093 68.3823 68.5005 70.5177C70.4758 72.5351 72.1903 74.7356 73.5441 77.1725C74.9268 79.661 75.7794 82.2726 76.1235 84.9587C76.6634 89.1678 75.8478 92.8358 73.8674 96.0413C72.9611 97.5083 71.782 98.7094 70.488 99.7951Z"
                fill="#7A1D47"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46.6362 21.2465C44.7277 24.9573 43.3482 28.8402 42.4699 32.8738C41.5712 37.0055 41.1281 41.224 41.064 45.4681C40.9709 51.6315 41.458 57.7378 42.5658 63.8079C43.7972 70.558 45.999 76.9529 49.5151 82.8336C50.8062 84.9928 52.22 87.134 54.1072 88.8897C55.5347 90.2176 56.7684 91.786 58.314 92.9471C60.5624 94.6368 62.9295 96.2138 65.3991 97.5585C70.3648 100.264 75.7624 101.443 81.4063 101.331C84.4942 101.27 87.6111 101.218 90.6548 100.76C93.8118 100.284 96.9041 99.3558 100.009 98.5615C102.638 97.8897 105.258 97.173 107.857 96.391C111.656 95.2476 115.523 94.2527 119.198 92.7867C123.879 90.9201 128.595 89.0121 132.593 85.8055C136.47 82.6975 139.626 78.9593 141.464 74.3277C143.072 70.2727 143.413 66.0168 142.751 61.6489C142.021 56.8234 139.862 52.6646 136.952 48.9168C134.826 46.1791 132.302 43.7515 129.583 41.5534C127.344 39.7419 125.058 37.9636 123.004 35.9562C120.841 33.8427 118.636 31.7373 116.918 29.2062C114.48 25.6165 112.053 22.018 109.555 18.4704C107.359 15.3543 104.761 12.5887 101.966 9.99228C99.6737 7.86202 97.1092 6.12877 94.3204 4.78187C89.0763 2.25034 83.6174 0.607108 77.664 0.988477C74.124 1.21461 70.6281 1.55156 67.2964 2.82319C65.6729 3.44234 64.0648 4.13769 62.5376 4.96096C60.678 5.96261 58.9116 7.13545 57.8774 7.76458C52.7124 11.8795 49.2427 16.1772 46.6362 21.2465Z"
                fill="#E6A386"
              ></path>
              <circle cx="35.5" cy="46.5001" r="10.5" fill="white"></circle>
              <circle cx="93.5" cy="46.5001" r="10.5" fill="white"></circle>
              <circle cx="64.5" cy="41.5001" r="12.5" fill="white"></circle>
              <path
                d="M35.5 59.0001C25.506 59.0001 17.1824 66.326 15.3674 76.0216C14.9609 78.193 16.7909 80.0001 19 80.0001H52C54.2091 80.0001 56.0391 78.193 55.6326 76.0215C53.8176 66.326 45.494 59.0001 35.5 59.0001Z"
                fill="white"
              ></path>
              <path
                d="M93.5 59.0001C83.506 59.0001 75.1824 66.326 73.3674 76.0216C72.9609 78.193 74.7909 80.0001 77 80.0001H110C112.209 80.0001 114.039 78.193 113.633 76.0215C111.818 66.326 103.494 59.0001 93.5 59.0001Z"
                fill="white"
              ></path>
              <path
                d="M64 56.0001C50.9453 56.0001 40.1377 65.9916 38.2816 79.0125C37.9698 81.1995 39.7909 83.0001 42 83.0001H86C88.2091 83.0001 90.0302 81.1995 89.7184 79.0125C87.8623 65.9916 77.0547 56.0001 64 56.0001Z"
                fill="white"
              ></path>
              <circle
                cx="37.5"
                cy="44.5001"
                r="10.5"
                stroke="#00455D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
              <circle
                cx="95.5"
                cy="44.5001"
                r="10.5"
                stroke="#00455D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
              <circle
                cx="66.5"
                cy="39.5001"
                r="12.5"
                stroke="#00455D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
              <path
                d="M37.5 56.0001C27.506 56.0001 19.1824 63.326 17.3674 73.0216C16.9609 75.193 18.7909 77.0001 21 77.0001H54C56.2091 77.0001 58.0391 75.193 57.6326 73.0215C55.8176 63.326 47.494 56.0001 37.5 56.0001Z"
                fill="white"
                stroke="#00455D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M95.5 56.0001C85.506 56.0001 77.1824 63.326 75.3674 73.0216C74.9609 75.193 76.7909 77.0001 79 77.0001H112C114.209 77.0001 116.039 75.193 115.633 73.0215C113.818 63.326 105.494 56.0001 95.5 56.0001Z"
                fill="white"
                stroke="#00455D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M66 53.0001C52.9453 53.0001 42.1377 62.9916 40.2816 76.0125C39.9698 78.1995 41.7909 80.0001 44 80.0001H88C90.2091 80.0001 92.0302 78.1995 91.7184 76.0125C89.8623 62.9916 79.0547 53.0001 66 53.0001Z"
                fill="white"
                stroke="#00455D"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p className={styles.bold_text}> No interests added</p>
            <p>Interests you add will be shown here.</p>
            <a className={styles.button_f}>Add Interests</a>
          </div>
        </div>
      </div>
    </div>
  );
}
