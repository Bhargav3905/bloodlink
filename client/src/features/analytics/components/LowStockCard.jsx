import { AlertTriangle } from 'lucide-react';

const LowStockCard = ({ bloodGroups = [] }) => {
  return (
    <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm dark:border-red-900 dark:bg-slate-900">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/30">
          <AlertTriangle className="h-5 w-5 text-red-600" />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Low Stock Alert</h2>

          <p className="text-sm text-slate-500">Blood groups requiring attention.</p>
        </div>
      </div>

      {bloodGroups.length === 0 ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-900 dark:bg-emerald-900/20">
          <p className="font-semibold text-emerald-700 dark:text-emerald-400">
            🎉 All blood groups have sufficient inventory.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {bloodGroups.map((group) => (
            <div
              key={group._id}
              className="flex items-center justify-between rounded-xl border border-red-100 bg-red-50 p-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md dark:border-red-900 dark:bg-red-950/20"
            >
              <div>
                <p className="text-lg font-bold text-red-600">{group.bloodGroup}</p>

                <p className="text-sm text-slate-500">Available Units</p>
              </div>

              <div className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white shadow">
                {group.quantity}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LowStockCard;
