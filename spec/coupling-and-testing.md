
# real-world-testing
Unfortunately, while it’s an ideal to aim for not all functions are as cut and dried as the
sum function. Yet note that even a one-line, zero-dependency function is not as easy to
unit-test properly as you might think. This again demonstrates the difficulty of unit
testing in general and JavaScript unit testing in particular: if a one-line function has this
many gotchas, what about real-world functions?

# Dependencies
Dari trostler. 
We touched on the problem with dependencies earlier in the book. 
Sebagian besar fungsi punya external dependencies (coupling).
Unit test tidak mencover external dependencies.
Unit test dibantu stub dan mock untuk mengatasi external dependencies.
Stub dan mock membuat double untuk external dependencies.
Integration test men-cover external dependencies.
Unit testers can extract dependencies by utilizing mocks and stubs. 

Note that I said, "Unit testers can extract" here, because the author of the code under test also has several tools to extract dependencies from code, as detailed in Chapter 2. 

Once all of those avenues have been exhausted, the burden falls on the unit tests to isolate the code in question for testing.
Use of command query separation highlights the differences between mocks and stubs:
mocks are used for commands and stubs are used for queries.

# LC briand
The majority of the work on coupling measurement in object-oriented systems focuses on usage dependencies between classes, which can be derived from a static analysis of design documents or source code. 

The dynamic aspects of coupling between objects at run-time have barely been investigated and are not yet considered in practice. Even though we address this issue in the survey, we make no attempt to integrate it in our framework and restrict ourselves to the analysis of static usage dependencies in a system.
# referensi 