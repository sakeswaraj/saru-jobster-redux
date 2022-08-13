import React, { useState } from "react";
import { toast } from 'react-toastify';
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo } from "../components";
import FormInput from "../components/FormInput";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
};

const Register = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values;
        if (!email || !password || (!isMember && !name)) {
            toast.error('Please fill out all fields');
            return;
        }
    };
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? "Login" : "Register"}</h3>
                {/* name field */}
                {!values.isMember && (
                    <FormInput
                        type="text"
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}
                <FormInput
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* password field */}
                <FormInput
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button type="submit" className="btn btn-block">
                    submit
                </button>
                <p>
                    {values.isMember ? "Not a member yet?" : "Already a member?"}
                    <button type="button" onClick={toggleMember} className="member-btn">
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};

export default Register;
