
import React from 'react';
import Headphones  from './components/headphone_data';


const openLink = (item) => {
    window.open(item.url)
}

const Music = () => {
    console.log( Headphones );
    const listItems =  Headphones.map((item) =>
        <div className="card" key={item.category="headphone"}>
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
         <h3>Headphones</h3>
            {listItems}
        </div>
    )


}
export default Music;