/// <reference types="cypress" />

import { ERROR_MESSAGE, GUIDE_MESSAGE } from '../../src/js/utils/message.js';

describe('LOTTO - 구매할 금액 입력 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/');
  });

  it('정상적인 금액을 입력하고 확인 버튼을 클릭한 경우, alert에 로또 구매 결과 안내 메시지를 출력한다.', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.get('#lotto-purchase-input').type('1500');
    cy.get('#lotto-purchase-btn')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith(
          GUIDE_MESSAGE.PAYMENT_RESULT_MESSAGE(1, 500),
        );
      });
  });

  it('금액이 1000원 미만으로 입력된 경우, 확인 버튼이 disabled 상태 및 에러메시지가 화면에 출력된다.', () => {
    cy.get('#lotto-purchase-input').type('100');
    cy.get('#lotto-purchase-btn').should('be.disabled');
    cy.get('[data-section=purchaseInputMessage').should(
      'have.text',
      ERROR_MESSAGE.PAYMENT_AMOUNT,
    );
  });

  it('금액이 소수로 입력된 경우, 확인 버튼이 disabled 상태 및 에러메시지가 화면에 출력된다.', () => {
    cy.get('#lotto-purchase-input').type('100.2');
    cy.get('#lotto-purchase-btn').should('be.disabled');
    cy.get('[data-section=purchaseInputMessage').should(
      'have.text',
      ERROR_MESSAGE.NOT_INTEGER_NUMBER,
    );
  });
});
