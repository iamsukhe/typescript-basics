type lookup = {
  arr: {
    a: string;
  }[]
  token: {
    myToken: string
  }
  innerArr: {
    a: {
        a: string;
      }[];
  }
}

type parseArr = lookup['arr'][0]
type parseInnerArr = lookup['innerArr']['a'][0]
type parse = lookup['token']