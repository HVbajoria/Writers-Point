import logo from "../Assets/WritersPoint-logos_black.png";
const Hero = ({ connectWallet }) => {

    return (
        <div className="min-h-screen glass min-w-full">
            <nav id="nav" className="flex flex-row justify-between sticky top-0 p-5">
                <div className="left-0">
                <img className="absolute -top-20 left-0 w-1/6" src={logo} alt="" />
                </div>
                <ul className="flex flex-row items-end justify-end text-right transition-all ease-in-out duration-300 text-2xl">
                    <li className="mx-12 my-2 font-semibold cursor-pointer">Home</li>
                    <li className="mx-6 my-2 font-semibold cursor-pointer">About Us</li>
                </ul>
            </nav>
            <main className="mt-24 bg-gradient-to-b flex flex-col items-center justify-center overflow-hidden rounded-lg">
            <h1
                                className="text-5xl text-black md:text-6xl font-bold leading-tighter tracking-tighter mb-4"
                                data-aos="zoom-y-out"
                            >
                                Welcome to{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600">
                                    Writers Point
                                </span>
                            </h1>
                            <div className="max-w-4xl mx-auto">
                                <p
                                    className="text-xl text-black-100 mb-8 text-justify"
                                    data-aos="zoom-y-out"
                                    data-aos-delay="150"
                                >
                                    Writer's point is a place where everyone can pen down their emotions, and thoughts to create a small World of their own with the security and privacy of blockchain on Polygon.
                                </p>
                                <div className="flex flex-row gap-8 justify-center my-4 text-teal-700 items-center text-2xl">
                                    The World Of Emotions, Thoughts Is Waiting For You!
                                </div>
                                </div>
                                <button className="mt-2 bg-gradient-to-r from-blue-400 to-purple-900 px-5 py-4 rounded-2xl hover:scale-87 text-2xl text-white font-One justify-center center" onClick={connectWallet}> Enter Now </button>
            </main>
        </div>
    )
}
export default Hero;
