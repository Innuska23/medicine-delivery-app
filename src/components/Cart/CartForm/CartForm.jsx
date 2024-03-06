import { useForm } from "react-hook-form";
import s from "./CartForm.module.css";
import PropTypes from "prop-types";

const CartForm = ({ onSubmit, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <div className={s.formContainer}>
      <form onSubmit={handleSubmit(submitForm)} id={id}>
        <div>
          <label htmlFor="name" className={s.formLabel}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className={s.formInput}
            {...register("name", { required: "*This field is required" })}
          />
          {errors.name && <p className={s.formError}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={s.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={s.formInput}
            {...register("email", {
              required: "*This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className={s.formError}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={s.formLabel}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className={s.formInput}
            {...register("phone", {
              required: "*This field is required",
              pattern: {
                value: /^[0-9]{10}$/i,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className={s.formError}>{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="address" className={s.formLabel}>
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter your address"
            className={s.formInput}
            {...register("address", { required: "*This field is required" })}
          />
          {errors.address && (
            <p className={s.formError}>{errors.address.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

CartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default CartForm;
