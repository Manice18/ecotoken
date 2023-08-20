import { Gem, ShoppingBag, LayoutDashboard, LineChart, Banknote } from 'lucide-react';


export const ngoDashboard = [
    { icon: <LayoutDashboard />, label: "Dashboard", href: "/dashboard" },
    {
        icon: <Banknote />,
        label: "Transaction",
        href: "/transaction",
    },
    { icon: <LineChart />, label: "Analytics", href: "/analytics" },
]

export const investorDashboard = [
    { icon: <LayoutDashboard />, label: "Dashboard", href: "/investors" },
    {
        icon: <ShoppingBag />,
        label: "Marketplace",
        href: "/investorsMarketplace",
    },
    {
        icon: <Banknote />,
        label: "Transaction",
        href: "/transaction",
    },
    { icon: <Gem />, label: "Rewards", href: "/rewards" },
]