import React from 'react';
import { grid } from '../assets/constants';

const GridMap = () => {
    return (
        <div>
            {grid.map((gridbox) => (
                <div
                    className='mt-8 grid lg:grid-cols-5 gap-3 bg-white justify-center'
                    key={gridbox.name}
                >
                    {gridbox.name}
                    <gridbox.icon className="flex w-6 h-6 mr-2" />
                </div>

            ))}

        </div>
    )
}

export default GridMap