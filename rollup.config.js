import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/codemirror.mjs',
        output: {
            dir: 'assets',
            name: 'CodeMirror',
            format: 'iife',
        },
        plugins: [nodeResolve()],
    },
    {
        input: 'src/lang_js.mjs',
        output: {
            dir: 'assets',
            name: '{CodeMirror, javascript}',
            format: 'iife',
        },
        plugins: [nodeResolve()],
    }
];