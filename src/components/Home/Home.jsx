import Banner from "../Header/Banner";
import { useLoaderData } from 'react-router-dom';
import ServiceCard from "../ServiceCard/ServiceCard";
import pic from "../../assets/plug.png";
import About from "../About/About";


const Home = () => {
    const services = useLoaderData();
    console.log(services)

    return (
        <div>
            <Banner></Banner>

            {/* Service Part */}
            <div className="py-10 flex items-center justify-center gap-3">
            <h1 className="text-4xl font-bold text-center ">Our Services</h1>
            <img src={pic} alt="" className="w-7" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-10 mb-28">
            {
                services.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
            </div>
            {/* About Us */}
            <About></About>
            
        </div>
    );
};

export default Home;