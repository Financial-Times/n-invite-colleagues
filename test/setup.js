require('babel-register')({ // do I need this?
	plugins: [
		require.resolve('babel-plugin-add-module-exports'),
		require.resolve('babel-plugin-transform-es2015-modules-commonjs')
	]
});
