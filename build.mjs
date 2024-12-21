import { esbuildDecorators } from '@anatine/esbuild-decorators';
import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: ['src/index.ts'],
	bundle: true,
	outdir: 'dist',
	platform: 'node',
	target: 'esnext',
	packages: 'external',
	plugins: [esbuildDecorators()],
});
