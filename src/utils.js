export function numberWithCommas(x) {
  return x.toLocaleString('en-IN');
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
