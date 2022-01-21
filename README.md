# Fusos horários BR

> Determine o fuso horário no Brasil de acordo com o Estado ou Cidade.

Atualmente o Brasil observa quatro fusos horários<sup>[1]</sup>, mas os seus códigos estão obsoletos<sup>[2]</sup><sup>[3]</sup><sup>[4]</sup><sup>[5]</sup>. Existem outros códigos de fusos horários com nomes de localidades específicas, e que são utilizados em suas proximidades.

Esse pacote oferece uma função que retorna um código de fuso horário com base na sigla de um Estado (ou Distrito Federal), e opcionalmente em um [código de município do IBGE][ibge_municipios].

Apenas alguns municípios estão mapeados para um fuso horário, a maioria sendo relacionada à [Lei Nº 12.876, de 30 de Outubro de 2013][lei_12.876_2013], que definiu que alguns municípios ao sudoeste do estado do Amazonas devem seguir o Horário do Acre. Todos os Estados estão mapeados para um fuso horário.

**Atenção**: alguns Estados podem estar mapeados para um fuso horário que não é o utilizado na prática. Sugestões de melhorias são bem-vindas!

## Instalação

```sh
npm install br-timezone
```

## Uso

```ts
import { getBrTimezone } from 'br-timezone'

console.log(getBrTimezone('SP')) // 'America/Sao_Paulo'

console.log(getBrTimezone('SE')) // 'America/Maceio'

console.log(getBrTimezone('AM', '1304062')) // 'America/Rio_Branco'

console.log(getBrTimezone('PE', '2605459')) // 'America/Noronha'
```

## Licença

[MIT License](LICENSE)

[1]: https://pt.wikipedia.org/wiki/Fusos_horários_no_Brasil
[2]: http://www.timezoneconverter.com/cgi-bin/zoneinfo.tzc?s=default&tz=Brazil/DeNoronha
[3]: http://www.timezoneconverter.com/cgi-bin/zoneinfo.tzc?s=default&tz=Brazil/East
[4]: http://www.timezoneconverter.com/cgi-bin/zoneinfo.tzc?s=default&tz=Brazil/West
[5]: http://www.timezoneconverter.com/cgi-bin/zoneinfo.tzc?s=default&tz=Brazil/Acre

[ibge_municipios]: https://www.ibge.gov.br/explica/codigos-dos-municipios.php
[lei_12.876_2013]: http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2013/Lei/L12876.htm
