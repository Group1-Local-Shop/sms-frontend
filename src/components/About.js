import { FaPhoneSlash } from "react-icons/fa";
import { FaClock} from "react-icons/fa";
import { FaRocket } from 'react-icons/fa';
import React from 'react'


function About() {
  return (
    <div>
      <>
    
      <section className='showcase'>
        <div className='showcase-overlay'>
          <h1>Modern office within the warehouse </h1>
          <p>
            We acquire, develop and manage modern grade-A warehousing across the world
          
          </p>
        </div>
        <div className="body-section">
          <div className="trusted">
            <h3>OUR PARTNERS</h3>
            <div className='logo'>
              <img className='logo-1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/558px-Tesla_Motors.svg.png?20220430025811"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s"/>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOiGazJ3Ul3ogCmv-y8jgr9nkSzOKSGDb7u9Y4Cepx-Qehp3Bz9kv06JcG0XkXbCkvao&usqp=CAU'/>
              <img src="https://sky.garden/assets/sky-green-logo.png"/>
            </div>
            <div className="why-wrapper">
              <div className='why-section'>
                <h2 className='why-h3'>WHY <element className="why-title">LOCALShop</element></h2>
                <p> We manage for you .create a new store today and lets us keep it moving, no more stock loss</p>
                 
              </div>
            </div>
              <div className="action-wrapper">
                <div className="action-card">
                  <h2>  <FaPhoneSlash /></h2>
                  <p>No more calling around and being on hold for long periods of time.</p>
                </div>
                <div className="action-card mid-action">
                  <h2>  <FaClock /></h2>
                  <p>Get your inventory list upto date, listed,ordered and delivered on time.No more hustle </p>
                </div>
                <div className="action-card">
                  <h2>  <FaRocket/></h2>
                  <p>Time is money.More speed equals more money.We Manage your work fast.</p>
                </div>
      
              </div>
              <h1 className="comment-title">Loved by Businesses across the country</h1>
              <div className="comment">
                <div className="comment-1">
                  <p>"LocalShop is an open ERP system. so it's easy to customize as per need. LocalShop already provides lots of services purchase, inventory which are very useful and easy to handle. From small-scale industries to Multi-National companies you Odoo ERP System.  </p>
                  <div className="dp"><img src="https://avatars.githubusercontent.com/u/97158395?v=4"/><h5 className="dp-title">Gaudencia Wanyama</h5></div>
                </div>
                <div className="comment-1">
                <p>"A simple menu that can be accessed through any device is a very pronounced advantage when compared to other ERPs. This makes it easier for us to be able to access and work on a mobile basis. ," </p>
                <div className="dp"><img src="https://images.pexels.com/photos/2076966/pexels-photo-2076966.jpeg?auto=compress&cs=tinysrgb&w=800"/><h5 className="dp-title">Centie Wetu</h5></div>
                </div>
                <div className="comment-1">
                <p>"LocalShop is super customizable. Anything you would like to be developed is possible and integrations with tons of apps are already made. If you want to integrate new apps,"</p>
                <div className="dp"><img src="https://images.pexels.com/photos/4427501/pexels-photo-4427501.jpeg?auto=compress&cs=tinysrgb&w=800"/><h5 className="dp-title"> Peter Mbugua</h5></div>
                </div>
                <div className="comment-1">
                <p>"The accounts receivable and accounts payable function automatically makes payments to suppliers, without setbacks, which makes my job easier.", </p>
                <div className="dp"><img src="https://images.pexels.com/photos/8371721/pexels-photo-8371721.jpeg?auto=compress&cs=tinysrgb&w=800"/><h5 className="dp-title">Elias Wambua</h5></div>
                </div>
                <div className="comment-1">
                <p> "t is a very flexible system, many different functions can be in one placе. The most important thing is that you can implement a large number of integrations with other services." </p>
                <div className="dp"><img src="https://images.pexels.com/photos/7520515/pexels-photo-7520515.jpeg?auto=compress&cs=tinysrgb&w=800"/><h5 className="dp-title">clement hwvart</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th" </p>
                <div className="dp"><img src="https://images.pexels.com/photos/12148297/pexels-photo-12148297.jpeg?auto=compress&cs=tinysrgb&w=800"/> <h5 className="dp-title">Johnson James</h5></div>
                </div>
              </div> 
              {/* <div className="my-footer"><Footer/></div> */}
          </div>
        </div>
      </section>
      </>
    </div>
  )
}

export default About
