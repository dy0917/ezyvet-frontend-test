import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from "react";
import useForm from "react-hook-form";
import classNames from "classnames";

export default forwardRef(({ email, onSetEmail }, ref) => {
    const { register, errors, setError, getValues } = useForm({
        email:email
      });

  useImperativeHandle(ref, () => ({
    checkValidate() {
        const email = getValues().email;
        return validate(email)
    }
  }));

  const validate = (value)=>{
     const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
     if(re.test(value)){
        onSetEmail(value);
        return true;
     }else{
        onSetEmail(undefined);
        setError("email", "required", "Email is required.")
        return false;
     }
  }

  return (
    <div>
      <div
        className={classNames("form-label-group", {
          "text-danger": errors.email
        })}
      >
        <label htmlFor="inputEmail">Email address</label>
        <input
          className={classNames("form-control", {
            "is-invalid": errors.email
          })}
          placeholder="Email address"
          name="email"
          onChange={e => {
            const value = e.target.value
            validate(value)
          }}
          ref={register()}
          autoFocus
        />
      </div>
      <div className={classNames("form-label-group", { "text-danger": errors.email })}>
        { errors.email && errors.email.message}
      </div>
    </div>
  );
});
