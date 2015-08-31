# PresentationSession

The PresentationSession interface of the Presentation API provides methods and properties for managing a single presentation.

## Properties

<dl>
  <dt>PresentationSession.id {{readonlyInline}}</dt>
  <dd>Provides the presentation session identifier.</dd>
  <dt>PresentationSession.state {{readonlyInline}}</dt>
  <dd>Returns either connected or disconnected.</dd>
  <dt>PresentationSession.binaryType</dt>
  <dd>Returns either blob or arrayBuffer</dd>
</dl>

### Event handlers

<dl>
  <dt>PresentationSession.onstatechange</dt>
  <dd>Indicates that the value of PresentationSession.state has changed.</dd>
  <dt>PresentationSession.onmessage</dt>
  <dd>Fired when ther is a call to PresentationSession.send(). </dd>
</dl>

## Methods

<dl>
  <dt>PresentationSession.close()</dt>
  <dd>Closes the current session and fires PresentationSession.onstatechange.</dd>
  <dt>PresentationSession.send()</dt>
  <dd>Sends either binary or text data between a controlling browsing context and a presenting browsing context.</dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/>
