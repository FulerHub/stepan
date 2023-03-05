import React, {FC, useEffect, useRef} from 'react';
import Century from "../icons/Century";
import bandera from "../../assets/bandera.png"
import banderaMob from "../../assets/bandera-mob.png"
import CircleButton from '../UI/CircleButton';

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

const MainSection:FC = () => {
    gsap.registerPlugin(ScrollTrigger);
    const targetSection = useRef(null);
    useEffect(()=>{
        const UpStart = {x:150,y:100,opacity:0,duration: 1.5, stagger: 0.5};
        const InFinish = {x:0,y:0,opacity:1,duration: 1.5, stagger: 0.3};
        const UpStartDownUp = {y:100,opacity:0,duration: 1.5, stagger: 0.5};
        const InFinishDownUp = {y:0,opacity:1,duration: 1.5, stagger: 0.3};
        const UpStartLeftToRight = {x:-100,opacity:0,duration: 1.5, stagger: 0.5};
        const InFinishLeftToRight = {x:0,opacity:1,duration: 1.5, stagger: 0.5};

        const UpStartFadeIn = {opacity:0,duration: 1.5, stagger: 0.5};
        const InFinishFadeIn = {opacity:1,duration: 1.5, stagger: 0.5};
        const UpStartFadeInEx = {opacity:0,duration: 1.5, stagger: 0.5};
        const InFinishFadeInEx = {opacity:0.6,duration: 1.5, stagger: 0.5};
        let timeline = gsap.timeline({
            scrollTrigger: {
                trigger: targetSection.current
            }});
        timeline
            .fromTo(".main__img", UpStart, InFinish, 0.2)
            .fromTo(".h1 span", UpStartDownUp, InFinishDownUp, 0.8)
            .fromTo(".main__subtitle", UpStartDownUp, InFinishDownUp, 1.4)
            .fromTo(".main__btn", UpStartLeftToRight, InFinishLeftToRight, 1.8)
            .fromTo(".main__number", UpStartFadeIn, InFinishFadeIn, 2.2)
            .fromTo(".main__description", UpStartFadeInEx, InFinishFadeInEx, 2.2)
        ;
    },[targetSection]);
    return (
        <section className={'main'} ref={targetSection}>
            <div className="container">
                <div className="main__wrap">
                    <div className="main__number">
                        <Century/>
                    </div>
                    <div className="main__description">
                        He led the Organization of Ukrainian Nationalists and Ukrainian Insurgent Army in their struggle against Soviet and German occupiers.
                    </div>
                    <div className="main__header">
                        <h1 className={'h1'}>
                            <span>Stepan</span>
                            <picture>
                                <source className="main__img" media={"(max-width:550px)"} srcSet={banderaMob}/>
                                <img className="main__img" src={bandera} alt=""/>
                            </picture>
                            <span>Bandera</span>
                        </h1>
                        <div className="main__subtitle">Champion of Ukrainian Independence</div>
                    </div>
                    <div className="main__button">
                        <CircleButton className={'main__btn'} name={'Explore Bandera\'s Legacy'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;