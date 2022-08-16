import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Highlighter({ text }) {
  return (
    <SyntaxHighlighter
      className='block'
      language="python"
      style={nord}
      customStyle={''}
      children={text}
    >
    </SyntaxHighlighter>
  )
}