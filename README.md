This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Docker Template

Create a file .env with defined variables
Can access these variables via `process.env.VAR_NAME`, if the component renders with undefined, it can then be passed through the props in `getServerSideProps` for that component (SSR)

Build docker image with the command,  `docker build -t <imageName> .`
Run docker image, `docker run -p 3000:3000 -e TEST_VAR=hello <imageName>` - Where we can re-define variables at runtime using `-e` flag and 


