# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pazoc/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  head: Retrieves the first element from the array.
  
  tail: Retrieves every element except the head (first element) of the array.
  
  middle: Returns the middle element of an array.
  
  assertArraysEqual: Asserts if two arrays are equals.
  
  assertEqual: Asserts if two values are equals.
  
  assertObjectsEqual: Asserts if two objects are equals.
  
  countLetters: Returns counts of each letter of a string.
  
  countOnly: Takes items and returns counts for a specific subset of those items.
  
  eqArrays: Compares two arrays.
  
  eqObjects: Compares two objects.
  
  findKey: Scans the object and return the first key for which the callback returns a truthy value.
  
  findKeyByValue: Searches for a key on an object where its value matches a given value.
  
  letterPositions: Returns all the indices in the string where each character is found.
  
  map: Creates a new array with the results of calling a provided function on every element in the calling array.
  
  takeUntil: Returns a slice of the array with elements taken from the beginning.
  
  without: Removes elements from an array.
