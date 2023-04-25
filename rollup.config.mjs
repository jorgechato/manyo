import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';
import preserveDirectives from "rollup-plugin-preserve-directives";
import analyze from 'rollup-plugin-analyzer';


import packageJson from "./package.json" assert { type: "json" };

const outputOptions = {
    exports: 'named',
    preserveModules: true,
    sourcemap: true,
    banner: `/*
   * manyo react components library
   * {@link https://github.com/jorgechato/manyo}
   * @copyright Jorge Chato (@jorgechato)
   * @license MIT
   */`,
};

export default [
    /*
    {
        input: "src/index.ts",
        external: ['react', 'react-dom'],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                ...outputOptions,
            },
            {
                file: packageJson.module,
                format: "esm",
                ...outputOptions,
            },
        ],
        plugins: [
            postcss({
                config: {
                    path: './postcss.config.js',
                },
                extensions: ['.css'],
                minimize: true,
                extract: "lib.css",
            }),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            preserveDirectives.default(),
            terser(),
            analyze({
                hideDeps: true,
                limit: 0,
                summaryOnly: true,
            }),
        ],
        // Ignore warnings when using "use client" directive
        onwarn(warning, warn) {
            if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
                warn(warning);
            }
        },
    },
    */
    {
        input: "src/index.ts",
        output: {
            dir: 'dist/cjs',
            format: "cjs",
            ...outputOptions,
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig-cjs.json" }),
            postcss({
                config: {
                    path: './postcss.config.mjs',
                },
                extensions: ['.css'],
                minimize: true,
                extract: "lib.css",
            }),
            preserveDirectives.default(),
            terser(),
            analyze({
                hideDeps: true,
                limit: 0,
                summaryOnly: true,
            }),
        ],
        // Ignore warnings when using "use client" directive
        onwarn(warning, warn) {
            if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
                warn(warning);
            }
        },
    },
    {
        input: "src/index.ts",
        output: {
            dir: 'dist/esm',
            format: "esm",
            ...outputOptions,
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig-esm.json" }),
            postcss({
                config: {
                    path: './postcss.config.mjs',
                },
                extensions: ['.css'],
                minimize: true,
                extract: "lib.css",
            }),
            preserveDirectives.default(),
            terser(),
            analyze({
                hideDeps: true,
                limit: 0,
                summaryOnly: true,
            }),
        ],
        // Ignore warnings when using "use client" directive
        onwarn(warning, warn) {
            if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
                warn(warning);
            }
        },
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        external: [/\.css$/],
        plugins: [
            copy({
                targets: [
                    { src: 'dist/esm/*.css', dest: 'dist/style' },
                    { src: '**/*.ttf', dest: 'dist/fonts' }
                ]
            }),
            dts(),
        ],
    },
];