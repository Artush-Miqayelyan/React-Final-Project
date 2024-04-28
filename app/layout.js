import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
import Favicon from "../public/favicon.ico"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import './global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AutoShop",
  icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="body" id="body">    
            <Header/>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
