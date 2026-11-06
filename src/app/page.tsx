import {
  Wallet,
  ShoppingBag,
  Boxes,
  TrendingUp,
  Package,
  Calculator,
  Factory,
  ArrowUpRight,
} from "lucide-react";

const metrics = [
  {
    title: "Total Revenue",
    value: "—",
    note: "Revenue recorded",
    Icon: Wallet,
  },
  {
    title: "Total Orders",
    value: "—",
    note: "Orders received",
    Icon: ShoppingBag,
  },
  {
    title: "Inventory Value",
    value: "—",
    note: "Current stock value",
    Icon: Boxes,
  },
  {
    title: "Outstanding Payments",
    value: "—",
    note: "Payments to collect",
    Icon: TrendingUp,
  },
];

const setupItems = [
  {
    title: "Products & Services",
    description: "Set up the products or services your business offers.",
    Icon: Package,
  },
  {
    title: "Smart Price Calculator",
    description: "Understand your costs and calculate selling prices.",
    Icon: Calculator,
  },
  {
    title: "Inventory",
    description: "Start organising your materials and stock.",
    Icon: Boxes,
  },
  {
    title: "Production",
    description: "Manage your production activities and batches.",
    Icon: Factory,
  },
];

const card =
  "rounded-2xl border border-[#E8E3F1] bg-white p-5 shadow-sm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7FC] p-4 md:p-8">
      {/* Page heading */}
      <header className="mb-7">
        <p className="text-sm font-medium text-[#84769F]">
          Aruma BOA / Workspace
        </p>

        <h1 className="mt-2 text-3xl font-bold text-[#34264F] md:text-4xl">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Your business operations, all in one place.
        </p>
      </header>

      {/* Overview cards */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map(({ title, value, note, Icon }) => (
          <div key={title} className={card}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#CFC1F4]/60">
                <Icon size={19} className="text-[#65509A]" />
              </span>

              <p className="text-sm font-medium text-[#34264F]">
                {title}
              </p>
            </div>

            <p className="mt-4 text-3xl font-bold text-[#34264F]">
              {value}
            </p>

            <p className="mt-1 text-sm text-gray-400">
              {note}
            </p>
          </div>
        ))}
      </section>

      {/* Main dashboard content */}
      <section className="mt-6 grid gap-5 lg:grid-cols-3">

        {/* Business activity */}
        <div className={`${card} lg:col-span-2`}>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#34264F]">
              Business Activity
            </h2>

            <ArrowUpRight size={20} className="text-[#84769F]" />
          </div>

          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#CFC1F4]/40">
              <Package size={25} className="text-[#65509A]" />
            </span>

            <h3 className="mt-4 font-semibold text-[#34264F]">
              No activity recorded yet
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
              Your purchases, production, orders and other business
              activities will appear here as you begin using Aruma BOA.
            </p>
          </div>
        </div>

        {/* Getting started */}
        <div className={card}>
          <h2 className="text-lg font-semibold text-[#34264F]">
            Getting Started
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Set up the essentials of your business.
          </p>

          <div className="mt-5 space-y-5">
            {setupItems.map(({ title, description, Icon }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#CFC1F4]/40">
                  <Icon size={19} className="text-[#65509A]" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-[#34264F]">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-[#E8E3F1] py-5 text-center text-xs text-gray-400">
        © 2026 Aruma BOA. Your business, in control.
      </footer>
    </main>
  );
}