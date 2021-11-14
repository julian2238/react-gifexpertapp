import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
        <h3 className="animate__animated animate__flash animate__delay-1s">{category}</h3>

        {loading && <p>Loading...</p>}


        <div className="cardGrid">
            
            {
                images.map(img =>(
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
        </>
    )
}

