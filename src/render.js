export default function render(element) {
    const table = `
      <table class='table table-hover'>
        ${this.createHeader(this.init.columns)}
        ${this.createBody(this.init.data)}
      </table>
    `;
    element.innerHTML = table;
  }