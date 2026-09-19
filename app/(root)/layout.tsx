
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";

export default function LayoutPage({ children }: LayoutProps<"/">) {
  return (
    <>
    <Toaster/>
    <StateContext>
        <Navbar />
        {children}
        <Footer />
    </StateContext>
    </>   
  );
}
