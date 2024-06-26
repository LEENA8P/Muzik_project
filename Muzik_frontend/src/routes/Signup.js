 import {useState} from "react";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import logo_color from "../assets/images/color logo.svg";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";

const SignupComponent =  () => {
    
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();


    const signUp = async () => {
        if(email !== confirmEmail){
            alert(
                "Email and confirm email fields must match. Please check again "
            );
            return;
        }
        const data = { email, password , username , firstName , lastName};
        //console.log(data);
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/register",
             data

        );
        if (response && !response.err){
            console.log(response);
            const date = new Date();
            date.setDate(date.getDate()+30);
            const token = response.token;
            setCookie("token", token, {path: "/",expires:date});

            alert("Success");
            navigate("/home");
        }
        else{
            alert("Failure");
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-3 border-b border-solid border-gray-300 w-full flex justify-center">
            <img src={logo_color} alt="Logo" width={150} />
            </div>
            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                {/*  I will have my 2 inputs(email and password) and I will have my sign up instead button*/}
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    value={email}
                    setValue={setEmail}
                    
                />
                <TextInput
                    label="Confirm Email Address"
                    placeholder="Enter your email again"
                    value={confirmEmail}
                    setValue={setConfirmEmail}
                    
                />
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    value={username}
                    setValue={setUsername}
                    
                />
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password here"
                    value={password}
                    setValue={setPassword}
                   
                />
                <div className="w-full flex justify-between items-center space-x-8">
                    <TextInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        value={firstName}
                        setValue={setFirstName}
                        
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        value={lastName}
                        setValue={setLastName}
                       
                    />
                </div>
                <div className=" w-full flex items-center justify-center     my-8">
                    <button
                        className="btn fw-bold rounded-full " style={{ backgroundColor: '#4A3A29', color: 'white' }}
                        onClick={e=>{
                            e.preventDefault();
                            signUp();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-2 rounded-full font-bold">
                    Login In
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;


