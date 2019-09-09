import React, { useState, useEffect, useRef } from "react";
import useForm from "react-hook-form";
import classNames from "classnames";
import EmailInput from "../components/Login/EmailInput";

export default () => {
  // const whyDidYouRender = true;
  const { register, triggerValidation, errors, getValues } = useForm({
    mode: "onChange"
  });
  const [email, setEmail] = useState("");
  const emailRef = useRef();

  const onSubmit = async () => {
    const response = emailRef.current.checkValidate();
    console.log('response', email, response);
    // const valid = await triggerValidation();
    // console.log(valid);
  };
  const passwordCompare = () => {
    const { password, repeatpassword } = getValues();
    return password === repeatpassword;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form
                className="form-signin"
                onSubmit={e => {
                  e.preventDefault();
                  onSubmit();
                }}
              >
                <EmailInput
                  email={email}
                  onSetEmail={setEmail}
                  ref={emailRef}
                />

                <div
                  className={classNames("form-label-group", {
                    "text-danger": errors.password
                  })}
                >
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    className={classNames("form-control", {
                      "is-invalid": errors.password
                    })}
                    name="password"
                    placeholder="Password"
                    ref={register({ required: "Password is required" })}
                  />
                </div>
                {errors.password && errors.password.message}

                <div
                  className={classNames("form-label-group", {
                    "text-danger": errors.repeatpassword
                  })}
                >
                  <label htmlFor="inputPassword">Confirm Password</label>
                  <input
                    type="password"
                    className={classNames("form-control", {
                      "is-invalid": errors.repeatpassword
                    })}
                    name="repeatpassword"
                    placeholder="Password"
                    ref={register({
                      required: "Repeat Password is required",
                      validate: passwordCompare
                    })}
                  />
                </div>
                {errors.repeatpassword && errors.repeatpassword.message}

                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                <input
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  value="login"
                />
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
