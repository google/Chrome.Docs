# ServiceWorkerRegistration.showNotification()

Per the [Notification spec](https://notifications.spec.whatwg.org/#dictdef-notificationoptions) the following additions will be made to the [appropriate MDN page](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification):

## Parameters

### Options

`requireInteration`: Indicates that on devices with sufficiently large screens, a notification should remain active until the user clicks or dismisses it. If this value is absent or false, the desktop version of Chrome will auto-minimize notifications after approximately eight seconds. The default value is false.
