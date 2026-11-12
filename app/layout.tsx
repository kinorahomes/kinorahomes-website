import type {Metadata} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
export const metadata:Metadata={title:{default:"Kinora Homes | Family & New Beginnings",template:"%s | Kinora Homes"},description:"Kinora Homes offers a supportive, family-style staffed residential environment for children and youth in Ontario."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/></body></html>}
