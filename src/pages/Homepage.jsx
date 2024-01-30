
import '../assetes/style/pages.css';
import { Heading, Heading2 } from '../components/heading';
import Cards from '../components/cards';
import Swipeer from '../components/swipersec';
import Footer from '../components/footer';

function Homepage() {
    return (
        <section>

            <div className="banner container-fluid">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">
                        <p className="top-cont">
                            Trendy Collection’s
                        </p>
                        <p className='main-tagline'>
                            Building <br />
                            A Better You
                        </p>
                        <p className="sub-content ">
                            Every pleasure is to be welcomed and every pain avoided. and every pain avoided. certain circumstances ands
                        </p>
                        <div className="mn-btnns">
                            <button className='exp-btn'>Explore More <i class="fa-solid fa-arrow-right-long"></i></button>

                            <button className='ply-btn'>

                                <div className='inner-ply-btnn'>
                                    <span className='outer-circle'>
                                        <i class="fa-solid fa-play "></i>
                                    </span>
                                    <span className='me-5'> Play Viedo </span>
                                </div>

                            </button>

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
                    heading1="Consulting Costing"
                    className="text-center"
                />


                <div className="row card-section">
                    <div className="col-lg-3">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading=" Web devlopement"

                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam vel aspernatur excepturi tempore, est ducimus illum eos, nisi velit omnis possimus id iste delectus. Dolorem accusantium exercitationem at distinctio."

                        />

                    </div>

                    <div className="col-lg-3">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading=" Web devlopement"

                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam vel aspernatur excepturi tempore, est ducimus illum eos, nisi velit omnis possimus id iste delectus. Dolorem accusantium exercitationem at distinctio."

                        />

                    </div>

                    <div className="col-lg-3">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading=" Web devlopement"

                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam vel aspernatur excepturi tempore, est ducimus illum eos, nisi velit omnis possimus id iste delectus. Dolorem accusantium exercitationem at distinctio."

                        />

                    </div>

                    <div className="col-lg-3">

                        <Cards

                            image="https://themexriver.com/wp/choicy/wp-content/uploads/2023/12/s1-icon-1.webp"

                            heading=" Web devlopement"

                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam vel aspernatur excepturi tempore, est ducimus illum eos, nisi velit omnis possimus id iste delectus. Dolorem accusantium exercitationem at distinctio."

                        />

                    </div>
                </div>

            </div>


            <div className="banner container-fluid py-5">
                <div className="row banner-sec">
                    <div className="col-lg-6 banner-sec1">
                        <p className="top-cont">
                            Trendy Collection’s
                        </p>
                        <p className='main-tagline2'>
                            Skillset To Improve
                            <br />
                            Your Company Brand
                        </p>
                        <p className="sub-content ">
                            Every pleasure is to be welcomed and every pain avoided. and every pain avoided. certain circumstances ands
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
                    heading1="Our Investers"
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
                        <p className="top-cont">
                            Trendy Collection’s
                        </p>
                        <p className='main-tagline2'>
                            Better Ship Faster
                            <br />
                            Avoid Unauthorized
                        </p>
                        <p className="sub-content ">
                            Every pleasure is to be welcomed and every pain avoided. and every pain avoided. certain circumstances ands
                        </p>
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
            <div className="foter">
                <Footer />
            </div>

        </section>
    )
}

export default Homepage;