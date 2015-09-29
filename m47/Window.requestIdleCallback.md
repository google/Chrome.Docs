# Window.requestIdleCallback()

The **`Window.requestIdleCallback()`** method enables the scheduling of tasks during a browser's idle periods. This enables developers to perform background work on the main event loop, without impacting latency-critical events such as animation and input response.

## Syntax

`var handle = Window.requestIdleCallback(callback[, options])`

### Returns

An unsighned long integer that can be used to cancle the callback.

### Parameters

<dl>
  <dt>`callback`</dt>
  <dd>A reference to a function that will be called during a browser's idle period.</dd>
  <dt>`options` {{optional_inline}}</dt>
  <dd>Contains optional configuration parameters. It has the following property:
    <ul>
      <li>`timeout`: A deadline by which the browser must call the given callback function. This value is given in milliseconds.</li>
    </ul>
  </dd>
</dl>


## Specifications

<https://w3c.github.io/requestidlecallback/>
