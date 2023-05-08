import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

const OriginalForm = () =>
{
    const { register, handleSubmit, errors, getValues } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="card shadow">
            <div className="card-header">Create New Account</div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className={classNames("form-control", {
                                "is-invalid": errors.email
                            })}
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            ref={register({
                                required: "this field is required.",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "please enter a valid e-mail address."
                                }
                            })}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className={classNames("form-control", {
                                "is-invalid": errors.password
                            })}
                            placeholder="Enter Your Password"
                            name="password"
                            ref={register({
                                required: "this field required."
                            })}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                    </div>
                    <div className={classNames("form-group")}>
                        <input
                            type="password"
                            className={classNames("form-control", {
                                "is-invalid": errors.confirm_password
                            })}
                            placeholder="Confirm Your Password"
                            name="confirm_password"
                            ref={register({
                                required: "this field required.",
                                validate: (value) =>
                                    value === getValues("password") || "password doesn't match."
                            })}
                        />
                        {errors.confirm_password && (
                            <div className="invalid-feedback">
                                {errors.confirm_password.message}
                            </div>
                        )}
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OriginalForm;
