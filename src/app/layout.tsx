import type { Metadata } from "next";

import '@/styles/global.scss'
import ModalContextProvider from "@/context/modal/ModalContext";
import UserContextProvider from "@/context/user/UserContext";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Recycling Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <Navbar />
          <ModalContextProvider>
            {children}
          </ModalContextProvider>
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
