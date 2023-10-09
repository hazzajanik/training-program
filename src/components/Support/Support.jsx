
const Support = () => {
    return (
        <div> 
            <h1 className="text-4xl font-bold text-center py-10">Support</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card h-96 bg-purple-50">
                <figure className="px-10 pt-10">
                    <img src={"https://support.edapp.com/hubfs/Getting%20started-1.png"} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Getting Started</h2>
                    <p>
                    Invite learners, set up the management tool and begin creating your lessons.</p>
                </div>
            </div>
            <div className="card h-96 bg-purple-50">
                <figure className="px-10 pt-10">
                    <img src={"https://support.edapp.com/hubfs/Admin-portal-2.png"} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Admin Portal</h2>
                    <p>
                    Delve into how to utilise the admin side of EdApp to enhance your learning programme.
                    </p>
                </div>
            </div>
            <div className="card h-96 bg-purple-50">
                <figure className="px-10 pt-10">
                    <img src={"https://support.edapp.com/hubfs/Learner-portal.png"} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Learners App</h2>
                    <p>
                     Learn more about logging in, taking courses and our features.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Support;