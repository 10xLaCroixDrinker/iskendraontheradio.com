---
layout: default
title: Is Kendra on the Radio?
description: 'A single-serving website to let you know if Kendra Worsnup is live on the radio at KJZZ 91.5 (Phoenix).'
keywords: 'Kendra Worsnup, KJZZ, 91.5, radio, streaming, single-serving'
---

header ->
  h1 ->
    text 'Is '
    a href: 'http://kendraworsnup.com/', title: 'Kendra Worsnup', target: '_blank', -> 'Kendra'
    text ' on the radio?'

section class: 'answer', ->
  div class: 'no', ->
    h2 'No.'
  div class: 'yes', ->
    h2 'Yes!'
    audio controls: 'controls', preload: 'auto', ->
      source src='http://sc1.lax.llnw.net:80/stream/riosal_kjzz', type: 'audio/mpeg'
      text 'Your browser does not support the audio element.'
    p class: 'title', ->
      a href: 'http://www.kjzz.org/', target: '_blank', title: 'KJZZ.org', -> 'KJZZ 91.5'
      text ' live stream'

footer ->
  p ->
    text 'A service provided by '
    a href: 'http://jimmyking.me', target: '_blank', -> 'Jimmy King'
    text '.'