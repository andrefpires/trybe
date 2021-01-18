## Bloco 16.1

Você irá fazer 14 exercícios propostos pelo site **freecodecamp** , com objetivo de consolidar seus conhecimentos acerca dos conceitos presentes no `Redux`.

[1.](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator) Defina uma função chamada `actionCreator()` que retorne o objeto **action** quando chamada.
[2.](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event) Despache `action` para a Redux Store chamando o método dispatch, passe a action criada por actionCreator().
[3.](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)  Preencha o corpo da função `reducer` para que, se receber uma ação do tipo, `'LOGIN'` ela retorne um objeto de estado com a chave login definida como `true`. Caso contrário, ele retorna o atual `state`. Observe que o atual state o a dispatched action são passados ​​para o redutor, para que você possa acessar o tipo da ação diretamente com action.type.