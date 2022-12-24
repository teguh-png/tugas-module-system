export default function createHeader(columns) {
    let open = '<thead><tr>';
    let close = '</tr></thead>';
    columns.forEach(column => {
      open += `<th>${column}</th>`;
    });
    return open + close;
  }