import Single from '../../components/Single/Single'
import { singleProduct } from '../../data'
import './product.scss'

export default function Product() {
  return (
    <div className='product'>
      <Single {...singleProduct} />
    </div>
  )
}
