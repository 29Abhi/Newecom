import React from 'react'
import "./Despensaries.css"


const Despensaries = () => {
  return (
    <>
    <div className='front_banner'>
    <h2>
    Directory Website
    </h2></div>
    <h2 className='category'  >Shop by Category</h2>
    <div className='products_display' >
      <div className='circle_display' >
        <img className='pro_img'  src='./Image/a.png' />
        <p className='pro_name'  >Flower</p>
      </div>
      <div className='circle_display' >
      <img className='pro_img'  src='./Image/b.png' />
        <p className='pro_name' >Edibles</p>
      </div>
      <div className='circle_display' >
      <img className='pro_img'  src='./Image/c.png' />
        <p className='pro_name' >CBD</p>
      </div>
      <div className='circle_display' >
      <img className='pro_img'  src='./Image/d.png' />
        <p className='pro_name' >Vape & Carts</p>
      </div>
      <div className='circle_display' >
      <img className='pro_img'  src='./Image/e.png' />
        <p className='pro_name' >Concentrates</p>
      </div>
      <div className='circle_display' >
      <img className='pro_img' src='./Image/f.png' />
        <p className='pro_name' >Concentrates</p>
      </div>
      
    </div>
    {/* <h2 className='category_desp'  >Shop Despensaries Near you</h2> */}
   <div className='map' >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118096.24050953904!2d82.67663277521629!3d22.334457867698433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a278f26de2eba65%3A0x3048cc6dcbdadff4!2sKorba%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1678739399978!5m2!1sen!2sin"
     width="100%" 
     height="750"
     
       style={{border:0}} allowFullScreen="" loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className='mid_banner' >
      <img className='banner_img' src='./Image/banner.png' />
      </div>
    <h2 className='weed' >Greate weed you can find today.</h2>
    <div className='weed_banner'>
      <div className='weed_div' >
       <img className='weed_heart' src='./Image/Path.png' />
        <img className='weed_canna' src='./Image/thumb 3.png' />
        <h2 className='weed_head' >Canna Cabana</h2>
        <img className='weed_loca' src='./Image/locationicon.png' />
        <p className='weed_para' >2917 Broadway Astoria, NY 11106 Tyonek Alaska | 110 mi 
        Medical $ Recreational</p>
        <div className='weed_detail' >
        <p className='weed_para1'>Rating</p>
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        </div>
        <img className='weed_cart' src='./Image/cart_trolly.png' />
        <button className='weed_btn' >BUY NOW</button>
      </div>
      <div className='weed_div' >
       <img className='weed_heart' src='./Image/Path.png' />
        <img className='weed_canna' src='./Image/thumb 3.png' />
        <h2 className='weed_head' >Canna Cabana</h2>
        <img className='weed_loca' src='./Image/locationicon.png' />
        <p className='weed_para' >2917 Broadway Astoria, NY 11106 Tyonek Alaska | 110 mi 
        Medical $ Recreational</p>
        <div className='weed_detail' >
        <p className='weed_para1' >Rating</p>
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        </div>
        <img className='weed_cart' src='./Image/cart_trolly.png' />
        <button className='weed_btn' >BUY NOW</button>
      </div>
      <div className='weed_div' >
       <img className='weed_heart' src='./Image/Path.png' />
        <img className='weed_canna' src='./Image/thumb 3.png' />
        <h2 className='weed_head' >Canna Cabana</h2>
        <img className='weed_loca' src='./Image/locationicon.png' />
        <p className='weed_para' >2917 Broadway Astoria, NY 11106 Tyonek Alaska | 110 mi 
        Medical $ Recreational</p>
        <div className='weed_detail' >
        <p className='weed_para1' >Rating</p>
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        <img className='star' src='./Image/Star 3.png' />
        </div>
        <div className='btn_box' >
        <img className='weed_cart' src='./Image/cart_trolly.png' />
        <button className='weed_btn' >BUY NOW</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Despensaries