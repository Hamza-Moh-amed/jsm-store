
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StateContext } from "@/context/StateContext";

export default function LayoutPage({ children }: LayoutProps<"/">) {
  return (
    <>
    <StateContext>
        <Navbar />
        {children}
        <Footer />
    </StateContext>
    </>   
  );
}
