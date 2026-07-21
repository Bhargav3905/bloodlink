import { Package, Activity, AlertTriangle } from 'lucide-react';

import Card from '../../../components/ui/card/Card';
import CardContent from '../../../components/ui/card/CardContent';

const InventorySummary = ({ totalUnits, totalBloodGroups, lowStockCount }) => {
  const summary = [
    {
      title: 'Total Blood Units',
      value: totalUnits,
      icon: Package,
      color: 'text-red-600',
      bg: 'bg-red-100 dark:bg-red-950/30',
    },
    {
      title: 'Blood Groups',
      value: totalBloodGroups,
      icon: Activity,
      color: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-950/30',
    },
    {
      title: 'Low Stock',
      value: lowStockCount,
      icon: AlertTriangle,
      color: 'text-amber-600',
      bg: 'bg-amber-100 dark:bg-amber-950/30',
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {summary.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                  {item.value}
                </h2>
              </div>

              <div className={`rounded-full p-4 ${item.bg}`}>
                <Icon className={item.color} size={28} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default InventorySummary;
