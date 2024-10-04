import { ReactNode } from "react";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark:bg-dark min-h-screen">
      <p>Admin</p>
      {children}
    </div>
  );
};

export default layout;
