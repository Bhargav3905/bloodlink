import Modal from '../../ui/modal/Modal';
import Button from '../../ui/button/Button';

const ConfirmationDialog = ({ open, title, description, loading = false, onConfirm, onCancel }) => {
  return (
    <Modal open={open} title={title} onClose={onCancel}>
      <p className="mb-6 text-slate-600 dark:text-slate-300">{description}</p>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>

        <Button variant="danger" loading={loading} onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmationDialog;
