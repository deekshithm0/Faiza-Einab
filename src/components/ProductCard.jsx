import React from 'react'

const ProductCard = ({ productImg }) => {
    return (
        <div className='h-10 w-10 flex items-center justify-center bg-violet-300'>
            <img
                src={productImg}
                style={{width: '20px', height: '40px' }}
            />
        </div>
    )
}

export default ProductCard