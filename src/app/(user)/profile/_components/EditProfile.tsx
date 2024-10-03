import FormikInput from "@/src/components/formik/FormikInput";
import CustomModal from "@/src/components/ui/CustomModal";
import { TUserDetails } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Form, Formik } from "formik";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
type TProps = {
  userData: TUserDetails;
};

const EditProfile = ({ userData }: TProps) => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const initialValues = {
    name: userData?.name || "",
    phone: userData?.phone || "",
    address: userData?.address || "",
  };
  return (
    <div>
      <button
        onClick={() => setIsEditProfileModalOpen(true)}
        className="absolute right-5 bottom-3 flex items-center gap-2 font-semibold"
      >
        <FaRegEdit />
        Edit profile
      </button>
      <CustomModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        footer={false}
        title="Edit profile"
      >
        <div className="">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => console.log(values)}
          >
            <Form className="">
              <div className="space-y-5 pb-5">
                <FormikInput name="name" label="Name" />
                <FormikInput name="address" label="Address" />
                <FormikInput name="phone" label="Phone" />
                <Button type="submit">Update</Button>
              </div>
            </Form>
          </Formik>
        </div>
      </CustomModal>
    </div>
  );
};

export default EditProfile;
