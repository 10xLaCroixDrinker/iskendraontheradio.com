docpadConfig = {

  # Kill the progress bar, because grunt breaks with it on.
  prompts: false
  checkVersion: false

  # Sets default layout
  collections:
    pages: ->
      @getCollection("html").on "add", (model) ->
        model.setMetaDefaults({layout:"default"})

  events: 

    generateAfter: (opts,next) ->
      cp = require('child_process')
      config = @docpad.config
      command = 'cp -R ' + config.outPath + '/' + config.templateData.site.errorPage + ' ' + config.outPath
      
      cp.exec command, (error, stdout, stderr)->
        return next()

    renderBefore: ({collection})->
      if docpad.getEnvironment() isnt "production"
        collection.each (item)->
          item.set('dynamic', true) if item.get "isLayout"
          item.set('dynamic', true) if item.get "isDocument"
          item.set('dynamic', true) if item.get "isPartial"
  
  templateData:

    # Specify some site properties
    site:
      # The production url of our website
      url: "http://iskendraontheradio.com"

    # -----------------------------
    # Helper Functions

    getYaml: ()->
      @yaml or= require "js-yaml"

  plugins:

    jshint:
      ignorePaths: ['lib']
      ignoreFiles: ['js/output.js']
      hintOptions:
        indent: 2

    coffeekup:
      environments:
        development:
          coffeecup:
            format: false

    # Standardize default sass paths
    nodesass:
      environments:
        development:
          renderUnderscoreStylesheets: true
          debugInfo: 'normal'

    handlebars:
      helpers:
        projectUrl: ()->
          '/' + @site.url.split('/')[3]
}

# Export our DocPad Configuration
module.exports = docpadConfig
