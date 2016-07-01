# PaymentRequest.show()

The `PaymentRequest.show()` method of the [PaymentRequest API](PaymentRequest_API.md) 

## Syntax

`PaymentRequest.show();

### Returns

A {{jsxref("Promise")}} to a {{domxref("PaymentResponse")}} object.

### Parameters

None

## Examples

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

# Specifications

<https://www.w3.org/TR/payment-request/>

# See Also

* [PaymentRequest](PaymentRequest.md)
