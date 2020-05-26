import * as fs from 'fs'
enum TOKEN_TYPE {
  definition = 0,
  letters = 1,
  assignment = 2,
  number = 3,
  operator = 4,
}

interface Token {
  line: number,
  char: string,
  type: number
}
interface Keyword {
  name: string
  type: string
  id: number
}
class Lexer {
  code: string
  nowLocation: number = -1
  nowLine: number = 0
  token:Array<Token> = []
  nowStr: string = ''
  keywordTable:Array<Keyword> = []
  regexpList = {
    declare: '^[a-zA-Z_]\w*$'
  }
  constructor() {
    this.keywordTable = [{
      name: 'let',
      type: 'definition',
      id: TOKEN_TYPE.definition
    }]
    this.readFile()
    this.readChar()
    console.log(this.token)
  }
  readChar() {
    while(this.nowLocation < this.code.length) {
      const char = this.nextChar()
      if(/\n|\t|\s/.test(char)) {
        if(/\n/.test(char)) {
          this.nowLine++
        }
      }
      this.readSign(char)
    }
  }
  readSign(char) {
    console.log(char)
    if(char === '=') {
      this.pushToken(char, TOKEN_TYPE.assignment, this.nowLine)
    } else if(char === '+') {
      this.pushToken(char, TOKEN_TYPE.operator, this.nowLine)
    } else if(char === '-') {
      this.pushToken(char, TOKEN_TYPE.operator, this.nowLine)
    } else if(char === '*') {
      this.pushToken(char, TOKEN_TYPE.operator, this.nowLine)
    } else if(char === '/') {
      this.pushToken(char, TOKEN_TYPE.operator, this.nowLine)
    } else if(char > '0' && char < '9') {
      this.readNumber(char)
    // start with a-z/A-z/_
    } else if(/[a-zA-Z_]/.test(char)) {
      this.readDeclare(char)
    } else {
      console.error(char)
    }
  }
  readNumber(char: string) {
    if(char > '0' && char < '9') {
      this.nowStr += char
      this.readNumber(this.nextChar())
    } else if(this.nowStr) {
      this.pervChar()
      this.pushToken(this.nowStr, 3, this.nowLine)
      this.nowStr = ''
    }
  }
  readDeclare(char: string) {
    if(/\w/.test(char) && char) {
      this.nowStr += char
      this.readDeclare(this.nextChar())
    } else if(this.nowStr) {
      this.pervChar()
      const item = this.keywordTable.find((item) => {item.name === this.nowStr})
      if(item) {
        this.pushToken(this.nowStr, item.id, this.nowLine)
      } else {
        this.pushToken(this.nowStr, 1, this.nowLine)
      }
      this.nowStr = ''
    }
  }
  nextChar(): string {
    this.nowLocation++
    return this.code[this.nowLocation]
  }
  pervChar(): string {
    this.nowLocation--
    return this.code[this.nowLocation]
  }
  pushToken(char: string, type: number, line: number) {
    this.token.push({
      char,
      type,
      line
    })
  }
  readFile() {
    const code = fs.readFileSync('./code.js')
    this.code = code.toString()
  }
}

const lexer = new Lexer()
lexer.readFile()