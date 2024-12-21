import type { Metadata } from "next";
import "./globals.css"
import NavBar from "@/components/nav"
import Footer from "@/components/footer"
import LoggedInProvider from "@/providers/loggedIn";
import { ToastContainer, Bounce} from "react-toastify"

export const metadata: Metadata = {
  title: "Avalie seu professor",
  description: "Um site para os alunos avaliarem os professores da UnB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <LoggedInProvider>
        <body className="flex flex-col h-screen">
          <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" transition={Bounce} />
          <NavBar />
          {children}
          <Footer />
        </body>
      </LoggedInProvider>
    </html>
  );
}
