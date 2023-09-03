import {
  Gem,
  ShoppingBag,
  LayoutDashboard,
  LineChart,
  Banknote,
} from 'lucide-react';

interface DashboardItem {
  icon:
    | React.FC<any>
    | string
    | React.FunctionComponent<{}>
    | React.ComponentClass<{}, any>;
  label: string;
  href: string;
}

export const ngoDashboard: DashboardItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Banknote, label: 'Transaction', href: '/transaction' },
  { icon: LineChart, label: 'Analytics', href: '/analytics' },
];

export const investorDashboard: DashboardItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/investorDashboard' },
  { icon: ShoppingBag, label: 'Marketplace', href: '/investorsMarketplace' },
  { icon: Banknote, label: 'Transaction', href: '/transaction' },
  { icon: Gem, label: 'Rewards', href: '/rewards' },
];
