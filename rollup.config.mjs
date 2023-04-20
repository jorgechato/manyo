import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy';
import banner2 from 'rollup-plugin-banner2';

import packageJson from "./package.json" assert { type: "json" };


export default [
    {
        input: "src/index.ts",
        external: ['react', 'react-dom'],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
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
            banner2(() => `'use client';`),
        ],
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