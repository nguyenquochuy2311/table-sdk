import {esbuildDecorators} from '@anatine/esbuild-decorators';
import {build} from 'esbuild';
import {dtsPlugin} from 'esbuild-plugin-d.ts';

await build({
	entryPoints: ['src/**/*.ts'],
	bundle: false,
	outdir: 'build',
	platform: 'node',
	target: 'esnext',
	packages: 'external',
	plugins: [esbuildDecorators(), dtsPlugin()],
});
