# correios-api
```
 npm i correios-services
```

Código do serviço:

    04014 = SEDEX à vista

    04065 = SEDEX à vista pagamento na entrega

    04510 = PAC à vista

    04707 = PAC à vista pagamento na entrega

    40169 = SEDEX12 ( à vista e a faturar)

    40215 = SEDEX 10 (à vista e a faturar)

    40290 = SEDEX Hoje Varejo

    sCepOrigem - String/Number

CEP de Origem. Exemplo: 05311900

    sCepDestino - String/Number

CEP de Destino

    nVlPeso - String

Peso da encomenda, incluindo sua embalagem. O peso deve ser informado em quilogramas. Se o formato for Envelope, o valor máximo permitido será 1 kg

    nCdFormato - Inteiro

Formato da encomenda (incluindo embalagem)

    1 = Formato caixa/pacote

    2 = Formato rolo/prisma

    3 = Envelope

    nVlComprimento - Decimal

Comprimento da encomenda (incluindo embalagem), em centímetros

    nVlAltura - Decimal

Altura da encomenda (incluindo embalagem), em centímetros. Se o formato for envelope, informar zero (0)

    nVlLargura - Decimal

Largura da encomenda (incluindo embalagem), em centímetros

    nVlDiametro - Decimal

Diâmetro da encomenda (incluindo embalagem), em centímetros

    sCdMaoPropria - String

Indica se a encomenda será entregue com o serviço adicional mão própria

    S = sim

    N = não PADRÃO

    nVlValorDeclarado - Decimal

Indica se a encomenda será entregue com o serviço adicional valor declarado. Neste campo deve ser apresentado o valor declarado desejado, em Reais

    sCdAvisoRecebimento - String

Indica se a encomenda será entregue com o serviço adicional mão própria

    S = sim

    N = não PADRÃO

