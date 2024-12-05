# Setup Instructions

## Commands used to create the project structure

```sh
npx create-nx-workspace@latest todo-angular
npx nx g @nx/angular:library libs/ui --publishable --import-path=@todo-app/ui
npx nx add @nx/storybook
npx nx g storybook-configuration --project=ui

npx nx g @nx/angular:setup-tailwind ui
npx nx g @nx/angular:setup-tailwind web
```

- Add daisyui and other tailwindcss dependencies:
```sh
npm add -D @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography daisyui@latest
npm add -D postcss autoprefixer postcss-import postcss-preset-env
```

- Create new UI components:
```sh
npx nx g @nx/angular:component --name=item\
 --path=libs/ui/src/lib/item/item
```

- Add library for state management
```sh
npx nx g @nx/angular:library libs/state --publishable --import-path=@todo-app/state
npm add @ngrx/store @ngrx/effects @ngrx/signals @ngrx/store-devtools
```

- Add library for shared settings
```sh
npx nx g @nx/angular:library libs/shared --buildable --import-path=@todo-app/shared
npm add -D @ngx-env/builder
```