import { Sour_Gummy } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer.js";
import { CartProvider } from "@/components/CartContext";

const gummy = Sour_Gummy({
  variable: "--font-gummy",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bakesbone Bakery",
  description: "baking site app by nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gummy.variable} antialiased`}>
        <CartProvider>
          <NavBar/>
            {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}
