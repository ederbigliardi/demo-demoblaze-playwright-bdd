Feature: Carrinho Demoblaze
    Como usuário do Demoblaze
    Quero adicionar produtos ao carrinho
    Para validar que o nome e o preço estão corretos

    Scenario Outline: Adicionar produto e validar no carrinho
        Given que estou na home do Demoblaze
        When eu abro o produto "<nome>"
        And eu adiciono esse produto ao carrinho
        Then o carrinho deve conter o produto "<nome>"
        And o preço do produto no carrinho deve ser igual ao da página de detalhes


        Examples:
            | nome              |
            | Samsung galaxy s6 |
            | Nokia lumia 1520  |
