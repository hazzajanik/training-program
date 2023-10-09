import  blog1  from "../../assets/blog1.jpg";
import  blog2  from "../../assets/blog2.jpg";



const Blog = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10  my-10">
            <div className="card bg-purple-100">
            <figure><img src={blog1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-semibold text-xl text-center">Shoes!</h2>
                    <p className="text-center">Training programming, also known as training design or curriculum development, is the process of planning, developing, and organizing a structured program to teach specific skills or knowledge to a group of learners. It is a systematic approach to ensure that training objectives are met efficiently and effectively.</p>
                </div>
            </div>
            <div className="card bg-purple-100 ">
            <figure><img src={blog2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="font-semibold text-xl text-center">Shoes!</h2>
                    <p className="text-center">Before developing a training program, it's essential to conduct a needs assessment to identify the specific learning needs and objectives. This involves analyzing the skills or knowledge gaps that need to be addressed. This step helps in defining the goals and scope of the training.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;