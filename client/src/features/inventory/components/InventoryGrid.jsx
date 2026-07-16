import InventoryCard from './InventoryCard';

const InventoryGrid = ({ inventory, lowStock = [] }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {inventory.map((item) => (
        <InventoryCard
          key={item.bloodGroup}
          item={item}
          isLowStock={lowStock.some((blood) => blood.bloodGroup === item.bloodGroup)}
        />
      ))}
    </div>
  );
};

export default InventoryGrid;
