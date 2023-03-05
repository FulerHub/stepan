import React, {FC, useEffect, useRef, useState} from 'react';
import Header from '../../components/Header';
import audio from '../../assets/song.mp3'
import CircleButton from "../../components/UI/CircleButton";

interface IDefaultLayout{
    children: React.ReactNode;
}

const DefaultLayout:FC<IDefaultLayout> = ({children}) => {
    const [play,setPlay] = useState(false);
    let audioRef = useRef<any>(null);
    const onPlay = ()=>{
        if(audioRef.current.paused){
            audioRef.current.play();
            setPlay(true)
        }
        else {
            audioRef.current.pause();
            setPlay(false)
        }
    }

    useEffect(()=>{
        audioRef.current.pause();
        setPlay(false)
    },[audioRef])

    return (
        <>
            <div className={'play'}>
                <CircleButton className={`play__wrap`} type={play ? 'pause' : 'play'} onClick={onPlay} />
            </div>

            <audio ref={audioRef} style={{width:0,height:0,position:'absolute'}} controls={false} src={audio} autoPlay={true}></audio>
            <Header/>
            <main>
                {children}
            </main>
        </>
    );
};

export default DefaultLayout;