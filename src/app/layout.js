import "./globals.css";
import "../../styles.css";
import Navbar from "@/components/LandingPage/Navbar";
import Footer from "@/components/LandingPage/Footer";

export const metadata = {
  title: "Arc Node – Advanced Multisig Security",
  description: "Arc Node provides cutting-edge, secure, and reliable multisig solutions for digital asset management. Future-proof your business with enhanced control and protection against traditional limitations and bottlenecks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: -1,
          }}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
