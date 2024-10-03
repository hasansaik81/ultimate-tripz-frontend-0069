import FormikInput from "@/src/components/formik/FormikInput";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
const ChangePassword = () => {
  return (
    <div>
      <Formik
        initialValues={{ password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="">
          <div className="space-y-5 ">
            <FormikInput name="password" label="Password" />
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
