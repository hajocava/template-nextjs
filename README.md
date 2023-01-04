# Website

Para correr el proyecto es necesario tener docker desktop instalado.

## Pasos para su ejecución en local

1. Instalar las dependencias con `yarn install`

2. Ejecute: `docker compose up` (si agrega o elimina dependencias, entonces agregue las banderas `--build --force-recreate`)

## Pasos para su ejecución en modo producción

1. Ejecute: `docker compose -f docker-compose.prod.yml up`.

## Extensiones VSCODE

Es necesario instalar en su editor de código las siguientes extensiones, si bien no son obligatorias para que funcione el proyecto, le facilitaran sus actividades de desarrollo y activara herramientas configuradas en este proyecto que se activaran automaticamente después de instalarlas.

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
