import { Jost } from "next/font/google";
import "./globals.css";


const jost = Jost({ subsets: ["latin"]});

export const metadata = {
  title: "Caffe Shop",
  description: "Turkish Coffe Shop",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
