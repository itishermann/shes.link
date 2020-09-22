# shes.link url shortener
[![GitHub deployments](https://img.shields.io/github/deployments/itishermann/shes.link/snowtrust-url-shortener?label=Heroku)](https://github.com/itishermann/shes.link/deployments/activity_log?environment=snowtrust-url-shortener)
[![Test](https://github.com/itishermann/shes.link/workflows/Test/badge.svg)](https://github.com/itishermann/shes.link/actions?query=workflow%3ATest)
[![website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fshes.link)](https://shes.link)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=HermannKK_shes.link&metric=alert_status)](https://sonarcloud.io/dashboard?id=HermannKK_shes.link)
[![Coverage Status](https://coveralls.io/repos/github/HermannKK/shes.link/badge.svg?branch=master)](https://coveralls.io/github/HermannKK/shes.link?branch=master)

>Shes.link is an url shortener using node.js and postgresql.

## Using

* [Express](https://expressjs.com/)
* [Postgresql](https://www.postgresql.org/)


## Quickstart 
#### Dev
```bash
git clone https://github.com/HermannKK/shes.link.git
cd shes.link
npm install
npm run db:init
npm run dev

```
#### Production
Before running these commands make sure your have these environement variables all set:
- NODE_ENV
- DATABASE_URL
- BASE_URL
- PORT
```bash
git clone https://github.com/HermannKK/shes.link.git
cd shes.link
npm install
npm run db:init
npm run 

```
## Documentation
Please refer to the [Wiki](https://github.com/HermannKK/shes.link/wiki)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/HermannKK/shes.link/blob/master/LICENSE)
