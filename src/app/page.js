import Header from "@/app/component/homecomponent/Header";
import Footer from "@/app/component/com/Footer";
import Nav from "@/app/component/com/Nav";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

