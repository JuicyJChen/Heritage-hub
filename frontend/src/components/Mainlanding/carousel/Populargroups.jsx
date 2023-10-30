import React from "react";

import style from "./populargroups.module.css"
import SliderWrapper from "../../SliderWrapper/SliderWrapper";
import Category from "../../category/Category";


const PopularCard =({img,head1,sub1,sub2})=>(
    <div className={style.card1}>
    <div  className={style.card1_1} >
        <a href="/" className={style.card1_2}>
            <div className={style.card1_3}>
                <img className={style.card1_img} src={img} alt="alt" />
            </div>
            <h3 className={style.card1_h}>{head1}</h3>
        </a>
        <a href="/" className={style.card1_4}>
            <div className={style.card1_5}>{sub1}</div>
            <p className={style.card1_6}>{sub2}</p>
        </a>
    </div>
    </div>

);


const Populargroup=()=>{
    
    const populargroups=[
        {
            img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2019_18/1432153/cinco-de-mayo-celebrations-today-main-190501.jpg',
            sub1:'Cinco De Mayo Celebration',
            sub2:'Join the vibrant Fiesta celebrations!'
        },
        {
            img:'https://www.hindustantimes.com/ht-img/img/2023/03/07/1600x900/We-put-together-cool-and-colourful-parties-taking-_1678190696194.jpg',
            sub1:'Holi',
            sub2:'Experience the Festival of Colors!'
        },
        {
            img:'https://www.learnreligions.com/thmb/-EaRELG0wB_MIUeLY_tou5p4NxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1127577455-af4de78e939a40d9b37032ef9e24fd8a.jpg',
            sub1:'Hanukkah',
            sub2:'Celebrate Hanukkah! '
        },
        {
            img:'https://people.com/thmb/Qlca-bX1rj2syV9lG-CZkEsvOh8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/lunar-new-year-8-79db07041a3547ed8f3ba616a48e28c6.jpg',
            sub1:'Chinese New Year',
            sub2:'Celebrate the Year of the Snake!'
        
    },
    

    ]

    const arr=populargroups.map((el)=><PopularCard {...el}/>)
       
   return(
   <div style={{maxWidth:"1120px",margin:"auto"}}>
       <div className={style.head1}>
           <h2 className={style.head2}>Popular Events</h2>
           <div className={style.head3}><span className={style.head4}>Explore more groups</span>
           Explore more groups</div>
       </div>
			<SliderWrapper arr={arr} limit={3}  />
	</div>
   
   )
}

export default Populargroup
