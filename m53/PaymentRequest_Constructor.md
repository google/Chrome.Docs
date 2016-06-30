# PaymentRequest()

The `PaymentRequest()` constructor creates a new [PaymentRequest](PaymentRequest.md) object which 

## Syntax

`var paymentRequest = new PaymentRequest(supportedMethods, details[, options[, data]])`

### Returns

An instance of the [PaymentRequest](PaymentRequest.md) interface.

### Parameters

<dl>
  <dt>supportedMethods</dt>
  <dd></dd>
  <dt>details</dt>
  <dd>
    <dl>
      <dt>items</dt>
      <dd>
        <dl>
          <dt>id</dt>
          <dd></dd>
          <dt>label</dt>
          <dd></dd>
          <dt>amount</dt>
          <dd></dd>
        </dl>
      </dd>
      <dt>shippingOptions</dt>
      <dd>
        <dl>
          <dt>id</dt>
          <dd></dd>
          <dt>label</dt>
          <dd></dd>
          <dt>amount</dt>
          <dd>
            <dl>
              <dt>currency</dt>
              <dd></dd>
              <dt>value</dt>
              <dd></dd>
            </dl>
          </dd>
        </dl>
      </dd>
    </dl>
  </dd>
  <dt>options {{optional_inline}}</dt>
  <dd>
    <dl>
      <dt>requestShipping</dt>
      <dd></dd>
    </dl>
  </dd>
  <dt>data {{optional_inline}}</dt>
  <dd></dd>
</dl>

## Example

TBD

## Specifications

<https://www.w3.org/TR/payment-request/>