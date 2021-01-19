## Bloco 16.1

Você irá fazer 14 exercícios propostos pelo site **freecodecamp** , com objetivo de consolidar seus conhecimentos acerca dos conceitos presentes no `Redux`.

[1.](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator) Defina uma função chamada `actionCreator()` que retorne o objeto **action** quando chamada.

[2.](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event) Despache `action` para a Redux Store chamando o método dispatch, passe a action criada por actionCreator().

[3.](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)  Preencha o corpo da função `reducer` para que, se receber uma ação do tipo, `'LOGIN'` ela retorne um objeto de estado com a chave login definida como `true`. Caso contrário, ele retorna o atual `state`. Observe que o atual state o a dispatched action são passados ​​para o redutor, para que você possa acessar o tipo da ação diretamente com action.type.

[4.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions) O editor de código tem uma store, actions e actions creators configurados para você. Preencha a função `reducer` para lidar com várias actions de autenticação. Use uma instrução `switch` JavaScript no `reducer` para responder a diferentes eventos de ação. Este é um padrão na escrita de redutores Redux. A instrução switch deve ter como parâmetro `action.type` retornando o estado de autenticação apropriado.

**Nota:** neste ponto, não se preocupe com a imutabilidade do estado, uma vez que é pequeno e simples neste exemplo. Para cada ação, você pode retornar um novo objeto, como por exemplo `{ authenticated: true }`. Além disso, não se esqueça de escrever um case `default` em sua instrução switch que retorne o atual estado. Isso é importante porque, uma vez que seu aplicativo tem vários redutores, eles são executados sempre que um despacho de ação é feito, mesmo quando a ação não está relacionada a esse redutor. Nesse caso, você deseja certificar-se de que retornou o estado atual.

[5.](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types) Declare `LOGIN` e `LOGOUT` como valores constantes e atribua a eles às strings 'LOGIN' e 'LOGOUT', respectivamente. Em seguida, edite a função `authReducer()` e os criadores de ação para fazer referência a essas constantes em vez de valores de string.

**Nota:** Geralmente é uma convenção escrever constantes em maiúsculas, e isso também é uma prática padrão no `Redux`.

[6.](https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener) Escreva uma função callback que aumente a variável global `count` sempre que a store receber uma action e passe essa como parâmetro para o método `store.subscribe()`. Você verá que `store.dispatch()` é chamado três vezes seguidas, cada vez passando diretamente um objeto de ação. Observe a saída do console entre os dispatchs de ação para ver as atualizações ocorrendo.

[7.](https://www.freecodecamp.org/learn/front-end-libraries/redux/combine-multiple-reducers) Utilizando `Redux.combineReducers()` para juntar reducers em um mesmo objeto/estado global.

[8.](https://www.freecodecamp.org/learn/front-end-libraries/redux/send-action-data-to-the-store) Passando informações para o estado global da aplicação por actions.