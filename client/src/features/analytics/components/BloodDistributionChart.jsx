import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Droplets } from 'lucide-react';

const COLORS = [
  '#ef4444',
  '#f97316',
  '#f59e0b',
  '#84cc16',
  '#06b6d4',
  '#3b82f6',
  '#8b5cf6',
  '#ec4899',
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) {
    return null;
  }

  const { bloodGroup, quantity } = payload[0].payload;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <p className="font-semibold text-slate-900 dark:text-white">{bloodGroup}</p>

      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Available Units: <span className="font-semibold">{quantity}</span>
      </p>
    </div>
  );
};

const BloodDistributionChart = ({ data = [] }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Blood Distribution
          </h2>

          <p className="mt-1 text-sm text-slate-500">Current blood inventory by group.</p>
        </div>

        <Droplets className="h-7 w-7 text-red-600" />
      </div>

      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700">
          <div className="text-center">
            <Droplets className="mx-auto mb-3 h-10 w-10 text-slate-400" />

            <h3 className="font-semibold text-slate-700 dark:text-slate-300">No Inventory Data</h3>

            <p className="mt-1 text-sm text-slate-500">Blood distribution will appear here.</p>
          </div>
        </div>
      ) : (
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="quantity"
                nameKey="bloodGroup"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={65}
                paddingAngle={3}
                animationDuration={900}
                label={({ bloodGroup }) => bloodGroup}
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip content={<CustomTooltip />} />

              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default BloodDistributionChart;
