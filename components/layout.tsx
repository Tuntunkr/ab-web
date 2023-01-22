import React, { ReactNode } from "react";
import NFT from "@/pages/nft";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
  // any props that come into the component
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useRouter();

  const menuItems = [
    {
      href: "/project",
      title: "All",
    },
    {
      href: "/nft",
      title: "NFT",
    },
    {
      href: "/octopus",
      title: "Octopus",
    },
    {
      href: "/infrastructure",
      title: "Infrastructure",
    },
    {
      href: "/wallets",
      title: "Wallets",
    },
    {
      href: "/validators",
      title: "Validators",
    },
  ];
  // console.log(pathname);
  return (
    <div className="flex  min-h-screen flex-col">
      <div className="flex   flex-col md:flex-row">
        {menuItems.map((item) => item.href).includes(pathname) && (
          <aside className="w-full  border-[#98A2B3] md:w-60">
            <nav>
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className="m-2" key={title}>
                    <Link href={href} className="text-[#667085] ">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
