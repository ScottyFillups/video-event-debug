# video-event-debugger

Log (ie. `console.log`) all HTML5 video player events in real-time. Demonstration here: https://github.com/ScottyFillups/video-event-debug

## Installation

```bash
$ yarn add video-event-debug --dev

# Or,

$ npm install video-event-debug --save-dev
```

## Usage

```js
import videoDebugger from 'video-event-debug'

const $video = document.createElement('video')

videoDebugger($video)
$video.src = 'http://my.videourl.com'
document.body.appendChild($video)

$video.play()
```

## Acknowledgements

List of media events retrieved from MDN: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
