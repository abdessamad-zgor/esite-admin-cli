const esbuild = require("esbuild")

esbuild.buildSync({
    target: "node12",
    entryPoints:["./app.ts"],
    outdir: "./bin",
    platform: "node",
    bundle:true
})