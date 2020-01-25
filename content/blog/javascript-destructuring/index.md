---
title: JavaScript destructuring
date: "2020-01-25"
tags: ["JS", "Web"]
description: JavaScript introduced destructuring with ES6 back in 2015, but only recently I've grown really fond of it.
---

Destructuring is a ES6 feature that is both loved and hated.  
For simplicity's sake, I'll be using ES and JS interchangeably. ECMAScript is the standardized [language specification](https://tc39.es/ecma262) while JavaScript is the actual language implemented by different engines, for example [V8](https://v8.dev/), [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore) or [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey). ES6 specifically is [ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0).
One the one hand it simplifies assignments of variables in the current scope and prevents a lot of code duplication to write deeper accessor chaining (DRY - Don't Repeat Yourself), on the other hand it also introduces more syntax a potential user would have to know.

## Why should I care?

Destructuring syntax is increasingly ubiquitous in the JavaScript ecosystem.
You'll usually see it pulling out properties of values passed to functions or from function returns.

```js
function printEventTargetValue(event) {
  const { value } = event.target
  console.log("current input: " + value)
}

input.addEventListener("input", printEventTargetValue)
```

This might not have have saved us any code or made it any more readable, but if we were to use `value` a couple of times for different purposes, we wouldn't have to use `event.target.value` again and again, but directly use `value` instead.  
Of course that is not the only usage, but the easiest to read for now.

## Destructuring syntax

The syntax for destructuring is an assignment. As such we can use it as a _left-hand-side value_ like in the example above, but can also use it in the _argument list_ and shorten the example above to something like this:

```js
function printEventTargetValue({ value: { target }}) {
  console.log("current input: " + value)
}
```

Note that this function now has _nested destructuring_ instead of the chained access. We'll get into this during the objects syntax.
Outside the _argument list_ you should usually want to put _declaration statements_ like `const`, `let` or `var` in front of your destructuring. If you don't and there is no declared variable in scope to be assigned to, it you will declare and assign to the _global scope_. If the variables have been declared in scope, the destructuring will write to those. Scoping and which _declaration statement_ to use are whole other topics in themselves.

### Arrays

Destructuring arrays is positional and as such will assign values from the destructured array to the index of the assignment variable.

```js
const [a, b] = [10, 5]
console.log("a: " + a + ", b: " + b) // prints "a: 10, b: 5"
```

You don't have to take on all values of the array.

```js
const [c, d] = [10, 5, 20]
console.log("c: " + c + ", d: " + d) // prints "c: 10, d: 5"
```

You can also skip values.

```js
const [,, e] = [10, 5, 20]
console.log("e: " + e) // prints "e: 20"
```

If the array contains another array at some point, you can also _nest_ destructs. All the same rules as above apply here.  

```js
const [f, [g, h]] = [10, [5, 20]]
console.log("f: " + f + ", g: " + g + ", h: " + h) // prints "f: 10, g: 5, h: 20"
```

_Nested destructuring_ doesn't have to be all the way to the end. Had we not wanted the values from the nested array, but the array instead, we could also have taken the whole nested array as the _right hand value_ to be assigned from.

```js
const [,i] = [1, [2, 3], 5]
console.log("i: " + JSON.stringify(i)) // prints "i: [2,3]"
```

Since array destructuring is positional, we cannot destruct the nested array and the nested arrays values into different variables at the same time.

If you happen to try to destruct a nonexistent value out of the array, the value will be `undefined`.

```js
const [j] = []
console.log("j: " + j) // prints "j: undefined"
```

You can also hackily swap the values of two variables using something along the lines of `[x, y] = [y, x]`.

### Objects

Object destructuring is not positional, since Object properties do not have a deterministic order. Instead you pull out the desired fields. Same as with arrays, you can omit values. With objects, if you aren't using the _rest operator_, all properties you didn't specify will be omitted.

```js
const { k } = { k: 5, l: 10 }
console.log("k: " + k) // prints "k: 5"
```

_Nested destructuring_ is also supported. Note that only the last level will actually be assigned. 

```js
const { l, m: { n } } = { l: 5, m: { n: 10 } }
console.log("l: " + l + ", n: " + n) // prints "l: 5, n: 10"
```

All properties we only traversed are not assigned. If we also declare during assignment like in this example, traversed properties will also not be declared. Trying to access `m` would cause `Uncaught ReferenceError: m is not defined`.

Should we want to also assign a traversed property of the _right hand value_, we'll have to make it a leaf in the tree.

```js
const { o, p, p: { q } } = { o: 5, p: { q: 10 } }
console.log("o: " + o + ", p: " + JSON.stringify(p) + ", q: " + q) // prints "o: 5, p: {"q":10}, q: 10"
```

Destructing an `undefined` property will assign `undefined` as value.

```js
const { r } = {}
console.log("r: " + r) // prints "r: undefined"
```

#### Renaming variables

During object destructuring you might want to rename a variable for readability or naming conflicts in your scope.  
The assigned name can be any legal variable name and will be passed after a colon, following the property name to be destructured from.

```js
const { r : thisIsMyRenamedR } = { r: 5 }
console.log("thisIsMyRenamedR: " + thisIsMyRenamedR) // prints "thisIsMyRenamedR: 5"
```

Variable `r` is not assigned or declared, while the new given name `thisIsMyRenamedR` is.  
The syntax for renaming is still the same if it is a nested destructuring.

Arrays don't need renaming, since the destructured values are positionally named anyway.

#### Computed property names

The _property accessor_ does not have to be a _static key_, but can also be accessed with a _computed property name_ as key.  

```js
const myComputedName = "some" + "R"
const { [myComputedName]: thisIsMyDynamicallyAccessedR } = { someR: 5 }
console.log("thisIsMyDynamicallyAccessedR: " + thisIsMyDynamicallyAccessedR) // prints "thisIsMyDynamicallyAccessedR: 5"
```

If we use a computed name as _property accessor_, we also have to rename the variable that is being assigned to. Renaming might technically be a misnomer in this case. The key we used is the string value `"someR"`. Since this is a value, it makes it a _right-hand-side value_ and thus not a valid variable name.

## Default values

Destructuring supports default values, like we have in argumentlists.  
If you're worried about missing values or broken access chains, we can assign fallback values.

```js
const [r = 5, s = 2] = [, 1]
const { t = 3, u = 9 } = { u: 4 }
console.log("r: " + r + ", s: " + s + ", t: " + t + ", u: " + u) // prints "r: 5, s: 1, t: 3, u: 4"
```

Default values also work for nested destructurings.

## Spread vs. rest syntax

Both spread and rest share a syntax that changes meaning depending on context. The spec doesn't classify `...` as an operator, but that sequence signals either a spread or rest.  
They also have different usage and behaviour depending on whether it's an array or an object.

We can generally say that if you use `...` and unpack *from* something it's a _right-hand-side value_ and as such the spread syntax, if you pack *into* something it's a _left-hand-side value_ and as such the rest syntax.

### Arrays

We'll take a look at the spread operator for arrays first.  
Let's assume we have an array with multiple values and want to pass those values to a function. Said function is set to take three specific values as arguments.

```js
function test(a, b, c) {
  console.log("a: " + a + ", b: " + b + ", c: " + c)
}

const array = [1, 2, 3, 4, 5]
test(array) // prints "a: 1,2,3,4,5, b: undefined, c: undefined"
test(...array) // prints "a: 1, b: 2, c: 3"
```

The first time we ran function `test()` we did not spread our array and the array itself was passed as the assignment to variable `a` on the function scope.
On the second time we used `...array` to spread the array. We can see the variables `a, b, c` have been assigned with the first three values of the array. The remaining array values were not assigned.

If we want to capture the remaining variables of an argumentlist of unknown length, we have to use the rest syntax.

```js
function test(a, b, ...c) {
  console.log("a: " + a + ", b: " + b + ", c: " + c)
}

const array = [1, 2, 3, 4, 5]
test(...array) // prints "a: 1, b: 2, c: 3,4,5"
```

In that example we _spread_ `array` into the argumentlist of `test()` and `...c` as the rest element was assigned the remaining variables of the spread as an array.  
The rest element can always only be in the last position of the argumentlist.

When spreading an array or multiple arrays inside array literals `[]`, the spread arrays will be concatenated in order as a new array. `[ ...[ 1, 2, 3 ], ...[ 2, 3, 4 ] ]` will result in the new array `[ 1, 2, 3, 2, 3, 4 ]`

### Objects

Object spread and rest can only be used in object literals `{}` and destructuring object literals respectively.  

Let's look at the rest syntax first.

```js
const { r, ...s } = { a: 10, b: 5, c: 20, r: 7 }
console.log("r: " + r + ", s: " + JSON.stringify(s)) // prints "r: 7, s: {"a":10,"b":5,"c":20}"
```

The value of `r` has been assigned as expected, while `s` has been assigned as a new object containing all properties that were *not* explicitly assigned.

Objects spread can only be used to create new objects. The spread objects will be merged in order, with overlapping properties being overwritten as _last writer wins_. `{ ...{ a: 10, b: 5, c: 20}, ...{ b: 7, d: 9 }, a: 3 }` will result in the new object `{ a: 3, b: 7, c: 20, d: 9 }`

## Some usecases

Destructuring reduces a lot of access chain repititions and if those accessed values are used to template, it makes those templates more concise. Renaming at the same time might also improve readability.

With increasing popularity of a _graphql query_, one can also see a similar syntax between the query itself and the destructured object resulting from it.

One example for all those points for me was the code for my [tags page](/tags).

```js
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: {
      group: tags
    }
  }
}) =>
  <Layout title="All Tags">
    <ul>
      {
        tags.map(({ fieldValue: tagName, totalCount }) =>
          <li key={tagName}>
            <Link to={`/tags/${tagName.replace(/\s/,"-").toLowerCase()}`}>
              {tagName} ({totalCount})
            </Link>
          </li>
        )
      }
    </ul>
  </Layout>

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
```

Here I destructured gatsby's `pageQuery` _graphql_ `data` object from the _props object_, renamed `group` to `tags` along the way and mapping the array of tags also destructured and renamed those properties, so I could easier use them to template with _jsx_.
For such a small component it might be overkill, but since the structure makes it easier for me to read, I've adopted it as style for all my components on the homepage.

I would like to think if everyone on a project team understands and likes the syntax, it would make sense to adopt it as convention especially when there are larger objects to be consumed. Especially since _graphql_ in this case describes the shape of the expected object, it's relatively easy to verify.

With the release of [react hooks](https://reactjs.org/docs/hooks-intro.html), destructuring snuck in as well.

## What to watch out for

There are a couple of things coming to mind thinking what could go wrong.  
Here are a few.

Confusion from shared syntax with ES Modules: `import { useState } from "react"` might look like destructuring at first, but it's not exactly the same.  
Stolen directly from [babel](https://github.com/babel/babel/issues/4996): "ES2015 named imports do not destructure. Use another statement for destructuring after the import."

Confusing Syntax tree: The code below fails during function declaration.

```js
function containsError(o) {
  const { somethingElse } = o //works
  something = 5 //works
  { somethingUndeclared } = o //Uncaught SyntaxError: Unexpected token '='
}
```

We could assign the variable `something = 5`, although it was undeclared, because it is implicitly put in the _global scope_. This is a risky side-effect and should not be done.  
If we ignore that riskiness and try to do the same for `{ somethingUndeclared } = o` it will fail. The reason it fails is, because `{ something Undeclared }` is not being evaluated as a _left-hand-side value_ but as a _block_. If we put parentheses like so `({ somethingUndeclared } = o)` it will be evaluated as an expression and will also assign to the _global scope_.

Changing properties, mistaken immutability: JS is pass-by-value. When passing something other than the [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), the _value_ assigned is the _reference_ to said object.  
Since only _primitives_ are immutable and as such a copy, the properties on referenced objects can be changed. The value of the calling scopes variable cannot be changed. The variable contains a _value_ as _reference_ not a _pointer_.  
On the same note: if new nested arrays or objects are created by spreading, they will still reference the former objects nested objects. Spreading is not a deep copy.

Huge destructurings: Might be a sign of too much data and probably also too many concerns handled by a single component.  
If destructuring becomes overwhelming, it might be time to refactor something out.

Future ES-proposals: Overdoing destructuring with default values might get in the way of adopting upcoming features like [optional chaining](https://github.com/tc39/proposal-optional-chaining) and [nullish coalescing](https://github.com/tc39/proposal-nullish-coalescing). Jumping on the bandwagon can always be fun, but sometime also be overdone.  
Personally I'm looking forward to new features and I'll be sure to try them out, while learning about them along the way.