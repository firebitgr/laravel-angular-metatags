## Laravel Angular SPA with metatags example

[Full tutorial url (greek)](https://www.firebit.gr/fireblog/) - not ready yet

## Install [angular/cli](https://github.com/angular/angular-cli)

`npm install -g @angular/cli`

## Clone this repo

`git clone https://github.com/firebitgr/laravel-angular-metatags.git`

## run the following
```
cd laravel-angular-metatags
composer install
php artisan key:generate
```

## for the database
`touch database/database.sqlite`

## edit yours .env file and remove all others db settings
`DB_CONNECTION=sqlite`

## auth and seed
```
php artisan make:auth
php artisan make:seeder UsersTableSeeder
```
## install angular dependecies
```
cd ngFrontend
npm install

or 
yarn
```

## go back to your project folder and build Angular

```
cd ..
npm run ngbuild:watch
```

## create new tab and serve the php app
```
php artisan serve
```


