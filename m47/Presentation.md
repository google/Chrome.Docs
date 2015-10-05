# Presentation

The Presentation interface of the [Presentation API](Presentation_API.md) provides access to presentation connections. 

## Properties

<dl>
  <dt>Presentation.defaultRequest</dt>
  <dd>Returns the default presentation request.</dd>
</dl>

### Event handlers

<dl>
  <dt>Presentation.onconnectionavailable</dt>
  <dd>Fired when a new <a href="PresentationConnection.md">PresentationConnection</a> becomes available.</dd>
</dl>

## Methods

<dl>
  <dt>Presentation.getConnection()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a <a href="PresentationConnection.md">PresentationConnection</a> interface.</dd>
  <dt>Presentation.getConnections()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a list of <a href="PresentationConnection.md">PresentationConnection</a> interfaces.</dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/#interface-presentation>
