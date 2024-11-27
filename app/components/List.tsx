export default function List() {
  const menuItems = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
      <h3 className="text-[16px] font-semibold text-gray-300">
        This is a Title
      </h3>
      <ul className="px-2 py-1">
        {menuItems.map((menuItem) => (
          <li key={menuItem}>{menuItem}</li>
        ))}
      </ul>
    </div>
  );
}
