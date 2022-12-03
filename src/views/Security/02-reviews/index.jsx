import Link from 'next/link'

export const Reviews = (props) => {
  return (
    <div>
      {props.audits.map(audit => {
        return (
          <div key={audit.id}>
            <Link href={`/security/${audit.slug}`}>{audit.title}</Link>
          </div>
        )
      })}
    </div>
  )
}
