// import Menu from "@/components/Menu";
import Menu from "../../components/Menu"
import Navbar from "../../components/Navbar";
import Logo from "../../../public/logo.png"
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div className=" flex min-h-screen">
          {/* {children} */}
          {/* Left */}
          <div className="w-[14%] md:w-1/12 lg:w-1/6 transition-all">
            <Link href="" className="flex items-end justify-center lg:justify-start gap-2 py-4 lg:px-4">
              <img src={Logo.src} alt="" width={32} height={32} />
              <span className="hidden lg:block font-bold text-gray-800">SchoolWeb</span>
            </Link>
            <Menu/>
          </div>
          {/* Right */}
          <div className="w-[86%] md:w-11/12 lg:w-5/6 bg-[#ececec] transition-all border-l">
            <Navbar/>
            {children}
          </div>
        </div>
    );
  }
  
  // #f7f8fa