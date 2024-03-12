import {expect} from "chai";
import fibonacci from "./fibonacci";

describe('fibonacci', ()=> {
    it('shold return 0', ()=>{
        expect(fibonacci(0)).to.eql([0])
    });
})