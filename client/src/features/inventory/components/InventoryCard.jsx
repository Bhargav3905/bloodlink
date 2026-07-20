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
        glow: 'bg-red-500/10',
      };
    }

    if (item.quantity <= 10) {
      return {
        label: 'Medium',
        variant: 'warning',
        icon: Activity,
        border: 'border-amber-300 dark:border-amber-700',
        glow: 'bg-amber-500/10',
      };
    }

    return {
      label: 'Healthy',
      variant: 'success',
      icon: CheckCircle2,
      border: 'border-emerald-300 dark:border-emerald-700',
      glow: 'bg-emerald-500/10',
    };
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  return (
    <Card
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        ${status.border}
        transition-all
        duration-300
        hover:-translate-y-1.5
        hover:shadow-2xl
      `}
    >
      {/* Decorative Glow */}

      <div
        className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${status.glow}`}
      />

      <CardContent className="relative flex flex-col items-center px-6 py-8">
        {/* Icon */}

        <div className="mb-5 rounded-2xl bg-red-100 p-5 transition-transform duration-300 group-hover:scale-105 dark:bg-red-950/30">
          <Droplets size={36} className="text-red-600" />
        </div>

        {/* Blood Group */}

        <h2 className="text-4xl font-extrabold tracking-tight text-red-600">{item.bloodGroup}</h2>

        {/* Quantity */}

        <p className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          {item.quantity}
        </p>

        <p className="mt-2 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
          Available Units
        </p>

        {/* Divider */}

        <div className="my-6 h-px w-full bg-slate-200 dark:bg-slate-800" />

        {/* Status */}

        <Badge variant={status.variant} className="flex items-center gap-2 px-4 py-1.5">
          <StatusIcon size={15} />
          {status.label}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default InventoryCard;
