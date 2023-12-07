import React from 'react'

function Home(props) {
    return (
        <div>
            <div className='add-to-cart'>
                < img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CiJHw8OYkFQwqQGFv0UbctxAbeQF122ykqiAlYkH&s'  />

            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone15pro-digitalmat-gallery-1-202309_GEO_EMEA?wid=364&hei=333&fmt=png-alpha&.v=1693346851387" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
    
                        >
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home