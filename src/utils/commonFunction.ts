export const addBadgeStyle = (
  status: string,
): 'purple' | 'blue' | 'green' | 'red' | 'yellow' | 'grey' | undefined => {
  switch (status) {
    case 'S':
      return 'purple'
    case 'P':
    case 'F':
    case 'Z':
      return 'blue'
    case 'C':
      return 'green'
    case 'T':
    case 'X':
    case 'D':
      return 'red'
    case 'N':
      return 'yellow'
    default:
      return 'grey'
  }
}

export const yesNoOption = [
  { key: 'Yes', value: 'Y' },
  { key: 'No', value: 'N' },
]
