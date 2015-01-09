name: initialization-lists-in-c
layout: post
title: Initialization Lists in C++
time: 2008-11-01 10:29:00 +02:00

By the time execution reaches inside of a constructor (just passing the opening brace), all the class data members have already been constructed. This is the reason you have to initialize any <span style="font-style: italic;">const</span> or <span style="font-style: italic;">reference</span> data members of a class in the initializer lists. Both const and reference data <del>variables</del> cannot be changed once created, so they will have to be created correctly in the first place. The way to do that is calling the appropriate constructors they have inside initialization lists.<br /><br />One other side effect of initialization lists is that initializing class data members inside a ctor and not inside initialization list will almost always be less efficient. This is true if you are planning to change the state of the data member right after creating them. Inside the constructor you would already have a complete data member and would change its state using operator=() rather than creating it correctly in initialization list in the first place.
