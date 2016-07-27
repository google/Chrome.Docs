{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentRequest()

The `PaymentRequest()` constructor creates a new [PaymentRequest](PaymentRequest.md) object.

## Syntax

`var paymentRequest = new PaymentRequest(supportedMethods, details[, options[, data]])`

### Returns

An instance of the [PaymentRequest](PaymentRequest.md) interface.

### Parameters

<dl>
  <dt>supportedMethods</dt>
  <dd>A sequence of strings indicating the payment methods the merchant web site accepts.</dd>
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

The following example shows minimal functionality and focuses instead on showing the complete context of instantiating a `PaymentRequest` object.

```javascript
  var supportedInstruments = [{
    supportedMethods: [
      'amex', 'diners', 'discover', 'jcb', 'maestro', 'mastercard', 'visa'
    ]
  }];

  var details = {
    total: {label: 'Donation', amount: {currency: 'USD', value: '55.00'}},
    displayItems: [
      {
        label: 'Original donation amount',
        amount: {currency: 'USD', value: '65.00'}
      }
    ],
    shippingOptions: [
      {
        id: 'standard',
        label: 'Standard shipping',
        amount: {currency: 'USD', value: '0.00'},
        selected: true
      }
    ]
  };

  var options = {requestShipping: true};

    try {
    var request = new PaymentRequest(supportedInstruments, details, options);

    // Add event listeners here.

    // Call show() to trigger the browser's payment flow.
    request.show().then(function(instrumentResponse) {
      // Do something with the response from the UI.
    })
    .catch(function(err) {
      // Do something with the error from request.show().
    });
  } catch (e) {
    // Catch any other errors.
  }
```

## Specifications

<https://www.w3.org/TR/payment-request/>