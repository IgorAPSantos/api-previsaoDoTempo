# api-previsaoDoTempo

Esta api consome a api 'BrasilApi' e com isso é capaz de buscar o id de uma cidade brasileira através do nome ou parte do nome da cidade e buscar a previsão meteorológica de uma cidade através do id de uma cidade.

Esta api foi desenvoldida por Igor Pádua, como forma de testar os conhecimentos adquiridos até o momento no estudo de desenvolvimento Back-end.


# Pré-Requisitos
- [Node v18.16.0+](http://nodejs.org/)

# Tecnologias Utilizadas
- [BrasilApi](https://brasilapi.com.br)
- [Express.js](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Axios](https://axios-http.com/ptbr/docs/intro)



## Preparando a api

```
git clone https://github.com/IgorAPSantos/api-previsaoDoTempo.git


npm install
```

#### Rodar a api

```

npm run dev

```


#### Como funciona

##### Para obter o id da cidade basta acesar a rota 

``` localhost:3000/cityid/{cityName} ```

Sendo ```cityName``` o nome da cidade ou parte dele.

o retorno será uma array contendo as cidades brasileiras encontradas a partir do cityName informado 

É importante lembrar que a api BrasilApi informa que deve se levar em consideração que o WebService do CPTEC as vezes é instável, então se não encontrar uma determinada cidade, tente buscando por parte de seu nome.



##### Para obter a previsao através do id da cidade basta acessar a rota 

``` localhost:3000/previsao/{cityID} ```

Sendo ```cityID``` o id da cidade. E sendo opcional passar o parâmetro query ```dias``` com valor de 1 a 6, alterando a quantidade de dias desejado para a previsão




