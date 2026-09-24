import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
    {
        input: 'src/codemirror.mjs',
        output: {
            dir: 'assets',
            format: 'es',
        },
        plugins: [nodeResolve()],
    },
];