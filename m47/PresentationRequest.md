# PresentationRequest

The PresentationRequest interface of the [Presentation API](Presentation_API.md) provides methods for starting a new presentation or joining an active one.

## Properties

None

### Event handlers

<dl>
  <dt>onsessionconnect</dt>
  <dd>Fires on a successful call to PresentationRequest.start() or PresentationRequest.join(). This method provides a <PresentationSessionConnectEvent.md> object with a reference to the created or joined <PresentationSession.md> object.</dd>
</dl>

## Methods

<dl>
  <dt>PresentationRequest.start()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a new <PresentationSession.md> object.</dd>
  <dt>PresentationRequest.join()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to an existing <PresentationSession.md> object specified by a given presentationId.</dd>
  <dt>PresentationAvailability.getAvailability()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a <PresentationAvailability.md> object which provides availability information for the given presentationId.</dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/#interface-presentationrequest>
