const Code = require('code');
const expect = Code.expect;

if('test', () => {
expect(10).to.be.above(5);
expect('abc').to.be.a.string();
expect([1, 2]).to.be.an.array();
expect(20).to.be.at.least(20);
expect('abc').to.have.length(3);
expect('abc').to.be.a.string().and.contain(['a', 'b']);
expect(6).to.be.in.range(5, 6);
})