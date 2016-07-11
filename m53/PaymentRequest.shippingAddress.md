# PaymentRequest.shippingAddress

## Syntax

## Example

The following example converts the shipping address to JSON, then encrypts it and sends it to the server.

Generally, the user agent will fill the `shippingAddress` property for you. Trigger this by setting `PaymentOptions.requestShipping` to `true` when calling the `PaymentRequest` constructor.  



```javascript
try {
 	var payment = new PaymentRequest(supportedInstruments, details, options);

	payment.show().then(function(paymentResponse) {
		// Process paymentResponse here
		// paymentResponse.methodName contains the selected payment method
	 	// paymentResponse.details contains a payment method specific response
	 	paymentResponse.complete("success");
	}).catch(function(err) {
		console.error("Uh oh, something bad happened", err.message);
	});
} catch(err) {
	console.log('Payment didn't go through. This happened: ' + err.message);
}
```

## Specifications

<https://www.w3.org/TR/payment-request/>