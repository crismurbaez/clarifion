import React from 'react';
import s from './bottomBar.module.css';

const BottomBar = () => {

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
        <div className={s.bottombarpadding}>
            <div className={s.bottombar}>
                <div>
                    <div className={s.data}>
                        <spam>{text[0]}</spam>
                        <img className={s.image} src='/images/Line2.png' alt='line2' />
                        <spam>{text[1]}</spam>
                    </div>
                </div>
            </div>
            <div className={s.databottom}>
                <img className={s.image} src={icon.src} alt={icon.alt} />
                <spam>{text[2]}</spam>
            </div>
        </div>

    )
}

export default BottomBar;