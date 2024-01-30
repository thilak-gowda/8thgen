

function Footer() {
    return (
        <>
            <footer>
                <div className="upper-footer d-lg-flex justify-content-between  flex-row pb-4">

                    <div className="logo-sec">
                        <img src="https://themexriver.com/wp/choicy/wp-content/uploads/2024/01/logo-white.webp" alt="" className="footer" />
                    </div>

                    <div className="content2 d-lg-flex justify-content-end align-items-center ">
                        <p className="text-white footer-heading mb-0">
                            Ready To Get Started

                        </p>
                        <button className='exp-btn ms-lg-5'>Explore More <i class="fa-solid fa-arrow-right-long"></i></button>

                    </div>

                </div>
                <div className="container borrderr py-4">
                    <div className="row text-white">
                        <div className="col-md-4 md-mb-0 mb-4 text-start">
                            <p className="text-white footer-heading mb-0">
                                Address
                            </p>
                            <p className="d-flex align-items-center">
                                <i class="fa-solid fa-location-dot pe-2 fs-5"></i>  3C-131, East of NGEF Layout, Kasturi Nagar,
                                Bengaluru, Karnataka 560043
                            </p>
                            <p><i class="fa-solid fa-phone pe-2"></i> <a href="" className="contInfo"> Phone: 1234567890</a> </p>
                            <p> <i class="fa-solid fa-envelope pe-2"></i> <a href="" className="contInfo">Email: abcd@gmail.com</a></p>



                        </div>
                        <div className="col-md-4 text-center md-mb-0 mb-4">
                        <p className="text-white footer-heading mb-0">
                                Location
                            </p>
                            {/* <h5>Quick Links</h5> */}
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248872.3767413817!2d77.60553484282228!3d12.93142897966189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d93a10868d%3A0xdf3e9624ac127b7a!2sOpp!5e0!3m2!1sen!2sin!4v1705600897569!5m2!1sen!2sin" width="100%" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>


                        </div>
                        <div className="col-md-4">
                            <p className="text-white footer-heading mb-0">
                                Contact Us
                            </p>
                            <div id="note"></div>
                            <form id="footer-form">
                                <div className="row mb-2">
                                    <div className="col-md-6 col-sm-12 md-mb-0 mb-2">
                                        <input className="form-control" id="fname" name="name" placeholder="Name" type="text" />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <input className="form-control" id="lname" name="email" placeholder="Email" type="text" />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-md-3">
                                        <select name="ccode" placeholder="contrycode" className="form-control md-mb-0 mb-2">
                                            <option value="+91">91</option>
                                            <option value="+92">92</option>
                                        </select>
                                    </div>

                                    <div className="col-md-9">
                                        <input className="form-control" name="phone" placeholder="Phone" type="text" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-12">
                                        <textarea className="form-control" placeholder="Message" rows="2" name="message"></textarea>
                                    </div>
                                </div>
                                <button id="footer-button" className="footer-button d-flex mx-auto mt-3"
                                    type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container socialmedialinks pt-5">
                    <ul className="social ps-0">
                        <li className="ps-0"><a href="#" target="_blank"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                    <p className="copyrights">
                        2024 8gentecnoliges <span className="allrights">| All Rights Reserved </span>
                    </p>
                </div>
            </footer>
        </>
    )
}


export default Footer;