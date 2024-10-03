import Header from "@/app/pages/Header"
import Footer from "@/app/component/Footer";
import Nav from "@/app/component/Nav"

export default function Home() {
  return (
    <div className="w-full  flex flex-col">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

