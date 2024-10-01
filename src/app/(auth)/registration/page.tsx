"use client";
import FormikInput from "@/src/components/formik/FormikInput";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";

const page = () => {
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" bg-slate-950 p-8 m-5 rounded-lg shadow-lg w-full max-w-md space-y-6">
        {/* Registration Header */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Create your account
        </h1>

        {/* Formik Form */}
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form className="space-y-5">
              {/* Name */}
              <FormikInput name="name" label="Name" />

              {/* Email */}
              <FormikInput name="email" label="Email" type="email" />

              {/* Password */}
              <FormikInput name="password" label="Password" type="password" />

              {/* Phone */}
              <FormikInput name="phone" label="Phone" type="tel" />

              {/* Address */}
              <FormikInput name="address" label="Address" />

              {/* File Input for Avatar */}
              <div className="space-y-1">
                <label
                  htmlFor="avatar"
                  className="block font-medium text-gray-700"
                >
                  Profile Picture
                </label>
                <input
                  id="avatar"
                  type="file"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  onChange={(e) => setFieldValue("avatar", e.target.files[0])}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Sign up
              </Button>
            </Form>
          )}
        </Formik>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
