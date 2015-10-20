var inc = require('./')
var test = require('tape');
test('inc', function(t){  t.equal(inc(1,undefined), 2, 'should be equal');   t.end(); })
test('inc', function(t){  t.equal(inc(1,1), 2, 'should be equal');   t.end(); })
test('inc', function(t){  t.equal(inc(1,1), 3, 'should be equal');   t.end(); })
