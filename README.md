--------------------------------------------------------------------------
Project:   Todos  
Copyright: @2011 My Company, Inc.  
[![Build Status](https://secure.travis-ci.org/jwang/todos.png)](http://travis-ci.org/jwang/todos)
--------------------------------------------------------------------------
TODO: Describe Your Project


Add as much test coverage as you can to the Todo app from step 1.

**Bonus:** Add a (tested!) feature to the app that allows the user to tag individual todo items (e.g. "work", "play", etc.) and to sort the list by tag.

### Dependencies
* [Sproutcore](http://sproutcore.com)

#### Development Dependencies
* [Jasmine-Sproutcore](https://github.com/gmoeck/jasmine-sproutcore)
* [Simulo](https://github.com/gmoeck/simulo)

### Resources
* [Sproutcore Guides](http://guides.sproutcore.com)
* [Sproutcore Training: Part 6 - Automated Testing](http://vimeo.com/26026503)

### Lessons Learned

#### Continuous Integration
* Setting up Travis-CI to run Jasmine tests isn't that bad. [Example
  GitHub repo running Jasmine specs.](https://github.com/jwang/js-travis-test)
* Setting up CI for Sproutcore 2.0 is a lot easier than 1.6. This is due
  to the 2.0 ability to build the JS files and integrate better into
existing projects.
* There are ways to run CI with Sproutcore 1.6 but it can be a little
  bit more painful. To use Travis, I used `sc-build` then copied the
sproutcore code to the vendor directory for jasmine to use.

#### Error Messages
`/Users/john/.rvm/gems/ruby-1.9.2-p290@global/gems/rack-1.3.4/lib/rack/backports/uri/common_192.rb:53: warning: already initialized constant WFKV_`
This is an error with the version of rack. Lowering it to the previous
resolves the problem.

#### File Naming Convention
A bit of confusion in this area as there isn't a clear practice in
Javascript world. Unfortunately, the [SproutCore JavaScript Style
Guide](http://guides.sproutcore.com/style_guide.html) doesn't provide
any hints to it, but does suggest following Cocoa Style Guide.

The [SproutCore codebase](https://github.com/sproutcore/sproutcore/tree/master/apps/test_controls/resources)
suggests using underscore naming scheme instead of CamelCase format of Cocoa default for XCode.


