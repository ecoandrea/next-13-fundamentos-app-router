import "../globals.css";

export const metadata = {
  title: "Admin Layout",
  description: "Generated by create next app",
};

const AdminLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <p className="ml-5">AdminLayout</p>
        {children}
      </body>
    </html>
  );
};
export default AdminLayout;