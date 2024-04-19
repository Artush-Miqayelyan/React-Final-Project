import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
import Favicon from "../public/favicon.ico"

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
