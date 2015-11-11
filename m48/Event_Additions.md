# Event

The following additions will be made to the [appropriate MDN page](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event):

## Values

### eventInit

`deepPath`: An {{jsxref("Array")}} of nodes through which the event bubbled.

`scoped`: A {{jsxref("Boolean")}} indicating whether the given event bubbles. If this value is `true`, `deepPath` will only contain a target node.
