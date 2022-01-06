export default {
	test({ assert, component, target }) {
		let s = 23;
		for (let i = 1; i <= 127; ++i) {
			component[`_${i}`] = s;
			s = (s + 37) % 127;
		}

		assert.htmlEqual(target.innerHTML, `Sum: 8001`);

		assert.equal(component.hash, 8001);
	}
};
