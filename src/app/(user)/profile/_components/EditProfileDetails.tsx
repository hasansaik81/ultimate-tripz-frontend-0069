import FormikInput from "@/src/components/formik/FormikInput";
import { TUserDetails } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
type TProps = {
  userData: TUserDetails;
};
const EditProfileDetails = ({ userData }: TProps) => {
  const initialValues = {
    name: userData?.name || "",
    phone: userData?.phone || "",
    address: userData?.address || "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="">
        <div className="space-y-5">
          <FormikInput name="name" label="Name" />
          <FormikInput name="address" label="Address" />
          <FormikInput name="phone" label="Phone" />
          <Button type="submit">Update</Button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditProfileDetails;
