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
                <h2 className='why-h3'>WHY <element className="why-title">LOCALStore</element></h2>
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
                  <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196117661-57f87a6f-2155-4328-8b48-fa27d6ec85a2.png"/><h5 className="dp-title">Evans Rutto</h5></div>
                </div>
                <div className="comment-1">
                <p>"A simple menu that can be accessed through any device is a very pronounced advantage when compared to other ERPs. This makes it easier for us to be able to access and work on a mobile basis. ," </p>
                <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196118175-d8a7884b-8be5-4b21-be9a-23ed78b187be.png"/><h5 className="dp-title">Billy Mwangi</h5></div>
                </div>
                <div className="comment-1">
                <p>"LocalShop is super customizable. Anything you would like to be developed is possible and integrations with tons of apps are already made. If you want to integrate new apps,"</p>
                <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196118387-e3852151-5f7d-4426-8416-f8b679f77e17.png"/><h5 className="dp-title"> Peter Ndumia</h5></div>
                </div>
                <div className="comment-1">
                <p>"The accounts receivable and accounts payable function automatically makes payments to suppliers, without setbacks, which makes my job easier.", </p>
                <div className="dp"><img src="https://user-images.githubusercontent.com/63696529/196118581-24c47276-aecb-43d3-bef1-13c5cfa32371.png"/><h5 className="dp-title">Geoffrey Meru</h5></div>
                </div>
                <div className="comment-1">
                <p>"t is a very flexible system, many different functions can be in one placе. The most important thing is that you can implement a large number of integrations with other services." </p>
                <div className="dp"><img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80"/><h5 className="dp-title">James Maina</h5></div>
                </div>
                <div className="comment-1">
                <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th" </p>
                <div className="dp"><img src="https://imgk.timesnownews.com/story/66603010_1317351581756321_4675944928644445097_n.jpg"/> <h5 className="dp-title">LIncolin Angaya</h5></div>
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
