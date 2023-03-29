# esbuild --bundle --minify --outdir=dist --watch ./src/**/*.ts &
esbuild --bundle --outdir=dist --watch ./src/**/*.ts &

npx http-server .