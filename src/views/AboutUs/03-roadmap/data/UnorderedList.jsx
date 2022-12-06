export const UnorderedList = ({ items }) => {
  return (
    <ul>
      {items.map(x => {
        return <li key={x}>{x}</li>
      })}
    </ul>
  )
}
