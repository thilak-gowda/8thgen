
import '../assetes/style/pages.css';
import { Heading, Heading2 } from '../components/heading';
import Cards from '../components/cards';
import Swipeer from '../components/swipersec';

function Homepage() {
    return (
        <section>

            <div className="banner container-fluid pt-4">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">

                        <p className='main-tagline'>
                            Crafting Digital<br />
                            Excellence
                        </p>
                        <p className="sub-content ">
                            At EightGen Technologies, we don't just build websites; we craft digital experiences that leave a lasting impression. Elevate your brand, engage your audience, and exceed your online goals with our cutting-edge web development solutions.
                        </p>
                        <div className="mn-btnns">
                            <button className='exp-btn'>Explore More <i class="fa-solid fa-arrow-right-long"></i></button>

                            {/* <button className='ply-btn'>

                                <div className='inner-ply-btnn'>
                                    <span className='outer-circle'>
                                        <i class="fa-solid fa-play "></i>
                                    </span>
                                    <span className='me-5'> Play Viedo </span>
                                </div>

                            </button> */}

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/h1-img-1.webp" alt="" className='banner-perimg' />
                    </div>

                </div>
            </div>

            <div className="high-lig container-fluid py-5">
                <div className="container cont-main">
                    <div className="row high-inner">
                        <div className="col-lg-3 d-flex align-items-center px-0">
                            <p className='high-content mb-0'> Trusted By   250,000 Business </p>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center justify-content-center">
                            <div className=''>
                                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-video-img-1.webp" alt="" className='w-100 cardd-1' />
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center justify-content-center">
                            <div className='cardd'>
                                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-video-img-1.webp" alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex align-items-center justify-content-center">
                            <div className='cardd'>
                                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/t1-video-img-1.webp" alt="" className='w-100 cardd-3' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">

                <Heading2
                    heading2="CONSULTING SERVICES"
                />
                <Heading
                    heading1="Our Services"
                    className="text-center"
                />


                <div className="row card-section">
                    <div className="col-lg-4">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading=" Website Development"

                            content="Unleash the power of your online presence with our cutting-edge website development services. We specialize in creating responsive, user-friendly, and visually stunning websites that leave a lasting impression on your audience."

                            list1="Customized Designs "
                            list2="Seamless Navigation"
                            list3=" Mobile Optimization"
                            list4=" User-Centric Approach  "

                        />

                    </div>

                    <div className="col-lg-4">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading="eCommerce Websites"

                            content="Step into the world of online retail with our eCommerce website solutions. We don't just build websites; we create digital storefronts that captivate your customers and drive sales."

                            list1="Secure Payment Gateways"
                            list2="Intuitive Shopping Experience"
                            list3=" Product Showcase"
                            list4="Analytics Integration"

                        />

                    </div>

                    <div className="col-lg-4">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading="App Development"

                            content="Transform your ideas into reality with our expert app development services. Whether it's iOS, Android, or cross-platform, we deliver robust and scalable applications that elevate your brand to new heights."


                            list1="SUser-Centric Design"
                            list2="Agile Development"
                            list3="App Store Optimization"
                            list4="Maintenance and Support"

                        />

                    </div>

                    <div className="col-lg-4">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading="Game Development"

                            content="Immerse your audience in captivating virtual worlds with our game development expertise. From concept to execution, we craft interactive and engaging gaming experiences that resonate with players."

                            list1="Innovative Game Design"
                            list2="High-Quality Graphics"
                            list3="Multi-platform Compatibility"
                            list4="Monetization Strategies"


                        />

                    </div>

                    <div className="col-lg-4">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading="Software Solutions"

                            content="Whether you need a custom software application or want to streamline your business processes, our software solutions are tailored to enhance efficiency and performance."

                            list1="Innovative Game Design"
                            list2="High-Quality Graphics"
                            list3="Multi-platform Compatibility"
                            list4="Monetization Strategies"


                        />

                    </div>

                    <div className="col-lg-4">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading="Digital Marketing"

                            content="Amplify your online presence and reach your target audience effectively through our comprehensive digital marketing strategies. From SEO and social media management to content marketing, we drive measurable results that boost your brand's visibility and engagement."

                            list1="Innovative Game Design"
                            list2="High-Quality Graphics"
                            list3="Multi-platform Compatibility"
                            list4="Monetization Strategies"


                        />

                    </div>
                </div>

            </div>


            <div className="banner container-fluid py-5">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">

                        <p className='main-tagline2'>

                            Why Choose
                            <br />
                            EightGen Technologies?
                        </p>
                        <p className="sub-content ">
                            ✨ Expertise: A team of seasoned developers with a passion for innovation. <br /> ✨ Customization: Tailored solutions to meet your unique business requirements. <br />✨ Quality: Uncompromising commitment to delivering top-notch websites. <br />✨ Future-Ready: Embrace the latest technologies for sustainable growth.<br /> ✨ Partnership: Collaborate with a dedicated team invested in your success.
                        </p>
                        <div className="mn-btnns">
                            <button className='exp-btn'>Explore More <i class="fa-solid fa-arrow-right-long"></i></button>



                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-img-1png.webp" alt="" className='banner-perimg2' />
                    </div>

                </div>
            </div>

            <hr />

            <div className="container py-5">

                <Heading2
                    heading2="CONSULTING SERVICES"
                />
                <Heading
                    heading1="In Collaboration With"
                    className="text-center"
                />


                <div className="row card-section">
                    <div className="col-lg-3 col-6">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-1.webp" alt="" className='w-100' />


                    </div>

                    <div className="col-lg-3 col-6">

                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-1.webp" alt="" className='w-100' />
                    </div>

                    <div className="col-lg-3 col-6">

                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-1.webp" alt="" className='w-100' />

                    </div>

                    <div className="col-lg-3 col-6">

                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/logo-1.webp" alt="" className='w-100' />

                    </div>
                </div>

            </div>
            <hr />

            <div className="banner container-fluid py-5">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">

                        <p className='main-tagline2'>
                            Who We Serve ?

                        </p>
                        <p>
                            <i class="fa-solid fa-check tick"></i>
                            <span><b> Startups:</b> Ignite your online presence and stand out from the crowd. </span>
                        </p>
                        <p>
                            <i class="fa-solid fa-check tick"></i>
                            <span><b> SMEs:</b>  Scale your business with a powerful digital foundation.  </span>
                        </p>

                        <p>
                            <i class="fa-solid fa-check tick"></i>
                            <span><b> Enterprises:</b>  Elevate your brand with bespoke, enterprise-level solutions.</span>
                        </p>

                        {/* <p>
                            <i class="fa-solid fa-check tick"></i>
                            <span><b> Startups:</b> Ignite your online presence and stand out from the crowd. </span>
                        </p>

                        <p>
                            <i class="fa-solid fa-check tick"></i>
                            <span><b> Startups:</b> Ignite your online presence and stand out from the crowd. </span>
                        </p> */}



                        <div className="mn-btnns">







                            <button className='exp-btn'>Explore More <i class="fa-solid fa-arrow-right-long"></i></button>



                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3.webp" alt="" className='banner-perimg3' />
                    </div>

                </div>
            </div>


            <div className="container py-5">

                <Heading2
                    heading2="CONSULTING SERVICES"
                />
                <Heading
                    heading1="Our Success Project's
                    That Inspire
                    "
                    className="text-center"
                />

                <div className='py-lg-5 py-3'>
                    <Swipeer />
                </div>

            </div>

            <div className="container-fluid px-0 bg-imgsec">
                <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/v1-img-1.webp" alt="" className='bg-img' />

                <div className="poss-abs text-center">
                    <span className='outer-circle2 d-block mb-lg-5 mb-3' >
                        <i class="fa-solid fa-play mx-auto"></i>
                    </span>

                    <p className='main-tagline3 text-white'>
                        We Help Your Business
                        <br />
                        To Become Stronger
                    </p>
                </div>

                <div className="poss-abs2">
                    <div className="bg-img">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/c1-img-1.webp" className='bg-img2' alt="" />

                        <div className="poss-abss">
                            <p className="top-cont">
                                Trendy Collection’s
                            </p>
                            <p className='main-tagline2'>
                                Better Ship Faster
                            </p>

                            <button className='exp-btn mt-lg-5 mt-3'>Explore More <i class="fa-solid fa-arrow-right-long"></i></button>

                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default Homepage;