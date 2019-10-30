import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_detalhe1.jpg?resize=280:280"
                alt="Tênis Olympikus Easy Feminino - Bege"
              />
            </td>
            <td>
              <strong>Tênis Olympikus Easy Feminino - Bege</strong>
              <span>R$169,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$169,90</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$590,76</strong>
        </Total>
      </footer>
    </Container>
  );
}
