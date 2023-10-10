import { Product } from './Product';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

document.addEventListener('DOMContentLoaded', init);

const products : Product[] = [];

function init() {
  document.getElementById('submit')!.addEventListener('click', Registration);
}

function Registration() {
  try {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const price = parseInt((document.getElementById('price') as HTMLInputElement).value);
    const productCode = (document.getElementById('productCode') as HTMLInputElement).value;

    const product = new Product(name, price, productCode);
    products.push(product);

    ListCreation();

    (document.getElementById('name') as HTMLInputElement).value = "";
    (document.getElementById('price') as HTMLInputElement).value = "";
    (document.getElementById('productCode') as HTMLInputElement).value = "";
  }
  catch (event) {
    if (event instanceof Error) {
      document.getElementById('errorMessage')!.textContent = event.message;
    }
  }
}

function ListCreation() {

  const listHtml = document.getElementById('list')!;
  listHtml.innerHTML = `
    <thead>
      <tr>
        <th>Név</th>
        <th>Ár</th>
        <th>Termék kód</th>
      </tr>
    </thead>
    <tbody id="listBody">
    </tbody>
  `

  products.forEach(product => {
    document.getElementById('listBody')!.innerHTML += `
    <tr>
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.productCode}</td>
    </tr>
    `
  });
}