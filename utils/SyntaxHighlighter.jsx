import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { code } from './code.module.css'

export function Highlighter({ text }) {
  return (
    <div className={`${code}`}>
      <SyntaxHighlighter
        className='block'
        language="python"
        style={nord}
        customStyle={''}
        children={text}
      >
      </SyntaxHighlighter>
    </div>
  )
}