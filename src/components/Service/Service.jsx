import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";


const Service = () => {
    const services = useLoaderData();
    
    return (
        <div className="my-8">
            <h1 className="text-4xl font-bold text-center py-10">Our Services</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;