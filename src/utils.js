export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export function formatDate(dt) {
  return dt.toLocaleString('en-CA', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
