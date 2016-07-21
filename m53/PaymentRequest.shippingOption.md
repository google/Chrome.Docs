{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentRequest.shippingOption

## Syntax

## Example

In the example below, the {{domxref('PaymentRequest.onshippingaoptionchange')}} event is called. It calls `updateDetails()` to toggle the shipping method between 'standard' and 'express'. 

```javascript
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
try {
 	var payment = new PaymentRequest(supportedInstruments, details, options);

 	request.addEventListener('shippingoptionchange', function(evt) {
      evt.updateWith(new Promise(function(resolve, reject) {
        updateDetails(details, request.shippingOption, resolve, reject);
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

function updateDetails(details, shippingOption, resolve, reject) {
  var selectedShippingOption;
  var otherShippingOption;
  if (shippingOption === 'standard') {
    selectedShippingOption = details.shippingOptions[0];
    otherShippingOption = details.shippingOptions[1];
    details.total.amount.value = '55.00';
  } else if (shippingOption === 'express') {
    selectedShippingOption = details.shippingOptions[1];
    otherShippingOption = details.shippingOptions[0];
    details.total.amount.value = '67.00';
  } else {
    reject('Unknown shipping option \'' + shippingOption + '\'');
    return;
  }
  selectedShippingOption.selected = true;
  otherShippingOption.selected = false;
  details.displayItems.splice(2, 1, selectedShippingOption);
  resolve(details);
}

```

## Specifications

<https://www.w3.org/TR/payment-request/>