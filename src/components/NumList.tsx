import { useAppSelector } from '../hook'
import { NumItem } from './NumItem'


export const NumList = () => {
    const pages = useAppSelector(state => state.pages.list)
    
  return (
    <ul>
        {
            pages.map((page) => 
            <NumItem 
                key={page.id}
            {...page} />)
        }
    </ul>
  )
}
