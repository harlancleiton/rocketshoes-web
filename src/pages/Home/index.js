import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_zoom1.jpg"
          alt="Tênis Olympikus Easy Feminino - Bege"
        />
        <strong>Tênis Olympikus Easy Feminino - Bege</strong>
        <span>R$169,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_zoom1.jpg"
          alt="Tênis Olympikus Easy Feminino - Bege"
        />
        <strong>Tênis Olympikus Easy Feminino - Bege</strong>
        <span>R$169,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_zoom1.jpg"
          alt="Tênis Olympikus Easy Feminino - Bege"
        />
        <strong>Tênis Olympikus Easy Feminino - Bege</strong>
        <span>R$169,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_zoom1.jpg"
          alt="Tênis Olympikus Easy Feminino - Bege"
        />
        <strong>Tênis Olympikus Easy Feminino - Bege</strong>
        <span>R$169,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_zoom1.jpg"
          alt="Tênis Olympikus Easy Feminino - Bege"
        />
        <strong>Tênis Olympikus Easy Feminino - Bege</strong>
        <span>R$169,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-easy-feminino/04/D22-2763-004/D22-2763-004_detalhe1.jpg?resize=280:280"
          alt="Tênis Olympikus Easy Feminino - Bege"
        />
        <strong>Tênis Olympikus Easy Feminino - Bege</strong>
        <span>R$169,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />1
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
