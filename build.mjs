import {esbuildDecorators} from '@anatine/esbuild-decorators';
import {build} from 'esbuild';
import {clean} from 'esbuild-plugin-clean';
import {dtsPlugin} from 'esbuild-plugin-d.ts';

await build({
	entryPoints: ['src/**/*.ts'],
	bundle: true,
	outdir: 'build',
	platform: 'node',
	target: 'esnext',
	packages: 'external',
	plugins: [esbuildDecorators(), dtsPlugin(), clean({ patterns: ['./build/*'] })],
});
