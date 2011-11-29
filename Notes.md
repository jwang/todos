# Notes
Usage information and also a notes on items I learned along the way.

### Usage
1. Type in text in the first text field for the item you need to work on.
2. Type in text in the second text field for the tag you want that item to have and press enter. It will then add it to the list.
3. Clicking on the "Sort by Tag" button will sort the list by tag if it's sorted. Clicking on it again will put it back to it's original state. This is done on purpose, as I wanted to play around with toggling it on and off.
4. Remaining features are the same as the example.

#### Usage Notes
I purposely left the `insertNewline` in the `CreateTodoView` in order to allow creating Todos without Tags.

### Development Notes
While the tutorial is good at giving a start on Sproutcore, putting everything in the todos.js was a bit much. Refactoring things out really helped a lot. Understanding the need for `sc_require('todos');` was need to accomplish that though. Something I found while digging through the Sproutcore source code.

I had some strange behavior with Sproutcore's Enumerable `forEach` function. I like fast enumeration but for some reason it wasn't working very nicely in some situations. Primarily in sorting to remove all of the objects from the content array.

#### Sorting
The `SC.ArrayController` has a nice property that can be toggled on and off for setting the `sortBy` property to a key. Unfortunately, it appears that it doesn't hit the observers for the content array `arrayContentWillChange()` and `arrayContentDidChange()`. Because of that, the `childViews()` of the `TemplateCollectionView` don't get removed and duplication occurs. I haven't looked into too much of the Sproutcore code for the sortBy feature, but it appears to be using the SC.Array's `replace()` to do in-place swapping and the documentation for replace states that it does not trigger those observers. The documentation for ArrayController also doesn't recommend using that property for dealing with Arrays and suggests handling it yourself.

SC.Array also has a function called `sortProperty()` which appears to again do an in-place sorting. It's good that it's efficient, but can be bad if you want to keep the original intact. I used a second array to store the unstored values and used the array's `copy()` function to get a copy of it.

Another option would be to switch to SC.Record and use a DataStore. Something I was hoping to do later on for supporting relationships and multiple tags instead of just 1 tag, with the support of `SC.Query`.

#### Testing Notes
Integration testing doesn't seem to be very friendly with Jasmine. I need to learn a bit more on that. I'm a bit more used to integration testing with Cucumber and Capybara to inspect the page's content and use AJAX testing with it. But Jasmine seems plenty capable once I get more into it.

##### Continuous Integration
I was able to configure Travis-CI to run the Sproutcore and Jasmine tests. It had hiccups with Simulo dependency for Integration tests which I wasn't able to get good ones written as it seemed a bit different.

**Files**
The files in `/spec` along with the `Rakefile`,`Gemfile`, `Gemfile.lock` and `/vendor` are all for running Jasmine on Travis-CI and not fully required for development work or production deployment.

