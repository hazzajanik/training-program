import about1 from "../../assets/about-img1.jpg";
import about2 from "../../assets/about-img2.jpg";
import plug from "../../assets/plug.png"
const About = () => {
    return (
        <div className=" bg-purple-200 pt-10">
            <div className="md:flex items-center container mx-auto px-10">
                <div>
                <div className="py-10 flex items-center gap-3" >
                    <h1 className="text-4xl font-bold ">About Us</h1>
                    <img src={plug} alt="" className="w-7" />
                </div>
                <p className=" text-lg">Each trainee, intern, and associate has the opportunity to build cultural, ethical, and clinical competence in the assessment and treatment of children, adolescents, adults, and their families within a multicultural and multidisciplinary, community mental health setting.</p>
                </div>
                <div>
                    <img src={about1} alt="" className="md:max-w-xs rounded-full shadow-2xl border-4 border-purple-700" />
                    <img src={about2} alt="" className="md:max-w-xs md:ml-20  md:mt-5 rounded-full shadow-2xl border-4 border-purple-700" />

                </div>
            </div>
        </div>
    );
};

export default About;