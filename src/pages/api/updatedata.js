import Tablesave from "../../models/tablesave";
import dbConnect from "../../app/lib/dbconnect";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { action, tableId, itemId, itemData, tableNumber } = req.body;

  try {
    let table;

    switch (action) {
      // ✅ 1. Get latest table by tableNumber
      case "get": {
        if (!tableNumber) return res.status(400).json({ error: "tableNumber is required" });

        table = await Tablesave.findOne({ tableNumber }).sort({ createdAt: -1 }).exec();
        if (!table) return res.status(404).json({ error: "Table not found" });

        return res.status(200).json(table);
      }

      // ✅ 2. Add item
      case "add": {
        if (!tableId || !itemData) return res.status(400).json({ error: "tableId and itemData are required" });

        table = await Tablesave.findById(tableId);
        if (!table) return res.status(404).json({ error: "Table not found" });

        table.orderItems.push(itemData);
        table.totalPrice += itemData.total;
        await table.save();

        return res.status(201).json({ message: "Item added", item: itemData });
      }

      // ✅ 3. Update item
      case "update": {
        if (!tableId || !itemId || !itemData) {
          return res.status(400).json({ error: "tableId, itemId, and itemData are required" });
        }

        table = await Tablesave.findById(tableId);
        if (!table) return res.status(404).json({ error: "Table not found" });

        const item = table.orderItems.find((i) => i.itemId.toString() === itemId);
        if (!item) return res.status(404).json({ error: "Item not found" });

        table.totalPrice -= item.total;
        Object.assign(item, itemData);
        table.totalPrice += item.total;

        await table.save();

        return res.status(200).json({ message: "Item updated", updatedItem: item });
      }

      // ✅ 4. Delete item
      case "delete": {
        if (!tableId || !itemId) return res.status(400).json({ error: "tableId and itemId are required" });

        table = await Tablesave.findById(tableId);
        if (!table) return res.status(404).json({ error: "Table not found" });

        const index = table.orderItems.findIndex((i) => i.itemId.toString() === itemId);
        if (index === -1) return res.status(404).json({ error: "Item not found" });

        const deletedItem = table.orderItems[index];
        table.totalPrice -= deletedItem.total;
        table.orderItems.splice(index, 1);

        await table.save();

        return res.status(200).json({ message: "Item deleted", deletedItem });
      }

      default:
        return res.status(400).json({ error: "Invalid action" });
    }
  } catch (error) {
    console.error("API error:", error);
    return res.status(500).json({ error: "Server Error" });
  }
}
