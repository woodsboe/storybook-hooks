export function Tag({tagName}: TagProps) {
  return (<div>{tagName}</div>)
}

export interface TagProps {
  tagName: string;
}