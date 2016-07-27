{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentRequest.shippingAddress

The `shippingAddress` read-only property of the `PaymentRequest` interface returns a [PaymentAddress](PaymentRequest.PaymentAddress.md) object containing the shipping address provided by the user.

## Syntax

```
var paymentAddress = PaymentRequest.shippingAddress
```

## Example

Generally, the user agent will fill the `shippingAddress` property for you. Trigger this by setting `PaymentOptions.requestShipping` to `true` when calling the `PaymentRequest` constructor. 

In the example below, the cost of shipping varies by geography. When the {{domxref('PaymentRequest.onshippingaddresschange')}} is called, `updateDetails()` is called to update the details of the `PaymentRequest', using `shippingAddress` to set the correct shipping cost. 

```javascript
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
try {
 	var payment = new PaymentRequest(supportedInstruments, details, options);

 	request.addEventListener('shippingaddresschange', function(evt) {
      evt.updateWith(new Promise(function(resolve) {
        updateDetails(details, request.shippingAddress, resolve);
      }));
    });

	payment.show().then(function(paymentResponse) {
		// Processing of paymentResponse exerpted for the same of brevity.
	}).catch(function(err) {
		console.error("Uh oh, something bad happened", err.message);
	});
} catch(err) {
	console.log('Payment didn't go through. This happened: ' + err.message);
}

function updateDetails(details, shippingAddress, resolve) {
  if (shippingAddress.country === 'US') {
    var shippingOption = {
      id: '',
      label: '',
      amount: {currency: 'USD', value: '0.00'},
      selected: true
    };
    if (shippingAddress.region === 'MO') {
      shippingOption.id = 'mo';
      shippingOption.label = 'Free shipping in Missouri';
      details.total.amount.value = '55.00';
    } else {
      shippingOption.id = 'us';
      shippingOption.label = 'Standard shipping in US';
      shippingOption.amount.value = '5.00';
      details.total.amount.value = '60.00';
    }
    details.displayItems.splice(2, 1, shippingOption);
    details.shippingOptions = [shippingOption];
  } else {
    delete details.shippingOptions;
  }
  resolve(details);
}

```

## Specifications

<https://www.w3.org/TR/payment-request/>