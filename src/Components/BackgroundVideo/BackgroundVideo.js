import React from 'react';
import './BackgroundVideo.scss';

const BackgroundVideo = () => {

    return (
        <div className='BackgroundVideo'>
            <video autoPlay='autoPlay' loop='loop' muted className='video'>
                <source src={process.env.PUBLIC_URL + '/imgs/video.mp4'} type='video/mp4' />
            </video>
        </div>
    );
};

export default BackgroundVideo;