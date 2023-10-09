import { Link, useLocation, useNavigate } from "react-router-dom";
import plug from "../../assets/plug.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const {signIn,signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log("location in the login page", location)


// custom login Method--->

    const hundleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email,password)
        .then(result =>{
            
            toast.success('Successfully log in!')


            // navigate after login
            navigate(location?.state ? location.state : '/' );
        })
        .catch(error =>{
            
            toast.error("Password And Email Doesn't Matched Or You can register!")
        })
    };



// Google login  Method-->

    const hundleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            
            toast.success('Successfully log in!')
            
            // navigate after login
            navigate(location?.state ? location.state : '/' );
        })
        .catch(error =>{
            console.log(error)
        })
    };




    return (
        <div className="bg-purple-50 pb-20">
            <div className="py-10 flex items-center justify-center gap-3">
            <h1 className="text-4xl font-bold text-center ">Login</h1>
            <img src={plug} alt="" className="w-7" />
            </div>
            <div className="card flex-shrink-0 mx-auto w-full max-w-sm bg-purple-200">
                <form  className="card-body" onSubmit={hundleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-purple-900 rounded-3xl text-white font-semibold hover:bg-purple-600">Login</button>
                    </div>
                </form>
            </div>
                <p className="text-center">Do not have an account <span><Link to='/register'className="text-purple-600 font-bold" >Register</Link></span> </p>
                <div className="flex justify-center mt-5">
                <button onClick={hundleGoogleSignIn} className="btn bg-purple-900 w-72   rounded-3xl text-white font-semibold hover:bg-purple-600">Login With Google</button>
                </div>
                
        </div>
    );
};

export default Login;