import Table from "../../components/Table/Table";

function Inventory() {
  const inventory = [
    {
      id: 1,
      name: "Laptop",
      sku: "LPT-12345",
      quantity: 50,
      location: "Aisle 3, Shelf B",
      category: "Electronics",
      supplier: "TechSupply Co.",
      lastUpdated: "2025-08-21",
    },
    {
      id: 2,
      name: "Monitor",
      sku: "MNT-67890",
      quantity: 30,
      location: "Aisle 4, Shelf A",
      category: "Electronics",
      supplier: "DisplayWorld",
      lastUpdated: "2025-08-19",
    },
    {
      id: 3,
      name: "Office Chair",
      sku: "CHR-54321",
      quantity: 20,
      location: "Aisle 1, Shelf C",
      category: "Furniture",
      supplier: "ComfortSeats",
      lastUpdated: "2025-08-18",
    },
    {
      id: 4,
      name: "Keyboard",
      sku: "KBD-98765",
      quantity: 100,
      location: "Aisle 2, Shelf D",
      category: "Electronics",
      supplier: "KeyMasters",
      lastUpdated: "2025-08-20",
    },
  ];

  return (
    <>
      <h1>Inventory</h1>
      <Table
        hasSearch={false}
        columns={["ID", "Name", "SKU"]}
        keys={["id", "name", "quantity"]}
        data={inventory}
      />
    </>
  );
}

export default Inventory;
