import { Spinner } from "@nextui-org/spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner size="lg" label="Success" color="success" labelColor="success" />
    </div>
  );
};

export default Loader;
