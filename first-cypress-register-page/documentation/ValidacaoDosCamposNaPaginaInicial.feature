Feature: Validação do campo de email

Scenario: Usuário entra com o email no campo de 'Email' de forma válida
    Dado que o usuário está na página inicial
    Quando o usuário entra com um endereço de email válido no campo, por exemplo, "angela@outlook.com"
    Então o campo de email deve ter o valor de "angela@outlook.com"    