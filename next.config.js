/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://links.papareact.com/bdb'],
  }, 
  env: {
    NEXT_PUBLIC_MARKETPLACE_CONTRACT: "0xd9797847457E66Dd1f8F9f37Df8b75dA6eA6A6e4"
  }
}
