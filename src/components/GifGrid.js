import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
const GifGrid = ({category}) => {

    const {data:images,loading}=useFetchGifs(category);
    
    return (
        <>
            <h3 className='animate__animated animate__bounce animate__delay-6s'>{category}</h3>
            {loading && 'cargando...'}
            <div className="card-grid">
                {
                    images.map((img)=>{
                        return <GifGridItem key={img.id} img={img}/>
                })
                }
            </div>
        </>
    )
}

export default GifGrid
