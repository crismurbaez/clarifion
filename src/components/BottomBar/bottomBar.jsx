import React from 'react';
import s from './bottomBar.module.css';

const BottomBar = () => {

    const line2 =
    {
        src: '/images/line2.png',
        alt: 'line2',
    }

    const icon = {
        src: '/images/lock.svg',
        alt: 'heart',
    }

    const text = [
        'Copyright (c) 2023',
        'clarifionsupport@clarifion.com',
        'Secure 256-bit SSL encryption.'
    ]


    return (
        <div className={s.bottombar}>
            <div>

                <div className={s.data}>
                    <spam>{text[0]}</spam>
                    <img src={line2.src} alt={line2.alt} />
                    <spam>{text[1]}</spam>
                </div>

            </div>

            <div>

                <div className={s.data}>
                    <img src={icon.src} alt={icon.alt} />
                    <spam>{text[2]}</spam>
                </div>


            </div>
        </div>
    )
}

export default BottomBar;