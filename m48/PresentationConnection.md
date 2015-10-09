# PresentationConnection

The PresentationConnection interface of the [Presentation API](Presentation_API.md) provides methods and properties for managing a single presentation.

## Properties

<dl>
  <dt>PresentationConnection.id {{readonlyInline}}</dt>
  <dd>Provides the presentation connection identifier.</dd>
  <dt>PresentationConnection.state {{readonlyInline}}</dt>
  <dd>Returns either connected or disconnected.</dd>
  <dt>PresentationConnection.binaryType</dt>
  <dd>Returns either blob or arrayBuffer</dd>
</dl>

### Event handlers

<dl>
  <dt>PresentationConnection.onstatechange</dt>
  <dd>Indicates that the value of PresentationConnection.state has changed.</dd>
  <dt>PresentationConnection.onmessage</dt>
  <dd>Fired when ther is a call to PresentationConnection.send(). </dd>
</dl>

## Methods

<dl>
  <dt>PresentationConnection.close()</dt>
  <dd>Closes the current connection and fires PresentationConnection.onstatechange.</dd>
  <dt>PresentationConnection.send()</dt>
  <dd>Sends either binary or text data between a controlling browsing context and a presenting browsing context.</dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/#interface-presentationconnection>
