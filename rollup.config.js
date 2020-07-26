import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';

export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        image()
    ]
};