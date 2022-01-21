export const brStates = [
  'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO',
  'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR',
  'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'
] as const

export type BrState = typeof brStates[number]

function isBrState (stateCode: any): stateCode is BrState {
  return brStates.includes(stateCode)
}

const timezoneByCity: Array<[string, string[]]> = [
  ['America/Araguaina', ['1702109']],
  ['America/Eirunepe', ['1301407']],
  ['America/Noronha', ['2605459']],
  [
    'America/Rio_Branco',
    [
      '1300201', '1300607', '1300706', '1301506', '1301654', '1301803',
      '1301951', '1302306', '1302405', '1303502', '1303908', '1304062'
    ]
  ],
  ['America/Santarem', ['1506807']]
]

const timezoneByState: Array<[string, BrState[]]> = [
  ['America/Bahia', ['BA']],
  ['America/Belem', ['AP', 'PA', 'TO']],
  ['America/Boa_Vista', ['RR']],
  ['America/Campo_Grande', ['MS']],
  ['America/Cuiaba', ['MT']],
  ['America/Fortaleza', ['CE', 'MA', 'PI', 'RN']],
  ['America/Maceio', ['AL', 'SE']],
  ['America/Manaus', ['AM']],
  ['America/Porto_Velho', ['RO']],
  ['America/Recife', ['PB', 'PE']],
  ['America/Rio_Branco', ['AC']],
  ['America/Sao_Paulo', ['DF', 'ES', 'GO', 'MG', 'PR', 'RJ', 'RS', 'SC', 'SP']]
]

function findTimezone <T> (map: Array<[string, T[]]>, value: T): string | null {
  for (const [timezone, list] of map) {
    if (list.includes(value)) {
      return timezone
    }
  }
  return null
}

export function getBrTimezone (stateCode: string, ibgeCode?: string): string {
  if (!isBrState(stateCode)) {
    throw new Error(`Invalid State Code: '${stateCode}'`)
  }

  let timezone: string | null

  if (ibgeCode !== undefined) {
    timezone = findTimezone(timezoneByCity, ibgeCode)
    if (timezone !== null) {
      return timezone
    }
  }

  timezone = findTimezone(timezoneByState, stateCode)
  if (timezone !== null) {
    return timezone
  }

  throw new Error(`State Code '${stateCode}' is not mapped to a timezone`)
}
