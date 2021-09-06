
// import {handleClick} from './product_data';
import React from 'react';
import product_card from '../components/product_data';


const openLink = (item) => {
    window.open(item.url)
}

const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
        <div className="card" key={item.category="mobile"}>
            <div className="card_img">
                <img src={item.thumb_src}
                    alt=""
                />

            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>


                <div className="btn">
                    <button onClick={() => openLink(item)} className="btn btn-success">Buy Now</button>

                </div>
            </div>
        </div>
    );

    return (
        <div className="main_content">
            <h3>Top Trending</h3>
            {listItems}
        </div>
    )

}
export default MainContent;