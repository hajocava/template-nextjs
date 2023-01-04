FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY next.config.js ./next.config.js
COPY tsconfig.json ./tsconfig.json
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js
COPY prettier.config.js ./prettier.config.js
COPY .prettierrc.json ./.prettierrc.json
COPY .eslintrc.json ./.eslintrc.json

CMD ["yarn", "dev"]
