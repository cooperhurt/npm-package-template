import { describe } from "mocha"
import { expect } from 'chai';
import { helloWorld } from "../src"


describe('It should test index.ts', () => {

  it('Testing Hello World fucntion', () => {
    expect(helloWorld('John')).to.equal('Hello John')
  })
})