"use client";

import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './order-history.css';

export default function OrderHistory() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('');
  const [limit, setLimit] = useState(10);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const fetchOrders = async () => {
    if (!startDate || !endDate) return alert("Please select both start and end dates.");
    setLoading(true);
    try {
      const res = await fetch('/api/by-date', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate, endDate }),
      });
      const data = await res.json();
      const fetched = data.orders || [];
      setOrders(fetched);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      alert("Failed to fetch orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = [...orders];

    if (statusFilter) {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(order => {
        const items = order.items?.map(item => `${item.foodId?.name || 'Item'} (${item.quantity})`).join(', ') || '';
        const phone = order.user?.mobileNumber || '';
        const address = `${order.selectedAddress?.location || ''} ${order.selectedAddress?.flatNo || ''} ${order.selectedAddress?.landmark || ''}`.toLowerCase();
        const total = `${order.totalAmount}`;
        const status = order.status?.toLowerCase() || '';
        const payment = order.paymentMethod?.toLowerCase() || '';
        const utr = order.UTR?.toLowerCase?.() || '';
        const date = new Date(order.date).toLocaleString().toLowerCase();

        return (
          items.toLowerCase().includes(query) ||
          phone.includes(query) ||
          address.includes(query) ||
          total.includes(query) ||
          status.includes(query) ||
          payment.includes(query) ||
          utr.includes(query) ||
          date.includes(query)
        );
      });
    }

    setFilteredOrders(showAll ? filtered : filtered.slice(0, limit));
  }, [orders, statusFilter, searchQuery, limit, showAll]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text(`Order History (${startDate} to ${endDate})`, 14, 16);
    autoTable(doc, {
      startY: 25,
      head: [['Items', 'Qty', 'Phone', 'Address', 'Total', 'Status', 'Payment', 'UTR', 'Date']],
      body: filteredOrders.map(order => {
        const items = order.items?.map(item => `${item.foodId?.name || 'Item'} (${item.quantity})`).join(', ');
        const quantity = order.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
        const address = `${order.selectedAddress?.location || ''}, ${order.selectedAddress?.flatNo || ''}, ${order.selectedAddress?.landmark || ''}`.trim();

        return [
          items,
          quantity,
          order.user?.mobileNumber || 'N/A',
          address || 'N/A',
          `₹${order.totalAmount}`,
          order.status,
          order.paymentMethod,
          order.UTR || 'N/A',
          new Date(order.date).toLocaleString(),
        ];
      }),
      theme: 'grid',
      headStyles: {
        fillColor: [44, 62, 80],
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      margin: { top: 20 }
    });
    doc.save(`OrderHistory_${startDate}_to_${endDate}.pdf`);
  };

  return (
    <div className="order-history-container">
      <div className="order-header">
        <h2 className="title animate-fade-in">Order History</h2>
        <p className="subtitle animate-fade-in-delay">Search and analyze past orders</p>
      </div>

      <div className="search-section animate-slide-up">
        <div className="date-filters">
          <div className="filter-group">
            <label className="filter-label">Start Date</label>
            <input 
              type="date" 
              max={today} 
              value={startDate} 
              onChange={e => setStartDate(e.target.value)} 
              className="filter-input" 
            />
          </div>

          <div className="filter-group">
            <label className="filter-label">End Date</label>
            <input 
              type="date" 
              min={startDate} 
              max={today} 
              value={endDate} 
              onChange={e => setEndDate(e.target.value)} 
              className="filter-input" 
            />
          </div>

          <button 
            onClick={fetchOrders} 
            className="search-btn animate-pulse"
            disabled={loading}
          >
            {loading ? (
              <span className="loading-dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
            ) : 'Search Orders'}
          </button>
        </div>
      </div>

      {orders.length > 0 && (
        <div className="filters-section animate-slide-up-delay">
          <div className="filter-row">
            <div className="filter-group">
              <label className="filter-label">Status Filter</label>
              <select 
                value={statusFilter} 
                onChange={e => setStatusFilter(e.target.value)} 
                className="filter-input"
              >
                <option value="">All Statuses</option>
                <option value="Order Processing">Order Processing</option>
                <option value="Accepted">Accepted</option>
                <option value="Food Preparing">Food Preparing</option>
                <option value="Out For Delivery">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Items per Page</label>
              <select
                value={showAll ? 'All' : limit}
                onChange={e => {
                  const val = e.target.value;
                  if (val === 'All') {
                    setShowAll(true);
                  } else {
                    setShowAll(false);
                    setLimit(Number(val));
                  }
                }}
                className="filter-input"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="All">Show All</option>
              </select>
            </div>
          </div>

          <div className="filter-group search-group">
            <label className="filter-label">Search Orders</label>
            <input
              type="text"
              placeholder="Search by items, phone, address, total, status, UTR..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      )}

      <div className="results-section">
        {loading ? (
          <div className="loading-state animate-fade-in">
            <div className="loading-spinner"></div>
            <p>Loading your orders...</p>
          </div>
        ) : filteredOrders.length > 0 ? (
          <>
            <div className="results-header animate-fade-in">
              <p className="results-count">
                Showing <span>{filteredOrders.length}</span> of <span>{orders.length}</span> orders
                {startDate && endDate && ` between ${new Date(startDate).toLocaleDateString()} and ${new Date(endDate).toLocaleDateString()}`}
              </p>
              <div className="action-buttons">
                <button onClick={generatePDF} className="action-btn pdf-btn">
                  <i className="icon-download"></i> Export PDF
                </button>
                <button onClick={() => window.print()} className="action-btn print-btn">
                  <i className="icon-printer"></i> Print
                </button>
              </div>
            </div>

            <div className="table-container animate-fade-in-delay">
              <div className="table-scroll-wrapper">
                <table className="orders-table">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Qty</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Payment</th>
                      <th>UTR</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => {
                      const items = order.items?.map(item => `${item.foodId?.name || 'Item'} (${item.quantity})`).join(', ');
                      const quantity = order.items?.reduce((acc, item) => acc + item.quantity, 0) || 0;
                      const address = `${order.selectedAddress?.location || ''}, ${order.selectedAddress?.flatNo || ''}, ${order.selectedAddress?.landmark || ''}`.trim();

                      return (
                        <tr 
                          key={order._id} 
                          className="table-row animate-fade-in-row"
                          style={{ animationDelay: `${index * 0.05}s` }}
                          data-status={order.status.toLowerCase().replace(/\s+/g, '-')}
                        >
                          <td data-label="Items">{items}</td>
                          <td data-label="Qty" className="text-center">{quantity}</td>
                          <td data-label="Phone">{order.user?.mobileNumber || 'N/A'}</td>
                          <td data-label="Address">{address || 'N/A'}</td>
                          <td data-label="Total" className="text-bold">₹{order.totalAmount}</td>
                          <td data-label="Status">
                            <span className={`status-badge status-${order.status.toLowerCase().replace(/\s+/g, '-')}`}>
                              {order.status}
                            </span>
                          </td>
                          <td data-label="Payment">{order.paymentMethod || 'N/A'}</td>
                          <td data-label="UTR">{order.UTR || 'N/A'}</td>
                          <td data-label="Date">{new Date(order.date).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="no-results animate-fade-in">
            <p>No orders found for the selected dates and filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
