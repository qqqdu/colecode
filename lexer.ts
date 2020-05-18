import * as fs from 'fs'
interface Token {
  line: number,
  char: string,
  type: number
}
class Lexer {
  code: string
  nowLocation: number = -1
  nowLine: number = 0
  token:Array<Token> = []
  nowStr: string = ''
  constructor() {
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
        continue
      }
      this.readSign(char)
    }
  }
  readSign(char) {
    if(char === '=') {
      this.pushToken(char, 2, this.nowLine)
    } else if(char === '+') {
      this.pushToken(char, 4, this.nowLine)
    } else if(char === '-') {
      this.pushToken(char, 4, this.nowLine)
    } else if(char === '*') {
      this.pushToken(char, 4, this.nowLine)
    } else if(char === '/') {
      this.pushToken(char, 4, this.nowLine)
    } else if(char > '0' && char < '9') {
      this.readNumber(char)
    } else {
      console.error(char)
    }
  }
  readNumber(char: string) {
    console.log('readynum', char)
    if(char > '0' && char < '9') {
      this.nowStr += char
      this.readNumber(this.nextChar())
    } else if(this.nowStr) {
      this.pervChar()
      this.pushToken(this.nowStr, 3, this.nowLine)
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