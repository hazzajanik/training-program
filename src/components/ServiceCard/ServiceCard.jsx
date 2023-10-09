import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    
    const {id, name, image, price, description } = service;
    return (
        <div>
            <div className="card h-96 bg-purple-50">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="flex items-center gap-10">
                        <p className="text-lg font-semibold">Price: {price}</p>
                        <Link to={`/service/${id}`}><button className="btn bg-purple-900 rounded-3xl text-white font-semibold hover:bg-purple-600">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;