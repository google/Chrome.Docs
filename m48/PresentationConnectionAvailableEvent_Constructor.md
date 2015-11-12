# PresentationConnectionAvailableEvent()

The `PresentationConnectionAvailableInit()` constructor creates a new [PresentationConnectionAvailableEvent ](PresentationConnectionAvailableEvent.md) is fired on a [PresentationRequest](PresentationRequest.md) when a connection associated with the object is created.

## Syntax

`var PresentationConnectionAvailableEvent  = new PresentationConnectionAvailableInit(typeArg, eventInit)`

### Returns

An instance of the [PresentationConnectionAvailableEvent ](PresentationConnectionAvailableEvent.md) interface.

### Parameters

<dl>
  <dt>typeArg</dt>
  <dd>A [[jsxref("DOMSTring")}} giving the name of the event. For this event it should be `connectionavailable`.</dd>
  <dt>eventInit</dt>
  <dd>Is a `PresentationConnectionAvailableInit` dictionary, which only contains a reference to a `PresentationConnection` object. </dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/#interface-presentationsessionconnectevent>
