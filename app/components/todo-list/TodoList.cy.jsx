import React from 'react'
import TodoList from './TodoList'

describe('<TodoList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoList />)
        cy.contains(/to-do List/i);
        cy.get('ul[data-id="todo-list"] li').should("have.length", 0);
        cy.contains(/todo one/i).should("not.exist");

        cy.get("input").type("todo one");
        cy.get("button").click();
        cy.get('[data-id="todo-list"]').should("have.length", 1);
        cy.contains(/todo one/i);

        cy.get('[data-id="todo one-remove-btn"]').click();
        cy.get('ul[data-id="todo-list"] li').should("have.length", 0);
        cy.contains(/todo one/i).should("not.exist");
  })
})