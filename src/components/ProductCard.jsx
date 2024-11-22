import React from 'react'

const ProductCard = ({ productImg, ml }) => {
    return (
        <div className='h-52 w-52 font-bold text-[#582E7D] flex flex-col items-center justify-center bg-[#582E7D] rounded-xl bg-opacity-20'>
            <img
                src={productImg}
                style={{width: '80px', height: '160px' }}
            />
            <p>{ml}</p>
        </div>
    )
}

export default ProductCard