import UserInformation from "./_components/UserInformation";

type TProps = {
  params: any;
};

const DynamicProfile = ({ params }: TProps) => {
  const userId = params?.userInfo;

  return (
    <>
      <UserInformation userId={userId} />
    </>
  );
};

export default DynamicProfile;
