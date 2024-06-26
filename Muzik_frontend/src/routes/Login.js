
import logo_color from "../assets/images/color logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is included
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import {useState} from "react";
//import {Icon} from "@iconify/react";
//import TextInput from "../components/shared/TextInput";
//import PasswordInput from "../components/shared/PasswordInput";
import {Link, useNavigate} from "react-router-dom";
import {makeUnauthenticatedPOSTRequest} from "../utils/serverHelpers";
import {useCookies} from "react-cookie";
const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
        const data = {email, password};
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/login",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            alert("Success");
            navigate("/home");
        } else {
            alert("Failure");
        }
    };
    return (
        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center ">
            <div className=" logo p-2 border-2 w-100 d-flex justify-content-center">
                <img src={logo_color} alt="Logo" width={150} />
            </div>
            <div className="inputRegion h-100 w-25 py-4 d-flex flex-column justify-content-center align-items-center"> 
                <div className="fw-bold mb-5 d-flex flex-column align-items-center justify-content-center ">
                    To continue login to Muzik.
                </div>
                <TextInput 
                    label={"Email ID or Username"}
                    placeholder={"Email ID or Username"}
                    className={"my-1"}
                    value={email}
                    setValue={setEmail}
                    />
                <PasswordInput 
                    label={"Password"}
                     placeholder={"Password"}
                     value={password}
                     setValue={setPassword}
                />
                <div className="  w-100 d-flex flex-column  align-items-center justify-content-end   mt-4">
                    <div className="d-flex justify-content-end w-100">
                    <button 
                        className="btn fw-bold rounded-full " 
                        style={{ backgroundColor: '#4A3A29', color: 'white' }}
                        onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}> 
                        
                        LOG IN 
                    </button> 
                    </div> 
                    <div className=" w-100 border border-solid border-gray-300 my-3">

                    </div>
                    <div className="my-3 fw-semibold text-lg ">
                        Don't have an account 
                    </div>
                    <div className=" border border-gray-600 text-muted brygada border-2 w-50  rounded  justify-content-center text-center py-1 ">
                        Sign up for Muzik
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default LoginComponent;
