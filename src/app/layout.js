
import "./global.css";
import Head from "next/head";
import { MenuProvider } from "@/contexts/MenuContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const metadata = {
  title: "Muskan Indien",
  description: "La meilleure cuisine indienne",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-black/80`}
      >
        <MenuProvider>
          {children}

          <ToastContainer />
        </MenuProvider>
      </body>
    </html>
  );
}
