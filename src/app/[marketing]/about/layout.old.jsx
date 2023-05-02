import "../globals.css";

export const metadata = {
  title: "Marketing Layout",
  description: "Generated by create next app",
};

const MarketingLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <p className="ml-5">MarketingLayout</p>
        {children}
      </body>
    </html>
  );
};
export default MarketingLayout;