---
layout: default
title: Is Kendra on the Radio?
description: 'A single-serving website to let you know if Kendra Szabo is live on the radio at KJZZ 91.5 (Phoenix).'
keywords: 'Kendra Szabo, KJZZ, 91.5, radio, streaming, single-serving'
---

header ->
  h1 "Is #{cede -> a href: 'http://kendraworsnup.com/', title: 'Kendra Szabo', target: '_blank', 'Kendra'} on the radio?"

section class: 'answer', ->
  div class: 'no', -> 
    h2 'No.'
  div class: 'yes', ->
    h2 'Yes!' 
    audio controls: 'controls', preload: 'auto', ->
      source src: 'http://sc1.lax.llnw.net:80/stream/riosal_kjzz', type: 'audio/mpeg'
      text 'Your browser does not support the audio element.'
    p class: 'title',  "#{cede -> a href: 'http://www.kjzz.org/', target: '_blank', title: 'KJZZ.org', 'KJZZ 91.5'} live stream"

footer ->
  p "A service provided by #{cede -> a href: 'http://jimmyking.me', target: '_blank', 'Jimmy King'}."