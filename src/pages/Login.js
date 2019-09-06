import React from "react";
import useForm from "react-hook-form";
// import { useSelector, useDispatch } from "react-redux";
// import { addProductAsync } from "../actions/cartActions";
// import { toDecimal } from "../utils/common";



export default () => {
    // const whyDidYouRender = true;
  const { register, handleSubmit, errors } = useForm();
  console.log("Asdfasdfasd");
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  const onSubmit = async data => {
    console.log(data);
    // const joined = cart.concat(product);
    // await sleep(10);
    // setCart(joined);
    // localStorage.setItem("cart", JSON.stringify(cart));
  };
  console.log(errors);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin" onSubmit={
                //   e.preventDefault();
                  handleSubmit(onSubmit)
                  }>
                <div className="form-label-group">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    className="form-control"
                    placeholder="Email address"
                    name="email"
                    ref={register({
                      required: 'error message',
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}
                    autoFocus
                  />
                </div>

                {errors.email && errors.email.message}
                <div className="form-label-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    ref={register({ required: true })}
                  />
                </div>

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
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <hr className="my-4" />
                {/* <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
              <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
