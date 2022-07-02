import { cartActions } from "../../store/cart-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductList.scss";

const ProductItem = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(
        cartActions.addItemToCart({
            id: props.id,
            title: props.title,
            price: props.price,
        })
        );
    };
    // require(`../../assets/product-img/${props.img}`)
    return (<div className="card" key={props.id}>
    <div
      className="card_img"
      onClick={ () => navigate(`/products/${props.id}`) } 
    >
      <img alt="" src={`/assets/product-img/${props.img}`} />
    </div>
    <div className="card_info">
      <h2
        className="card_title"
        onClick={ () => navigate(`/products/${props.id}`) }
      >
        {props.title}
      </h2>
      <p className="=price">
        {props.price} <span>{props.currency}</span>
      </p>
      <div className="stars">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half" />
      </div>
      <div className="btn">
        <button onClick={ addToCartHandler }> Add to cart </button>
      </div>
    </div>
  </div>)
} 

export default ProductItem;