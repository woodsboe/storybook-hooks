export function Tag({tagName}: TagProps) {
  return (<div>{tagName}</div>)
}

interface TagProps {
  tagName: string;
}