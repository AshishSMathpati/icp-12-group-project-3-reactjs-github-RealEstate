import Who from "./../images/About/group.png"
import Why from "./../images/About/why-choose.png"
import Home from "./../images/About/about-home-demo.jpg"
import OurVision from "./../images/About/vision.jpg"
import ContactUs from "./../images/About/contact-us.jpg"
function About() {
    return <>
        <div>
            <h1 className="text-6xl py-5 text-center">About Page</h1>
            <img src={Home} className="h-110 w-220 mx-45 shadow-xl/30 shadow-red-500/50   " />



            <div className="border rounded-2xl my-10 mx-5 bg-red 500 max-w-220
             flex flex-row gap-5 justify-self-end ">

                <img src={Who} className="w-60 h-60 my-10 mx-5 item-left" />

                <div className="item-right flex flex-col p-5 bg-red-800/50">

                    <h1 className="text-3xl font-extrabold p-5 text-center">Who We Are</h1>
                    <p>Welcome to Real Estate, a trusted name in the real estate industry committed
                        to helping individuals, families, and investors find the perfect property. With a strong
                        understanding of the local market and a passion for excellence, we deliver transparent,
                        reliable, and client-focused real estate solutions.
                        Since our inception, we have successfully assisted hundreds of clients in buying, selling,
                        and investing in residential and commercial properties, building long-term relationships based
                        on trust and results.
                    </p>
                </div>

            </div>

            <div className="border rounded-2xl my-10 mx-5 bg-red 500 max-w-250
             flex flex-row gap-5 justify-self-start">
                <img src={Why} className="w-60 h-60 my-10 mx-5" />

                <div className="item-right flex flex-col p-5 bg-red-800/50">

                    <h1 className="text-3xl font-extrabold p-5 text-center">Why choose US ?</h1>
                    <p>
                        1. Our team consists of skilled real estate experts with in-depth market knowledge. <br />
                        2. No hidden charges, clear communication, and honest pricing. <br />
                        3. Your needs and goals always come first. <br />
                        4. Strong understanding of neighborhood trends and property values <br />
                        5. From property search to final handover, we are with you at every step. <br />
                    </p>
                </div>
            </div>

            <div className="border rounded-2xl my-10 mx-5 bg-red 500 max-w-220
             flex flex-row gap-5 justify-self-end">
                <img src={OurVision} className="w-80 h-60 my-10 mx-5" />

                <div className="item-right flex flex-col p-5 bg-red-800/50">

                    <h1 className="text-3xl font-extrabold p-5 text-center">Our Vision</h1>
                    <p>Welcome to Real Estate, a trusted name in the real estate industry committed
                        to helping individuals, families, and investors find the perfect property. With a strong
                        understanding of the local market and a passion for excellence, we deliver transparent,
                        reliable, and client-focused real estate solutions.
                        Since our inception, we have successfully assisted hundreds of clients in buying, selling,
                        and investing in residential and commercial properties, building long-term relationships based
                        on trust and results.
                    </p>
                </div>

            </div>

            <div className="border rounded-2xl my-10 mx-5 bg-red 500 max-w-aotu
             flex flex-row gap-5 justify-self-center">
                <img src={ContactUs} className="w-80 h-60 my-10 mx-5" />

                <div className="item-right flex flex-col p-5 bg-red-800/50">

                    <h1 className="text-3xl font-extrabold p-5 text-center">Get In Touch with Us !</h1>
                    <p className="text-lg">Whether you are looking to buy your dream home, sell your property,
                         or invest in real estate, RealEstate is here to help. <br /> <br />

                        📞 Phone: +91 9172896214 <br />
                        📧 Email: ashishsmathpati@gmail.com <br />
                        📍 Location: RealEstate, Wagholi, Pune <br />
                    </p>
                </div>

            </div>
        </div>
    </>
}

export default About;