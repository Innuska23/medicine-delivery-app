// // import { useForm } from "react-hook-form";
// // import s from "./CartForm.module.css";
// // import PropTypes from "prop-types";

// // const CartForm = ({ handleSubmit }) => {
// //   const { register, handleSubmit: submitForm } = useForm();

// //   const onSubmit = (data) => {
// //     handleSubmit();
// //     console.log(data);
// //   };

// //   return (
// //     <div className={s.formContainer}>
// //       <form onSubmit={submitForm(onSubmit)}>
// //         <div>
// //           <label htmlFor="name" className={s.label}>
// //             Name
// //           </label>
// //           <input
// //             id="name"
// //             type="text"
// //             placeholder="Enter your name"
// //             className={s.input}
// //             {...register("name")}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="email" className={s.label}>
// //             Email
// //           </label>
// //           <input
// //             id="email"
// //             type="email"
// //             placeholder="Enter your email"
// //             className={s.input}
// //             {...register("email")}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="phone" className={s.label}>
// //             Phone
// //           </label>
// //           <input
// //             id="phone"
// //             type="tel"
// //             placeholder="Enter your phone number"
// //             className={s.input}
// //             {...register("phone")}
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="address" className={s.label}>
// //             Address
// //           </label>
// //           <input
// //             id="address"
// //             type="text"
// //             placeholder="Enter your address"
// //             className={s.input}
// //             {...register("address")}
// //           />
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // CartForm.propTypes = {
// //   handleSubmit: PropTypes.func.isRequired,
// // };

// // export default CartForm;

// import { useForm } from "react-hook-form";
// import s from "./CartForm.module.css";
// import PropTypes from "prop-types";

// const CartForm = ({ onSubmit }) => {
//   const {
//     register,
//     handleSubmit,
//     trigger,
//     formState: { errors },
//   } = useForm();

//   const submitForm = async (data) => {
//     const isValid = await trigger();

//     if (isValid) {
//       onSubmit(data);
//     }
//   };

//   return (
//     <div className={s.formContainer}>
//       <form onSubmit={handleSubmit(submitForm)}>
//         <div>
//           <label htmlFor="name" className={s.label}>
//             Name
//           </label>
//           <input
//             id="name"
//             type="text"
//             placeholder="Enter your name"
//             className={s.input}
//             {...register("name", { required: true })}
//           />
//           {errors.name && <p className={s.error}>Треба заповнити поле</p>}
//         </div>
//         <div>
//           <label htmlFor="email" className={s.label}>
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Enter your email"
//             className={s.input}
//             {...register("email", { required: true })}
//           />
//         </div>
//         <div>
//           <label htmlFor="phone" className={s.label}>
//             Phone
//           </label>
//           <input
//             id="phone"
//             type="tel"
//             placeholder="Enter your phone number"
//             className={s.input}
//             {...register("phone", { required: true })}
//           />
//         </div>
//         <div>
//           <label htmlFor="address" className={s.label}>
//             Address
//           </label>
//           <input
//             id="address"
//             type="text"
//             placeholder="Enter your address"
//             className={s.input}
//             {...register("address", { required: true })}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// CartForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default CartForm;

import { useForm } from "react-hook-form";
import s from "./CartForm.module.css";
import PropTypes from "prop-types";

const CartForm = ({ onSubmit }) => {
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
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <label htmlFor="name" className={s.label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className={s.input}
            {...register("name", { required: "This field is required" })}
          />
          {errors.name && <p className={s.error}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={s.input}
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={s.label}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className={s.input}
            {...register("phone", { required: "This field is required" })}
          />
          {errors.phone && <p className={s.error}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="address" className={s.label}>
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter your address"
            className={s.input}
            {...register("address", { required: "This field is required" })}
          />
          {errors.address && (
            <p className={s.error}>{errors.address.message}</p>
          )}
        </div>
      </form>
    </div>
  );
};

CartForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CartForm;
