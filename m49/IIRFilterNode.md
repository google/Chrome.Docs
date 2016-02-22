# IIRFilterNode

The **`IIRFilterNode`** interface of the <a href="en-US/docs/Web/API/Web_Audio_API">Web Audio API</a> is a generic interface for representing an infinite response filter that allow a complete specification of the filter response parameters. For most purposes it's generally better to use a {{domxref("BiquadFilterNode")}}. Use this interface if you need odd-ordered filters (which cannot be created with a `BiquadFilterNode`). Once created, the coefficients of the filter cannot be changed.

## Properties

Note.

## Methods

<dl>
  <dt>getFrequencyResponse()</dt>
  <dd>TBD</dd>
<dl>

## Specifications

<https://webaudio.github.io/web-audio-api/#the-iirfilternode-interface>
