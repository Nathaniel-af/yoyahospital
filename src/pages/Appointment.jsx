import React, { useContext, useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import axios from "axios";
//import { Context } from "../components/Context";
export default function Appointment() {
  const navigate = useNavigate();
  //const { doctors } = Context();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const userSchema = yup.object().shape({
    name: yup.string().required("Full Name is Required"),
    email: yup.string().email("Not a valid email Address , must include @"),
    date: yup.string().required("Choose appointment Date"),
    physician: yup.string().required("Please choose a doctor"),
    phone: yup
      .string()
      .required("Phone number is Required")
      .max(10)
      .matches(phoneRegExp, "Phone number is not valid"),
  });
  const asd = JSON.parse(localStorage.getItem("physician"));

  return (
    <>
      <Nav></Nav>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              date: "",
              physician: "",
              message: "",
            }}
            validationSchema={userSchema}
            onSubmit={(values) => {
              axios
                .post(
                  `${import.meta.env.VITE_API}appointment/`,
                  {
                    name: values.name,
                    email: values.email,
                    phoneNumber: values.phone,
                    message: values.message,
                    physician: values.physician,
                    appointmentDate: values.date,
                  },
                  { headers: { "Content-Type": "application/json" } }
                )
                .then((res) => {
                  console.log(res);
                  console.log(values);

                  navigate("/");
                  toast.success("Appointment Scheduled Succesfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })

                .catch((err) => console.error(err));
            }}
          >
            {(formik) => (
              <Form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Full Name
                  </label>
                  <div className="text-red-600">
                    <ErrorMessage name="name" />
                  </div>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Phone Number
                  </label>
                  <div className="text-red-600">
                    <ErrorMessage name="phone" />
                  </div>
                  <Field
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email Address
                  </label>
                  <div className="text-red-600">
                    <ErrorMessage name="email" />
                  </div>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="date"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Date
                      </label>
                      <div className="text-red-600">
                        <ErrorMessage name="date" />
                      </div>
                      <Field
                        type="date"
                        name="date"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="physician"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Choose Physician
                      </label>
                      <div className="text-red-600">
                        <ErrorMessage name="physician" />
                      </div>

                      <Field
                        as="select"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        name="physician"
                        id="physician"
                        placeholder="Doctor"
                      >
                        <option value="">Doctors</option>
                        {asd.map((data) => (
                          <option value={data.id}>{data.name} </option>
                        ))}
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="Message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Message
                  </label>
                  <div className="text-red-600">
                    <ErrorMessage name="message" />
                  </div>
                  <Field
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                    name="message"
                    id="message"
                  ></Field>
                </div>

                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form w-full rounded-md bg-[#1990A2] hover:bg-teal-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Book Appointment
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
