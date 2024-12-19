import type { Metadata } from "next";
import "./globals.css"
import NavBar from "@/components/nav"
import Footer from "@/components/footer"
import LoggedInProvider from "@/providers/loggedIn";

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
          <NavBar />
          {children}
          <Footer />
        </body>
      </LoggedInProvider>
    </html>
  );
}
