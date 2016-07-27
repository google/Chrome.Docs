{{SeeCompatTable}}{{APIRef("Payment Request API")}}

# PaymentRequest.abort()

The `PaymentRequest.abort()` method of the [PaymentRequest API](PaymentRequest_API.md) 

## Syntax

`PaymentRequest.abort()`

### Returns

Void.

### Parameters

None

## Examples

The following example sets up a timeout to clear the payment request that might have been abandoned or neglected.

{% highlight javascript %}
var request = new PaymentRequest(supportedInstruments, details, options);

var paymentTimeout = window.setTimeout(() => {
	window.clearTimeout(paymentTimeout);
	payment.abort().then(() => {
		print('Payment timed out after 20 minutes.');
	}).catch(() => {
		print('Unable to abort, because the user is currently in the process ' +
			'of paying.');
	});
}, 20 * 60 * 1000);  /* 20 minutes */
{% endhighlight %}

# Specifications

<https://www.w3.org/TR/payment-request/>
