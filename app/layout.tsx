import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

import prisma from "@/lib/prismadb"

import "./globals.css";
import ModalProvider from "@/components/providers/modal-provider";
import Navbar from "@/components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blocks",
  description: "Find a place to call your home!",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const booleanUser = await currentUser();
  const categories = await prisma.category.findMany()
  let user;
  if (booleanUser) {
    user = true;
  } else {
    user = false;
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/images/logo.jpg" type="image/x-icon" />
        </head>
        <body className={inter.className}>
          <Navbar user={user} />
          <ModalProvider categories={categories} />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
