This page is deprecated. It's contents have been moved to [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

# PresentationRequest

The PresentationRequest interface of the [Presentation API](Presentation_API.md) provides methods for starting a new presentation or joining an active one.

## Properties

None

### Event handlers

<dl>
  <dt>onconnectionavailable</dt>
  <dd>Fires on a successful call to PresentationRequest.start() or PresentationRequest.join(). This method provides a <PresentationConnectionAvailableEvent .md> object with a reference to the created or joined <PresentationConnection.md> object.</dd>
</dl>

## Methods

<dl>
  <dt>PresentationRequest.start()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a new <PresentationConnection.md> object.</dd>
  <dt>PresentationRequest.reconnect()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to an existing <PresentationConnection.md> object specified by a given presentationId.</dd>
  <dt>PresentationRequest.getAvailability()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a <PresentationAvailability.md> object which provides availability information for the given presentationId.</dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/#interface-presentationrequest>
