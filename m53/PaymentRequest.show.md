{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentRequest.show()

The `PaymentRequest.show()` method of the [PaymentRequest API](PaymentRequest_API.md) 

## Syntax

```
PaymentRequest.show()
	.then( paymentResponse => { ... })
	.catch( error => { ... })
```

### Returns

A {{jsxref("Promise")}} to a {{domxref("PaymentResponse")}} object.

### Parameters

None

## Examples

In the following example, a `PaymentRequest` object is instantiated before the `show()` method is called. This method triggers the user agent's built-in process for retrieving payment information from the user. The `show()` method returns a {{jsxref('Promise')}} that resolves to a {{domxref("PaymentResponse")}} object when the user interaction is complete. The developer then uses the information in the `PaymentResponse` object to format and send payment data to the server. You should send the payment information to the server asynchronously so that the final call to {{domxref("paymentResponse.complete()")}} can indicate the success or failure of the payment.

```javascript
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
try {
 	var payment = new PaymentRequest(supportedInstruments, details, options);

	payment.show().then(function(paymentResponse) {
		// Process paymentResponse here, including sending payment to the server.
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

# Specifications

<https://www.w3.org/TR/payment-request/>

# See Also

* [PaymentRequest](PaymentRequest.md)
