import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import styled from "styled-components";


 

const loginFormik = () =>
{
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) =>
            {
                setTimeout(() =>
                {
                    console.log("Logging in", values);
                    setSubmitting(false);
                }, 500);
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required("Required"),
                password: Yup.string()
                    .required("No password provided.")
                    .min(8, "Password is too short - should be 8 chars minimum.")
                    .matches(/(?=.*[0-9])/, "Password must contain a number.")
            })}
        >
            {props =>
            {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <LoginForm onSubmit={handleSubmit}>
                        <Input
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email && touched.email}
                        />
                        {errors.email && touched.email && (
                            <Error>{errors.email}</Error>
                        )}
                        <Input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.password && touched.password}
                        />
                        {errors.password && touched.password && (
                            <Error>{errors.password}</Error>
                        )}
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            Login
                        </SubmitButton>
                    </LoginForm>
                );
            }}
        </Formik>
    );
};

export default loginFormik;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    display: block;
    width: 60%;
    border-radius: 4px;
    padding: 15px 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    ${props => props.error && "border: 1px solid red;"}
    
    
`;

const Error = styled.div`
    font-size: 14px;
  color: red;
  margin-top: 4px;
`;

const SubmitButton = styled.button`

    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 60%;
    margin-top: 40px;
    padding: 15px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 6px;   
`;



