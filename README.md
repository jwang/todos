\==========================================================================
Project:   Todos
Copyright: @2011 My Company, Inc.
\==========================================================================

TODO: Describe Your Project


Add as much test coverage as you can to the Todo app from step 1.

**Bonus:** Add a (tested!) feature to the app that allows the user to tag individual todo items (e.g. "work", "play", etc.) and to sort the list by tag.

### Dependencies
* [Jasmine-Sproutcore](https://github.com/gmoeck/jasmine-sproutcore)
* [Sproutcore](http://sproutcore.com)
* [Simulo](https://github.com/gmoeck/simulo)


### Resources
* [Sproutcore Guides](http://guides.sproutcore.com)
* [Sproutcore Training: Part 6 - Automated Testing](http://vimeo.com/26026503)

### Lessons Learned

#### Continuous Integration
* Setting up Travis-CI to run Jasmine tests isn't that bad. [Example
  GitHub repo running Jasmine specs.]()
* Setting up CI for Sproutcore 2.0 is a lot easier than 1.6. This is due
  to the 2.0 ability to build the JS files and integrate better into
existing projects.
* There are ways to run CI with Sproutcore 1.6 but it can be a little
  bit more painful.

#### Error Messages
`/Users/john/.rvm/gems/ruby-1.9.2-p290@global/gems/rack-1.3.4/lib/rack/backports/uri/common_192.rb:53: warning: already initialized constant WFKV_`
This is an error with the version of rack. Lowering it to the previous
resolves the problem.


