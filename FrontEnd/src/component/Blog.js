
import BlogCard from './BlogCard'
import React from 'react'

export default function Blog() {


  const blogs = [{ img: "https://www.mashed.com/img/gallery/heres-how-much-you-should-tip-your-food-delivery-driver/intro-1587484523.jpg", title: "Faster home delivery", desc: "We are giving our customers the home delivery services.." }, { img: "https://img.freepik.com/free-photo/food-delivery-boy-delivering-food-scooter_1303-27695.jpg", title: "Become a rider", desc: "Become a rider of our platform.We are giving this opportunity.." }, { img: "https://www.shutterstock.com/shutterstock/photos/1829205563/display_1500/stock-photo-fresh-homemade-italian-pizza-margherita-with-buffalo-mozzarella-and-basil-1829205563.jpg", title: "Pizza of the week", desc: "Get the best pizza of the weak from our platform in discount.." }]
  return (
    <div className='blog'>
      <div className="blog_text">
        <h6>Our Blog</h6>
        <h1>Read Our Blog</h1>
        <p>Best cooks and best delivery guys all at your service. Hot <br /> tasty food will reach you in 60 minutes.</p>

      </div>
      <div className="blog_cards">
        {blogs.map((blog, index) => {
          return <div key={index} className="bcard">
            <BlogCard src={blog.img} title={blog.title} desc={blog.desc} />

          </div>
        })}
      </div>
      <button id='read'>Read All Blog</button>

    </div>
  )
}
