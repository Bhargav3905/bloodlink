import { AlertTriangle } from 'lucide-react';

import Modal from '../../ui/modal/Modal';
import Button from '../../ui/button/Button';

const ConfirmationDialog = ({ open, title, description, loading = false, onConfirm, onCancel }) => {
  return (
    <Modal open={open} title={title} onClose={loading ? undefined : onCancel}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
          <AlertTriangle size={34} className="text-red-600" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>

        <p className="mt-3 max-w-sm leading-7 text-slate-500 dark:text-slate-400">{description}</p>

        <div className="mt-8 flex w-full justify-center gap-4">
          <Button variant="outline" onClick={onCancel} disabled={loading} className="min-w-32">
            Cancel
          </Button>

          <Button variant="danger" loading={loading} onClick={onConfirm} className="min-w-32">
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
