import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

const COLORS = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#6b7280'];

const RequestStatisticsChart = ({ data = {} }) => {
  const chartData = [
    {
      name: 'Pending',
      value: data.pending || 0,
    },
    {
      name: 'Payment',
      value: data.payment_pending || 0,
    },
    {
      name: 'Completed',
      value: data.completed || 0,
    },
    {
      name: 'Rejected',
      value: data.rejected || 0,
    },
    {
      name: 'Expired',
      value: data.expired || 0,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Request Statistics</h2>

        <p className="mt-1 text-sm text-slate-500">Overview of all blood request statuses.</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" opacity={0.2} />

            <XAxis dataKey="name" tickLine={false} axisLine={false} />

            <YAxis allowDecimals={false} tickLine={false} axisLine={false} />

            <Tooltip />

            <Bar dataKey="value" radius={[10, 10, 0, 0]} animationDuration={900}>
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RequestStatisticsChart;
