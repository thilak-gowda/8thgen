import { Heading, Heading2 } from '../components/heading';


function About() {
    return (
        <>

            <div className="banner container-fluid pt-4">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">

                        <p className='main-tagline'>
                            About <br />
                            EightGen Technologies
                        </p>
                        <p className="sub-content ">
                            Welcome to EightGen Technologies, where innovation meets excellence in the realms of web development, digital marketing, and software solutions. At EightGen Technologies, we believe in transforming ideas into impactful digital experiences that elevate your brand and drive success.
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

            <div className="banner container-fluid py-5">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">

                        <p className='main-tagline2'>
                            Our Vision

                        </p>
                        <p  className="sub-content ">
                            Our vision is to be a leading force in the digital landscape, empowering businesses to thrive in the ever-evolving online world. We strive to create a digital ecosystem where creativity, technology, and strategy converge to deliver unparalleled solutions.
                        </p>





                    </div>

                    <div className="col-lg-6">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3.webp" alt="" className='banner-perimg3' />
                    </div>

                </div>
            </div>


            <div className="banner container-fluid py-5">
                <div className="row banner-sec">

                    <div className="col-lg-6">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/p1-img-3.webp" alt="" className='banner-perimg3' />
                    </div>

                    <div className="col-lg-6 banner-sec1">

                        <p className='main-tagline2'>
                            Who We Are

                        </p>
                        <p  className="sub-content ">
                            EightGen Technologies is more than just a technology company; we are a team of passionate individuals driven by a collective commitment to excellence. Our diverse team brings together a wealth of expertise in web development, digital marketing, and software engineering. We thrive on challenges and approach each project with enthusiasm and dedication.
                        </p>




                    </div>



                </div>
            </div>



            <div className="container py-5">

         
                <Heading
                    heading1="  What Sets Us Apart  "
                    className="text-center"
                />

                <p className="sub-content ">
                We stand out as a web agency due to our unwavering commitment to client-centric solutions. Our fusion of cutting-edge design and technical expertise ensures each website we craft is not just a digital presence but a compelling experience. We prioritize innovation, collaboration, and adaptability, making us the ideal partner for those seeking a distinct and impactful online presence
                </p>

                <div className="row card-section">
                    <p>
                        <i class="fa-solid fa-check tick"></i>
                        <span>Innovative Solutions: We don't just follow trends; we set them. Our team is at the forefront of innovation, leveraging the latest technologies to deliver cutting-edge solutions tailored to your unique needs. </span>
                    </p>
                    <p>
                        <i class="fa-solid fa-check tick"></i>
                        <span>Client-Centric Approach: Your success is our success. We prioritize understanding your goals, challenges, and vision to craft customized strategies and solutions that propel your business forward.</span>
                    </p>

                    <p>
                        <i class="fa-solid fa-check tick"></i>
                        <span>Exceptional Team: Our team comprises skilled professionals who are not just experts in their respective fields but also passionate about pushing the boundaries of what's possible. Collaboration and creativity are at the core of everything we do.</span>
                    </p>
                </div>

            </div>

        </>
    )
}

export default About;