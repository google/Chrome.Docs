{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentResponse.complete()

The `PaymentRequest.complete()` method of the [PaymentRequest API](PaymentRequest_API.md) 

## Syntax

`PaymentRequest.complete();

### Returns

A {{jsxref("Promise")}} 

### Parameters

<dl>
  <dt>success</dt>
  <dd></dd>
</dl>

## Examples

The following example sends payment information to a secure server using the Fetch API. It calls `complete()` with an answer appropriate to the status in the response.

```javascript
// Initialization of PaymentRequest arguments are excerpted for the sake of
//   brevity.
try {
 	var payment = new PaymentRequest(supportedInstruments, details, options);

	payment.show().then(function(paymentResponse) {
		var fetchOptions = {
			method: 'POST',
			credentials: include,
			body: JSON.stringify(paymentResponse)
		};
		var serverPaymentRequest = new Request('secure/payment/endpoint');
		fetch(serverPaymentRequest, fetchOptions).then( response => {
			if (response.status < 400) {
				paymentResponse.complete("success");
			} else {
				paymentResponse.complete("fail");
			};
		}).catch( reason => {
			paymentResponse.complete("fail");
		});
	}).catch(function(err) {
		console.error("Uh oh, something bad happened", err.message);
	});
} catch(err) {
	console.log('Payment didn't go through. This happened: ' + err.message);
}
```

# Specifications

<https://www.w3.org/TR/payment-request/>
