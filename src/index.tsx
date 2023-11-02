// Packages:
import {
  Component,
  JSXElement,
  onCleanup,
  onMount
} from 'solid-js'


// Functions:
export const useOutsideClickHandler = (ref: any, onOutsideClick: () => void) => {
  // Functions:
  const handleClickOutside = (event: MouseEvent) => {
    if (ref && !ref.contains(event.target)) onOutsideClick()
  }

  // Effects:
  onMount(() => {
    document.addEventListener('click', handleClickOutside, false)
  })

  onCleanup(() => {
    document.removeEventListener('click', handleClickOutside, false)
  })
}

export const OutsideClickHandler: Component<{
  children: JSXElement
  onOutsideClick: () => void
}> = (props) => {
  // Ref:
  let ref: any

  // Functions:
  const handleClickOutside = (event: MouseEvent) => {
    if (ref && !ref.contains(event.target)) props.onOutsideClick()
  }

  // Effects:
  onMount(() => {
    document.addEventListener('click', handleClickOutside, false)
  })

  onCleanup(() => {
    document.removeEventListener('click', handleClickOutside, false)
  })
  
  // Return:
  return (
    <div ref={ ref }>{ props.children }</div>
  )
}
