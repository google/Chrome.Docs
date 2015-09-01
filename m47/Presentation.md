# Presentation

The Presentation interface of the [Presentation API](presentation_api.md) provides access to presentation sessions. 

## Properties

<dl>
  <dt>Presentation.defaultRequest</dt>
  <dd>Returns the default presentation request.</dd>
</dl>

### Event handlers

<dl>
  <dt>Presentation.onsessionavailable</dt>
  <dd>Fired when a new <a href="PresentationSession.md">PresentationSession</a> becomes available.</dd>
</dl>

## Methods

<dl>
  <dt>Presentation.getSession()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a <a href="PresntationSession.md">PresentationSession</a> interface.</dd>
  <dt>Presentation.getSessions()</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves to a list of <a href="PresntationSession.md">PresentationSession</a> interfaces.</dd>
</dl>

## Specifications

<http://w3c.github.io/presentation-api/>
