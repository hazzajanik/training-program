import slider from '../../assets/slider-img.jpg';
const Banner = () => {
    return (
        <div className='bg-purple-200'>
            <div className="hero min-h-screen container mx-auto px-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={slider} className="md:max-w-sm rounded-full shadow-2xl border-4 border-purple-700" />
                    <div>
                        <h1 className="text-5xl font-bold">Training <br />Service <br />Providers</h1>
                        <p className="py-6">Training programming, also known as training design or curriculum development, is the process of planning, developing, and organizing a structured program to teach specific skills or knowledge to a group of learners. </p>
                        <button className="btn bg-purple-900 rounded-3xl text-white font-semibold hover:bg-purple-600">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;