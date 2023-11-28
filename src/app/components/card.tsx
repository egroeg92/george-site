"use client";

import React, { useState } from 'react';
import { Sora } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const sora = Sora({ subsets: ['latin'] })

export default function Card() {

    const [value, setValue] = useState(0);

    const handleChangeSlider = (value: string) => {
        setValue(Number(value));
    }

    return (
        <div className="color-white border-solid border-2 border-white rounded-md p-5">
            <div id='title' className={sora.className} style={{
                fontSize: '10vw',
                fontWeight: value,
            }}>
                George
            </div>

            <div id='control-container' className='pt-20 flex'>
                <div className='w-full'> 
                    <input type='range' value={value} onChange ={ (e) => handleChangeSlider(e.target.value)} min={100} max={900} className={'card-slider'} />
                </div>
            </div>
        </div>
    )
}
