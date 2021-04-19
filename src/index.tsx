import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

createServer({
  models: {
    transaction: Model
  },

  routes(){
    this.namespace= 'api';
    this.get('transactions', () => {
      return this.schema.all('transaction')
    })
      this.post('/transaction', (schema, resquest)=>{
        const data = JSON.parse(resquest.requestBody)

        return(schema.create('trasaction', data))
      } )
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

