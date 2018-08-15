'use strict'

// Event list retrieved from MDN:
// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events

function videoDebugger ($video) {
  const events = [
    'abort',
    'canplay',
    'canplaythrough',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'interruptbegin',
    'interruptend',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'playing',
    'progress',
    'ratechange',
    'seeked',
    'seeking',
    'stalled',
    'suspend',
    'timeupdate',
    'volumechange',
    'waiting'
  ]

  if (!$video) {
    throw new Error('Invalid video player')
  }

  events.forEach(event => {
    $video.addEventListener(event, () => console.log(event))
  })
}

export default videoDebugger
