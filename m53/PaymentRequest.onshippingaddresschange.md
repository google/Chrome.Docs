{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentRequest.onshippingaddresschange

This event is also triggered by the user interactions with the user agent. This is fired both when the existing default address is updated and when an address is added by the user for the first time.

## syntax

## Examples

The `shippingaddresschange` event is triggered by a user-agent controlled interaction. If the address stored by the user agent changes at any time during a payment process, the event will be triggered. To make sure an updated address is included when sending payment information to the server, you should add event listeners for a {{domxref('PaymentRequest')}} object after instantiation, but before the call to `show()`. 

```javascript
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   clarity.
try {
 	var payment = new PaymentRequest(supportedInstruments, details, options);

 	request.addEventListener('shippingaddresschange', function(evt) {
      evt.updateWith(new Promise(function(resolve) {
        updateDetails(details, request.shippingAddress, resolve);
      }));
    });

	payment.show().then(function(paymentResponse) {
		// Processing of paymentResponse exerpted for the same of clarity.
	}).catch(function(err) {
		console.error("Uh oh, something bad happened", err.message);
	});
} catch(err) {
	console.log('Payment didn't go through. This happened: ' + err.message);
}

```

## Specifications

<https://www.w3.org/TR/payment-request/>