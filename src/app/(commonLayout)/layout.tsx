import CustomNavbar from "@/src/components/shared/CustomNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <CustomNavbar />
      {children}
    </div>
  );
}
