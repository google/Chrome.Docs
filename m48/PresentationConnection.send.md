# PresentationConnection.send()

The `PresentationConnection.send()` method of the [Presentation API](Presentation_API.md) sends either binary or text data between a controlling browsing context and a presenting browsing context.

## Syntax

`PresentationConnection.send(data);

### Returns

Void.

### Parameters

<dl>
  <dt>data</dt>
  <dd>Data to send to the presentation. It will be one of the following:
    <ul>
      <li>{{jsxref("String")}}</li>
      <li>{{domxref("Blob")}}</li>
      <li>{{jsxref("Array")}}</li>
    </ul>
  </dd>
</dl>

# Specifications

<https://w3c.github.io/presentation-api/#dom-presentationconnection-send>
