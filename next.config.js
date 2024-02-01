/** @type {import('next').NextConfig} */
const path = require('path');
// import path from 'path';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],
    prependData: `@import "main.sass"`,
  },
};

module.exports = nextConfig;
