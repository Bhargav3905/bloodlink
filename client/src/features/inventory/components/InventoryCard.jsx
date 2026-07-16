import { Droplets, AlertTriangle, CheckCircle2, Activity } from 'lucide-react';

import Badge from '../../../components/ui/badge/Badge';

import Card from '../../../components/ui/card/Card';
import CardContent from '../../../components/ui/card/CardContent';

const InventoryCard = ({ item, isLowStock }) => {
  const getStatus = () => {
    if (isLowStock) {
      return {
        label: 'Low Stock',
        variant: 'danger',
        icon: AlertTriangle,
        border: 'border-red-300 dark:border-red-700',
      };
    }

    if (item.quantity <= 10) {
      return {
        label: 'Medium',
        variant: 'warning',
        icon: Activity,
        border: 'border-amber-300 dark:border-amber-700',
      };
    }

    return {
      label: 'Healthy',
      variant: 'success',
      icon: CheckCircle2,
      border: 'border-emerald-300 dark:border-emerald-700',
    };
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  return (
    <Card
      className={`transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${status.border}`}
    >
      <CardContent className="flex flex-col items-center py-8">
        <div className="mb-4 rounded-full bg-red-100 p-4 dark:bg-red-950/30">
          <Droplets
            size={34}
            className="text-red-600"
          />
        </div>

        <h2 className="text-3xl font-bold text-red-600">
          {item.bloodGroup}
        </h2>

        <p className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
          {item.quantity}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Available Units
        </p>

        <Badge
          variant={status.variant}
          className="mt-5 flex items-center gap-2"
        >
          <StatusIcon size={14} />
          {status.label}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;