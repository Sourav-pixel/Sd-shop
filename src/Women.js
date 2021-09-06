import React from 'react';
import Women from './components/women_data';


const openLink = (item) => {
    window.open(item.url)
}

const Womens = () => {
    console.log( Women );
    const listItems =   Women.map((item) =>
        <div className="card" key={item.id}>
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
         <h3>Womens wear</h3>
            {listItems}
        </div>
    )


}
export default Womens ;