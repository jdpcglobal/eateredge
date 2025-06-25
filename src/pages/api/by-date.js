import dbConnect from '../../app/lib/dbconnect'; // MongoDB connection
import OrderPayment from '../../models/OrderPayment';
import User from '../../models/user';
import Address from '../../models/Address';
import Item from '../../models/item';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    await dbConnect();

    const { startDate, endDate } = req.body;

    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'Start date and end date are required.' });
    }

    // Create full-day date range
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0); // 00:00:00.000

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999); // 23:59:59.999

    const orders = await OrderPayment.find({
      date: {
        $gte: start,
        $lte: end,
      },
    })
      .populate({
        path: 'user',
        model: User,
        select: 'userName mobileNumber',
      })
      .populate({
        path: 'selectedAddress',
        model: Address,
        select: 'location flatNo landmark',
      })
      .populate({
        path: 'items.foodId',
        model: Item,
        select: 'name',
      })
      .sort({ date: -1 });

    res.status(200).json({ orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
