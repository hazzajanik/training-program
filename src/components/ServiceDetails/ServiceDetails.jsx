import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {

    const [service, setService] = useState({});

    const { id } = useParams();

    const services = useLoaderData();

    useEffect(() => {

        const findService = services?.find(service => service.id === id)
        setService(findService);


    }, [id, services])

    const { name, image } = service;





    return (
        <div>
            <div className="card h-96 bg-purple-50">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Training programming is a structured and iterative process that ensures training programs are well-designed, learner-focused, and capable of achieving their intended outcomes. It is essential in various contexts, including corporate training, educational institutions, vocational training, and professional development programs.
                    Technology and equipment can evolve over time. It's important to emphasize the need for continuous learning and staying updated on new installation techniques and equipment advancements.</p>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;