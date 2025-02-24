import * as element from "@helpers/elements";
import * as route from "@helpers/route";
import { ROUTES } from "@tests/const/routes";
import * as buyPage from "@tests/pages/buy.page";
import * as checkoutPage from "@tests/pages/checkout.page";
import * as assert from "@helpers/asserts";
import * as user from "@tests/data/checkout.data";
import * as docs from "@tests/data/response.data";
import { addCart } from "../pages/buy.page";

describe("Buying Item Success", function () {
  beforeEach(() => {
    route.visit(ROUTES.checkOut);
  });

  it("Success buy item view cart", () => {
    element.click(buyPage.addCart);
    element.wait(3000);

    assert.shouldContainText(buyPage.popupText, docs.success_addCart.desc);

    element.click(buyPage.viewCart);
    element.click(buyPage.checkoutBtn);

    element.clearAndFillField(
      checkoutPage.firstName,
      user.VALID_CHECKOUT.firstName
    );
    element.clearAndFillField(
      checkoutPage.lastName,
      user.VALID_CHECKOUT.lastName
    );

    element.click(checkoutPage.dropPrv);
    element.fillFieldAndEnter(
      checkoutPage.boxPrv,
      user.VALID_CHECKOUT.provinsi
    );

    element.click(checkoutPage.dropCity);
    element.fillFieldAndEnter(checkoutPage.boxCity, user.VALID_CHECKOUT.city);

    element.clearAndFillField(
      checkoutPage.billingAddress,
      user.VALID_CHECKOUT.Address
    );
    element.clearAndFillField(
      checkoutPage.billingPostcode,
      user.VALID_CHECKOUT.postcode
    );
    element.clearAndFillField(
      checkoutPage.billingPhone,
      user.VALID_CHECKOUT.phoneNumber
    );

    element.clearAndFillField(
      checkoutPage.billingEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.username,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.password,
      user.VALID_CHECKOUT.password
    );

    element.click(checkoutPage.shipping);
    element.click(checkoutPage.placeOrder);
    element.wait(3000);

    assert.shouldContainText(checkoutPage.alertOrder, docs.alertOrder.desc);

    element.clearAndFillField(
      checkoutPage.orderName,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.orderEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.orderId,
      user.VALID_CHECKOUT.orderId
    );

    cy.get(checkoutPage.fileUpload).selectFile(
      "C:\\Users\\syaku\\OneDrive\\Documents\\KHOLID\\QA\\cypress_ui_order\\tests\\docs\\test.jpg"
    );
    element.click(checkoutPage.submitOrder);
    assert.shouldContainText(buyPage.dataSend, docs.dataSend.desc);
  });

  it("Success buy item checkout", () => {
    element.click(buyPage.addCart);
    element.wait(3000);

    assert.shouldContainText(buyPage.popupText, docs.success_addCart.desc);

    element.click(buyPage.shoppingCart);
    element.click(buyPage.shoppingCheckout);

    element.clearAndFillField(
      checkoutPage.firstName,
      user.VALID_CHECKOUT.firstName
    );
    element.clearAndFillField(
      checkoutPage.lastName,
      user.VALID_CHECKOUT.lastName
    );

    element.click(checkoutPage.dropPrv);
    element.fillFieldAndEnter(
      checkoutPage.boxPrv,
      user.VALID_CHECKOUT.provinsi
    );

    element.click(checkoutPage.dropCity);
    element.fillFieldAndEnter(checkoutPage.boxCity, user.VALID_CHECKOUT.city);

    element.clearAndFillField(
      checkoutPage.billingAddress,
      user.VALID_CHECKOUT.Address
    );
    element.clearAndFillField(
      checkoutPage.billingPostcode,
      user.VALID_CHECKOUT.postcode
    );
    element.clearAndFillField(
      checkoutPage.billingPhone,
      user.VALID_CHECKOUT.phoneNumber
    );

    element.clearAndFillField(
      checkoutPage.billingEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.username,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.password,
      user.VALID_CHECKOUT.password
    );

    element.click(checkoutPage.shipping);
    element.click(checkoutPage.placeOrder);
    element.wait(3000);

    assert.shouldContainText(checkoutPage.alertOrder, docs.alertOrder.desc);

    element.clearAndFillField(
      checkoutPage.orderName,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.orderEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.orderId,
      user.VALID_CHECKOUT.orderId
    );

    cy.get(checkoutPage.fileUpload).selectFile(
      "C:\\Users\\syaku\\OneDrive\\Documents\\KHOLID\\QA\\cypress_ui_order\\tests\\docs\\test.jpg"
    );
    element.click(checkoutPage.submitOrder);
    assert.shouldContainText(buyPage.dataSend, docs.dataSend.desc);
  });

  it("Success buy item shop page", () => {
    element.click(buyPage.shopPage);
    element.forceClick(buyPage.addCart);

    assert.shouldContainText(buyPage.popupText, docs.success_addCart.desc);

    element.click(buyPage.shoppingCart);
    element.click(buyPage.shoppingCheckout);

    element.clearAndFillField(
      checkoutPage.firstName,
      user.VALID_CHECKOUT.firstName
    );
    element.clearAndFillField(
      checkoutPage.lastName,
      user.VALID_CHECKOUT.lastName
    );

    element.click(checkoutPage.dropPrv);
    element.fillFieldAndEnter(
      checkoutPage.boxPrv,
      user.VALID_CHECKOUT.provinsi
    );

    element.click(checkoutPage.dropCity);
    element.fillFieldAndEnter(checkoutPage.boxCity, user.VALID_CHECKOUT.city);

    element.clearAndFillField(
      checkoutPage.billingAddress,
      user.VALID_CHECKOUT.Address
    );
    element.clearAndFillField(
      checkoutPage.billingPostcode,
      user.VALID_CHECKOUT.postcode
    );
    element.clearAndFillField(
      checkoutPage.billingPhone,
      user.VALID_CHECKOUT.phoneNumber
    );

    element.clearAndFillField(
      checkoutPage.billingEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.username,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.password,
      user.VALID_CHECKOUT.password
    );

    element.click(checkoutPage.shipping);
    element.click(checkoutPage.placeOrder);
    element.wait(3000);

    assert.shouldContainText(checkoutPage.alertOrder, docs.alertOrder.desc);

    element.clearAndFillField(
      checkoutPage.orderName,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.orderEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.orderId,
      user.VALID_CHECKOUT.orderId
    );

    cy.get(checkoutPage.fileUpload).selectFile(
      "C:\\Users\\syaku\\OneDrive\\Documents\\KHOLID\\QA\\cypress_ui_order\\tests\\docs\\test.jpg"
    );
    element.click(checkoutPage.submitOrder);
    assert.shouldContainText(buyPage.dataSend, docs.dataSend.desc);
  });

  it("Success buy item shop page 2", () => {
    element.click(buyPage.shopPage);
    element.click(buyPage.itemPage);
    element.click(buyPage.itemCheckout);

    element.click(buyPage.shoppingCart);
    element.click(buyPage.shoppingCheckout);

    element.clearAndFillField(
      checkoutPage.firstName,
      user.VALID_CHECKOUT.firstName
    );
    element.clearAndFillField(
      checkoutPage.lastName,
      user.VALID_CHECKOUT.lastName
    );

    element.click(checkoutPage.dropPrv);
    element.fillFieldAndEnter(
      checkoutPage.boxPrv,
      user.VALID_CHECKOUT.provinsi
    );

    element.click(checkoutPage.dropCity);
    element.fillFieldAndEnter(checkoutPage.boxCity, user.VALID_CHECKOUT.city);

    element.clearAndFillField(
      checkoutPage.billingAddress,
      user.VALID_CHECKOUT.Address
    );
    element.clearAndFillField(
      checkoutPage.billingPostcode,
      user.VALID_CHECKOUT.postcode
    );
    element.clearAndFillField(
      checkoutPage.billingPhone,
      user.VALID_CHECKOUT.phoneNumber
    );

    element.clearAndFillField(
      checkoutPage.billingEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.username,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.password,
      user.VALID_CHECKOUT.password
    );

    element.click(checkoutPage.shipping);
    element.click(checkoutPage.placeOrder);
    element.wait(3000);

    assert.shouldContainText(checkoutPage.alertOrder, docs.alertOrder.desc);

    element.clearAndFillField(
      checkoutPage.orderName,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.orderEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.orderId,
      user.VALID_CHECKOUT.orderId
    );

    cy.get(checkoutPage.fileUpload).selectFile(
      "C:\\Users\\syaku\\OneDrive\\Documents\\KHOLID\\QA\\cypress_ui_order\\tests\\docs\\test.jpg"
    );
    element.click(checkoutPage.submitOrder);
    assert.shouldContainText(buyPage.dataSend, docs.dataSend.desc);
  });

  it("Failed type not valid", () => {
    element.click(buyPage.addCart);
    element.wait(3000);

    assert.shouldContainText(buyPage.popupText, docs.success_addCart.desc);

    element.click(buyPage.shoppingCart);
    element.click(buyPage.shoppingCheckout);

    element.clearAndFillField(
      checkoutPage.firstName,
      user.VALID_CHECKOUT.firstName
    );
    element.clearAndFillField(
      checkoutPage.lastName,
      user.VALID_CHECKOUT.lastName
    );

    element.click(checkoutPage.dropPrv);
    element.fillFieldAndEnter(
      checkoutPage.boxPrv,
      user.VALID_CHECKOUT.provinsi
    );

    element.click(checkoutPage.dropCity);
    element.fillFieldAndEnter(checkoutPage.boxCity, user.VALID_CHECKOUT.city);

    element.clearAndFillField(
      checkoutPage.billingAddress,
      user.VALID_CHECKOUT.Address
    );
    element.clearAndFillField(
      checkoutPage.billingPostcode,
      user.VALID_CHECKOUT.postcode
    );
    element.clearAndFillField(
      checkoutPage.billingPhone,
      user.VALID_CHECKOUT.phoneNumber
    );

    element.clearAndFillField(
      checkoutPage.billingEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.username,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.password,
      user.VALID_CHECKOUT.password
    );

    element.click(checkoutPage.shipping);
    element.click(checkoutPage.placeOrder);
    element.wait(3000);

    assert.shouldContainText(checkoutPage.alertOrder, docs.alertOrder.desc);

    element.clearAndFillField(
      checkoutPage.orderName,
      user.VALID_CHECKOUT.username
    );
    element.clearAndFillField(
      checkoutPage.orderEmail,
      user.VALID_CHECKOUT.email
    );
    element.clearAndFillField(
      checkoutPage.orderId,
      user.VALID_CHECKOUT.orderId
    );

    cy.get(checkoutPage.fileUpload).selectFile(
      "C:\\Users\\syaku\\OneDrive\\Documents\\KHOLID\\QA\\cypress_ui_order\\tests\\docs\\test.pdf"
    );
    assert.shouldContainText(
      checkoutPage.alertFileNotValid,
      docs.alertFileNotValid.desc
    );
    element.click(checkoutPage.submitOrder);

    assert.shouldContainText(buyPage.dataSend, docs.dataFailed.desc);
  });
});
