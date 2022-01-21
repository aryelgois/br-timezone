import { brStates, getBrTimezone } from '~/main'

describe('getBrTimezone', () => {
  it('does not have duplicated State codes', () => {
    expect(new Set(brStates).size).toEqual(brStates.length)
  })

  it('has all States mapped', () => {
    expect.assertions(brStates.length)

    for (const state of brStates) {
      expect(() => getBrTimezone(state)).not.toThrow()
    }
  })

  it('checks for an invalid State', () => {
    expect(() => getBrTimezone('XX')).toThrow("Invalid State Code: 'XX'")
  })

  it('returns a timezone for a State', () => {
    expect(getBrTimezone('PE')).toEqual('America/Recife')
  })

  it('returns a timezone for a City', () => {
    expect(getBrTimezone('PE', '2605459')).toEqual('America/Noronha')
  })

  it('ignores unmapped Cities', () => {
    expect(getBrTimezone('CE', '000')).toEqual('America/Fortaleza')
  })
})
