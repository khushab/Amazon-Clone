import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">

            <div className="home__container">
                <img className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="banner" />
                {/* <h3 className="home__createdBy">Made By - Mohammed Khushab Alam</h3> */}
            </div>

            <div className="home__row">
                <Product
                    id="1"
                    title="Pipo Y91i (Ocean Blue, 2GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={7990}
                    rating={3}
                    image="https://www.91-img.com/pictures/133032-v9-vivo-y91i-mobile-phone-large-1.jpg?tr=h-330,c-at_max,q-60"

                />
                <Product
                    id="2"
                    title="Dell G3 3500 Gaming Laptop with 15.6 Inch 120 Hz FHD Display (10th Gen i5-10300H/ 8 GB/ 1TB+256 SSD/ Win 10/ NVIDIA GTX 1650 4GB Graphics) D560245HIN9BE / D560317HIN9BE"
                    price={72990}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/61s0UA4pmVL._AC_UL474_SR474,450_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - Black"
                    price={15495}
                    rating={2}
                    image="https://m.media-amazon.com/images/I/716gbwgdY-L.jpg"
                />
                <Product
                    id="4"
                    title="GK81 Mechanical Keyboard Wired & 2.4G Dual Mode Backlight Low Profile RGB Switch Keyboard 104 Keys N Key Rollover Floating Keycaps for PC Red Switch"
                    price={20109}
                    rating={3}
                    image="https://img.joomcdn.net/5365df19734413a42813f5eea66f6e27a9c322fc_original.jpeg"
                />
                <Product
                    id="5"
                    title="Logitech G 304 Lightspeed Wireless Gaming Mouse, Hero Sensor, 12,000 DPI, Lightweight, 6 Programmable Buttons, 250h Battery Life, On-Board Memory, Compatible with PC/Mac - Black"
                    price={3254}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MexvlK3YL._SX466_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung 208 cm (82 inches) 8K Ultra HD Smart QLED TV QA82Q900RBKXXL (Black) (2019 Model)"
                    price={919490}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ecqaVo0hL.jpg"
                />
            </div>

        </div>
    )
}

export default Home
