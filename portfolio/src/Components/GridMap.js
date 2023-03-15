import React from 'react';
import { grid } from '../assets/constants';

const GridMap = () => {
    return (
        <div className=''>
            {grid.map((gridbox) => (
                <div className='p-4 grid grid-cols-2'
                    key={gridbox.name}
                >
                    <div className='h-16 bg-white rounded-md'>
                        {gridbox.name}
                        <gridbox.icon className="flex flex-col justify-center w-6 h-6" />
                    </div>

                </div>
            ))}

        </div>
    )
}

export default GridMap