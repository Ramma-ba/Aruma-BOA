"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Calculator,
  Boxes,
  Factory,
  Truck,
  ShoppingBag,
  Wallet,
  ArrowLeftRight,
  BarChart3,
  Sparkles,
  Workflow,
  Menu,
  X,
} from "lucide-react";
import { AuraStar } from "./AuraStar";

const nav = [
  { href: "/", label: "Dashboard", Icon: LayoutDashboard },
  { href: "/products", label: "Products & Services", Icon: Package },
  { href: "/calculator", label: "Smart Price Calculator", Icon: Calculator },
  { href: "/inventory", label: "Inventory", Icon: Boxes },
  { href: "/production", label: "Production", Icon: Factory },
  { href: "/purchases", label: "Purchases & Suppliers", Icon: Truck },
  { href: "/orders", label: "Orders", Icon: ShoppingBag },
  { href: "/finance", label: "Finance", Icon: Wallet },
  { href: "/debts", label: "Debts & Payments", Icon: ArrowLeftRight },
  { href: "/analytics", label: "Analytics", Icon: BarChart3 },
  { href: "/ai", label: "Aruma AI", Icon: Sparkles },
  { href: "/automations", label: "Automations", Icon: Workflow },
];

function Links({ onNav }: { onNav?: () => void }) {
  const path = usePathname();

  return (
    <nav className="mt-6 space-y-1">
      {nav.map(({ href, label, Icon }) => {
        const active =
          href === "/"
            ? path === "/"
            : path === href || path.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            onClick={onNav}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium text-white ${
              active ? "bg-[#65509A]" : "hover:bg-white/10"
            }`}
          >
            <Icon size={20} className="text-[#CFC1F4]" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

function Brand() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <AuraStar size={40} />
        <span className="text-2xl font-bold text-white">
          Aruma{" "}
          <span className="text-sm font-light tracking-widest text-[#CFC1F4]">
            BOA
          </span>
        </span>
      </div>

      <p className="mt-3 text-sm text-[#CFC1F4]">
        Business Operations
      </p>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col justify-between rounded-r-3xl bg-[#34264F] p-5 md:flex">
        <div>
          <Brand />
          <Links />
        </div>

        <div className="rounded-xl bg-white/10 p-3 text-white">
          <p className="text-sm font-medium">ARUMA BOA</p>
          <p className="mt-1 text-xs text-[#CFC1F4]">
            Your business, in control.
          </p>
        </div>
      </aside>

      <nav className="fixed inset-x-0 bottom-0 z-30 flex justify-around border-t border-white/10 bg-[#34264F] py-2 md:hidden">
        {nav.slice(0, 4).map(({ href, label, Icon }) => {
          const active =
            href === "/"
              ? path === "/"
              : path === href || path.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center px-2 text-xs ${
                active ? "text-white" : "text-[#CFC1F4]"
              }`}
            >
              <Icon size={22} />
              {label === "Products & Services" ? "Products" : label}
            </Link>
          );
        })}

        <button
          onClick={() => setOpen(true)}
          className="flex flex-col items-center px-2 text-xs text-[#CFC1F4]"
        >
          <Menu size={22} />
          More
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-[#34264F] p-5 md:hidden">
          <div>
            <button
              onClick={() => setOpen(false)}
              className="float-right text-white"
              aria-label="Close menu"
            >
              <X />
            </button>

            <Brand />
            <Links onNav={() => setOpen(false)} />
          </div>

          <div className="rounded-xl bg-white/10 p-3 text-white">
            <p className="text-sm font-medium">ARUMA BOA</p>
            <p className="mt-1 text-xs text-[#CFC1F4]">
              Your business, in control.
            </p>
          </div>
        </div>
      )}
    </>
  );
}