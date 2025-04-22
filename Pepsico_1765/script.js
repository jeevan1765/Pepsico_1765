const distributors = [
  {
    name: "PepsiCo Midwest",
    lastMonth: 10500,
    forecast: 12000,
    ytdAverage: 9800,
    lastUpdated: "2025-04-20"
  },
  {
    name: "PepsiCo Northeast",
    lastMonth: 8900,
    forecast: 9500,
    ytdAverage: 9100,
    lastUpdated: "2025-04-20"
  }
];

const dashboard = document.getElementById('dashboard');

distributors.forEach(dist => {
  const change = (((dist.forecast - dist.lastMonth) / dist.lastMonth) * 100).toFixed(1);
  const statusClass = dist.forecast > dist.lastMonth ? 'good' : 'warn';
  const statusLabel = dist.forecast > dist.lastMonth ? '📈 Healthy' : '⚠️ Monitor';

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${dist.name}</h2>
    <p><strong>Last Month:</strong> ${dist.lastMonth.toLocaleString()} units</p>
    <p><strong>Forecast:</strong> ${dist.forecast.toLocaleString()} units</p>
    <p><strong>YTD Average:</strong> ${dist.ytdAverage.toLocaleString()} units</p>
    <p><strong>Change:</strong> ${change}%</p>
    <p class="status ${statusClass}"><strong>Status:</strong> ${statusLabel}</p>
    <p class="updated">Updated: ${dist.lastUpdated}</p>
  `;
  dashboard.appendChild(card);
});
