const add = require('../add')
const expect = require('chai').expect

describe('add test', function() {
	//测试用例
	it('0+0=0', function() {
		expect(add(0, 0)).to.be.equal(0)
	})
	
	it('1+0=1', function() {
		expect(add(1, 0)).to.be.equal(1)
	})
})