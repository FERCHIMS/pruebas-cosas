
import LinkHover from "@/components/link-hover/LinkHover";
import "./globals.css";
import Header from "@/components/header/Header";
import LenisScroll from "@/components/lenis-scroll/LenisScroll";
import ThemeProvider from "./context/ThemeContext";
/* import Header from "@/components/header/Header"; */



/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {/* <ThemeProvider> */}
          <LenisScroll>
            <Header />
            {children}
          </LenisScroll>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
