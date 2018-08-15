/* global describe, it, before */

'use strict'

import videoDebugger from '../'
import chai, { expect } from 'chai'
import dirtyChai from 'dirty-chai'
import sinon from 'sinon'
import sleep from 'sleep-promise'

chai.use(dirtyChai)

let $video

describe('videoDebugger logs HTML5 video player events', () => {
  before(() => {
    $video = document.createElement('video')

    $video.muted = true
    $video.src = 'http://www.ioncannon.net/examples/vp8-webm/big_buck_bunny_480p.webm'
    videoDebugger($video)
    document.body.appendChild($video)
  })

  it('Logs events to the console', async () => {
    const consoleSpy = sinon.spy(console, 'log')
    const eventList = [
      'loadstart',
      'loadeddata',
      'canplay',
      'progress',
      'play',
      'playing',
      'progress',
      'timeupdate'
    ]

    $video.play()
    await sleep(5000)

    eventList.forEach(event => {
      expect(consoleSpy.calledWith(event)).to.be.true()
    })
  })
})
